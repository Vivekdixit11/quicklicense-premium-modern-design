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

    // Debug logging
    console.log('🔍 API Client Debug Info:');
    console.log('  Environment variable:', process.env.NEXT_PUBLIC_API_BASE_URL);
    console.log('  Using API URL:', endpoint);
    console.log('  Submitting data:', data);

    try {
        // Add timeout to prevent hanging requests
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

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

        console.log('📡 Response status:', response.status);
        console.log('📡 Response ok:', response.ok);

        const result = await response.json();
        console.log('📡 Response data:', result);

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
