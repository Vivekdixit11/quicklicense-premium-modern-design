/**
 * Google Ads Conversion Tracking Utilities
 */

// Extend Window interface for gtag
declare global {
    interface Window {
        dataLayer: any[];
        gtag: (...args: any[]) => void;
    }
}

/**
 * Check if user came from Google Ads
 * Checks URL parameters (gclid, utm_source) and session storage
 */
export function isFromGoogleAds(): boolean {
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
 * Track a lead form submission conversion (Page Load)
 * Only tracks if user came from Google Ads
 * Use this for thank-you page or confirmation page tracking
 * @param transactionId Optional unique transaction ID for deduplication
 * @param value Optional conversion value (defaults to 1.0 INR)
 */
export function trackLeadFormConversion(
    transactionId?: string,
    value: number = 1.0
): void {
    if (typeof window === 'undefined' || !window.gtag) {
        console.warn('Google Ads gtag not available');
        return;
    }

    // Only track if user came from Google Ads
    if (!isFromGoogleAds()) {
        console.log('ℹ️ Conversion not tracked - user did not come from Google Ads');
        return;
    }

    try {
        window.gtag('event', 'conversion', {
            'send_to': 'AW-17758729737/aR-lCJvXxcsbEInsgpRC',
            'value': value,
            'currency': 'INR',
            'transaction_id': transactionId || ''
        });
        console.log('✅ Google Ads conversion tracked (Page Load):', { transactionId, value });
    } catch (error) {
        console.error('❌ Failed to track Google Ads conversion:', error);
    }
}

/**
 * Report conversion with callback (Click-based)
 * Use this when tracking form button clicks or link clicks
 * @param url Optional URL to redirect to after tracking
 * @param transactionId Optional unique transaction ID for deduplication
 * @param value Optional conversion value (defaults to 1.0 INR)
 * @returns false to prevent default link behavior
 */
export function gtagReportConversion(
    url?: string,
    transactionId?: string,
    value: number = 1.0
): boolean {
    if (typeof window === 'undefined' || !window.gtag) {
        console.warn('Google Ads gtag not available');
        if (url) window.location.href = url;
        return false;
    }

    // Only track if user came from Google Ads
    if (!isFromGoogleAds()) {
        console.log('ℹ️ Conversion not tracked - user did not come from Google Ads');
        if (url) window.location.href = url;
        return false;
    }

    try {
        const callback = function () {
            if (typeof url !== 'undefined') {
                window.location.href = url;
            }
        };

        window.gtag('event', 'conversion', {
            'send_to': 'AW-17758729737/aR-lCJvXxcsbEInsgpRC',
            'value': value,
            'currency': 'INR',
            'transaction_id': transactionId || '',
            'event_callback': callback
        });
        console.log('✅ Google Ads conversion tracked (Click):', { url, transactionId, value });
    } catch (error) {
        console.error('❌ Failed to track Google Ads conversion:', error);
        if (url) window.location.href = url;
    }

    return false;
}

/**
 * Track a custom event with Google Ads
 * @param eventName Name of the event
 * @param params Additional event parameters
 */
export function trackCustomEvent(
    eventName: string,
    params?: Record<string, any>
): void {
    if (typeof window === 'undefined' || !window.gtag) {
        console.warn('Google Ads gtag not available');
        return;
    }

    try {
        window.gtag('event', eventName, params);
        console.log('✅ Google Ads event tracked:', eventName, params);
    } catch (error) {
        console.error('❌ Failed to track Google Ads event:', error);
    }
}

/**
 * Track page view with Google Ads
 * @param url Page URL
 */
export function trackPageView(url?: string): void {
    if (typeof window === 'undefined' || !window.gtag) {
        return;
    }

    try {
        window.gtag('config', 'AW-17758729737', {
            'page_path': url || window.location.pathname
        });
    } catch (error) {
        console.error('❌ Failed to track page view:', error);
    }
}
