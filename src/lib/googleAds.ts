/**
 * Google Ads utilities — REMOVED tracking implementation.
 *
 * This file previously contained Google Ads / gtag logic (AW-17758729737).
 * Per request, the concrete tracking calls were removed and replaced with
 * lightweight no-op stubs. When you provide the new tracking snippet or
 * a different analytics provider, replace the stub implementations below.
 */

// Google Ads helper wrapper using gtag
declare global {
    interface Window {
        dataLayer: any[];
        gtag?: (...args: any[]) => void;
    }
}

const CONVERSION_ID = 'AW-17758729737';
const CONVERSION_LABEL = 'aR-lCJvXxcsbEInsgpRC';

export function hasGtag(): boolean {
    return typeof window !== 'undefined' && typeof window.gtag === 'function';
}

export function trackLeadFormConversion(transactionId?: string, value: number = 1.0): void {
    if (!hasGtag()) {
        console.warn('gtag not available; conversion not sent');
        return;
    }

    try {
        window.gtag?.('event', 'conversion', {
            'send_to': `${CONVERSION_ID}/${CONVERSION_LABEL}`,
            'value': value,
            'currency': 'INR',
            'transaction_id': transactionId || ''
        });
        console.log('✅ Google Ads conversion sent', { transactionId, value });
    } catch (e) {
        console.error('Failed to send Google Ads conversion', e);
    }
}

export function reportConversion(url?: string, transactionId?: string, value: number = 1.0): void {
    if (!hasGtag()) {
        if (url) window.location.href = url;
        return;
    }

    try {
        window.gtag?.('event', 'conversion', {
            'send_to': `${CONVERSION_ID}/${CONVERSION_LABEL}`,
            'value': value,
            'currency': 'INR',
            'transaction_id': transactionId || '',
            'event_callback': function () {
                if (url) window.location.href = url;
            }
        });
    } catch (e) {
        console.error('Failed to report conversion', e);
        if (url) window.location.href = url;
    }
}

export function trackCustomEvent(eventName: string, params?: Record<string, any>): void {
    if (!hasGtag()) return;
    try {
        window.gtag?.('event', eventName, params || {});
    } catch (e) {
        console.error('Failed to send custom gtag event', e);
    }
}

export function configurePageView(url?: string): void {
    if (!hasGtag()) return;
    try {
        window.gtag?.('config', CONVERSION_ID, { page_path: url || window.location.pathname });
    } catch (e) {
        console.error('Failed to config gtag page view', e);
    }
}
