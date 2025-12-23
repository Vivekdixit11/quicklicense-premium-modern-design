/**
 * API Client for Contact Form Submission
 * Communicates with the quickServer backend
 */


// Type definitions matching backend schema
export interface ContactFormData {
    fullName: string;
    email: string;
    phone: string;
    company?: string;
    message: string;
    preferredContactTime?: string;
}

export interface ContactFormResponse {
    success: boolean;
    message: string;
    data?: {
        id: string;
        fullName: string;
        email: string;
    };
    warnings?: string[];
}

export interface ContactFormError {
    success: false;
    message: string;
    errors?: Array<{
        field: string;
        message: string;
    }>;
    error?: string;
}

/**
 * Check if user came from Google Ads
 * Checks URL parameters (gclid, utm_source) and session storage
 */
function isFromGoogleAds(): boolean {
    if (typeof window === 'undefined') return false;

    // Check if already marked in session
    const isMarked = sessionStorage.getItem('from_google_ads') === 'true';
    if (isMarked) return true;

    // Check URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const hasGclid = urlParams.has('gclid'); // Google Click ID
    const isGoogleAds = urlParams.get('utm_source') === 'google' || 
                        urlParams.get('utm_source') === 'google_ads' ||
                        urlParams.get('utm_medium')?.includes('cpc');

    // Check referrer
    const referrer = document.referrer.toLowerCase();
    const fromGoogle = referrer.includes('google.com') || referrer.includes('googleadservices.com');

    // If any indicator is true, mark the session
    if (hasGclid || isGoogleAds || fromGoogle) {
        sessionStorage.setItem('from_google_ads', 'true');
        return true;
    }

    return false;
}

/**
 * Submit contact form data to the backend API
 * @param data Contact form data
 * @returns Promise with response data
 * @throws Error if submission fails
 */
export async function submitContactForm(
    data: ContactFormData
): Promise<ContactFormResponse> {
    // Use environment variable or fallback to production server
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://quick-server-brown.vercel.app';
    const endpoint = `${apiBaseUrl}/api/contact`;

    // Debug logging (only in development)
    if (process.env.NODE_ENV === 'development') {
        console.log('🔍 API Client Debug Info:');
        console.log('  Using API URL:', endpoint);
    }

    try {
        // Reduced timeout - server is now optimized for fast response
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout (was 30s)

        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            signal: controller.signal,
            // Add cache and keep-alive settings for better performance
            cache: 'no-store',
            keepalive: true,
        });

        clearTimeout(timeoutId);

        // Minimal logging in production
        if (process.env.NODE_ENV === 'development') {
            console.log('📡 Response status:', response.status);
        }

        const result = await response.json();

        if (!response.ok) {
            // Handle validation errors or server errors
            const error = result as ContactFormError;

            if (error.errors && error.errors.length > 0) {
                // Validation errors
                const errorMessages = error.errors.map(e => e.message).join(', ');
                throw new Error(errorMessages);
            }

            throw new Error(error.message || 'Failed to submit form');
        }

        // Track conversion using centralized googleAds helper
        try {
            const { trackLeadFormConversion } = await import('./googleAds');
            trackLeadFormConversion(result.data?.id || '', 1.0);
        } catch (e) {
            console.warn('Google Ads helper not available to track conversion', e);
        }

        return result as ContactFormResponse;
    } catch (error) {
        console.error('❌ API Client Error:', error);

        // Handle abort/timeout errors
        if (error instanceof Error && error.name === 'AbortError') {
            throw new Error('Request timeout. Please check your connection and try again.');
        }

        // Network errors or other exceptions
        if (error instanceof Error) {
            throw error;
        }
        throw new Error('An unexpected error occurred. Please try again.');
    }
}
