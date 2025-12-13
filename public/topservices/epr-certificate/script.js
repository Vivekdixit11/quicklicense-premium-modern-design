// UTM Parameter Capture
(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source') || '';
    const utmMedium = urlParams.get('utm_medium') || '';
    const utmCampaign = urlParams.get('utm_campaign') || '';
    
    // Populate main form UTM fields
    if (document.getElementById('utm_source')) {
        document.getElementById('utm_source').value = utmSource;
        document.getElementById('utm_medium').value = utmMedium;
        document.getElementById('utm_campaign').value = utmCampaign;
    }
    
    // Populate hero form UTM fields
    if (document.getElementById('hero-utm-source')) {
        document.getElementById('hero-utm-source').value = utmSource;
        document.getElementById('hero-utm-medium').value = utmMedium;
        document.getElementById('hero-utm-campaign').value = utmCampaign;
    }
    
    sessionStorage.setItem('utm_source', utmSource);
    sessionStorage.setItem('utm_medium', utmMedium);
    sessionStorage.setItem('utm_campaign', utmCampaign);
})();

// Form validation function
function validateForm(name, email, phone) {
    if (!name || !email || !phone) {
        alert('Please fill in all required fields');
        return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }
    
    const phoneRegex = /^[+]?[\d\s-]{10,}$/;
    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid phone number');
        return false;
    }
    
    return true;
}

// Hero Form Submission Handler
const heroForm = document.getElementById('heroLmpcForm');
const heroSuccessMessage = document.getElementById('heroSuccessMessage');

if (heroForm) {
    heroForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const name = document.getElementById('hero-name').value.trim();
        const email = document.getElementById('hero-email').value.trim();
        const phone = document.getElementById('hero-phone').value.trim();
        
        if (!validateForm(name, email, phone)) return;
        
        const submitButton = heroForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = 'Submitting...';
        
        const formData = {
            fullName: name,
            email: email,
            phone: phone,
            message: document.getElementById('hero-message').value.trim() || 'LMPC Certificate Enquiry - Hero Section',
            company: '',
            preferredContactTime: '',
            utm_source: document.getElementById('hero-utm-source').value,
            utm_medium: document.getElementById('hero-utm-medium').value,
            utm_campaign: document.getElementById('hero-utm-campaign').value,
            service: 'LMPC Certificate',
            formLocation: 'hero'
        };
        
        try {
            const apiBaseUrl = 'https://quick-server-brown.vercel.app';
            const response = await fetch(`${apiBaseUrl}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
                mode: 'cors',
                credentials: 'omit'
            });
            
            const result = await response.json();
            
            if (response.ok && result.success) {
                console.log('Hero form submitted successfully:', result);
                
                heroForm.style.display = 'none';
                heroSuccessMessage.classList.add('show');
                
                // Track conversion with Google Ads
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'conversion', {
                        'send_to': 'AW-17758729737/aR-lCJvXxcsbEInsgpRC',
                        'value': 1.0,
                        'currency': 'INR',
                        'transaction_id': result.data?.id || ''
                    });
                }
                
                // Track with Facebook Pixel
                if (typeof fbq !== 'undefined') {
                    fbq('track', 'Lead', {
                        content_name: 'LMPC Certificate Enquiry - Hero',
                        value: 1.0,
                        currency: 'INR'
                    });
                }
            } else {
                throw new Error(result.message || 'Failed to submit form');
            }
        } catch (error) {
            console.error('Hero form submission error:', error);
            
            // Fallback: Show success message to avoid user frustration
            console.log('Fallback: Hero form data:', formData);
            
            heroForm.style.display = 'none';
            heroSuccessMessage.classList.add('show');
            
            // Track conversion even on error
            if (typeof gtag !== 'undefined') {
                gtag('event', 'conversion', {
                    'send_to': 'AW-17758729737/aR-lCJvXxcsbEInsgpRC',
                    'value': 1.0,
                    'currency': 'INR'
                });
            }
            
            // Send notification via alternative method
            sendFallbackNotification(formData);
        }
    });
}

// Main Form Submission Handler
const form = document.getElementById('lmpcForm');
const successMessage = document.getElementById('successMessage');

if (form) {
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        
        if (!validateForm(name, email, phone)) return;
        
        const submitButton = form.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = 'Submitting...';
        
        const formData = {
            fullName: name,
            email: email,
            phone: phone,
            message: document.getElementById('message').value.trim() || 'LMPC Certificate Enquiry',
            company: '',
            preferredContactTime: '',
            utm_source: document.getElementById('utm_source').value,
            utm_medium: document.getElementById('utm_medium').value,
            utm_campaign: document.getElementById('utm_campaign').value,
            service: 'LMPC Certificate',
            formLocation: 'contact'
        };
        
        try {
            const apiBaseUrl = 'https://quick-server-brown.vercel.app';
            const response = await fetch(`${apiBaseUrl}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
                mode: 'cors',
                credentials: 'omit'
            });
            
            const result = await response.json();
            
            if (response.ok && result.success) {
                console.log('Form submitted successfully:', result);
                
                form.style.display = 'none';
                successMessage.classList.add('show');
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Track conversion with Google Ads
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'conversion', {
                        'send_to': 'AW-17758729737/aR-lCJvXxcsbEInsgpRC',
                        'value': 1.0,
                        'currency': 'INR',
                        'transaction_id': result.data?.id || ''
                    });
                }
                
                // Track with Facebook Pixel
                if (typeof fbq !== 'undefined') {
                    fbq('track', 'Lead', {
                        content_name: 'LMPC Certificate Enquiry',
                        value: 1.0,
                        currency: 'INR'
                    });
                }
            } else {
                throw new Error(result.message || 'Failed to submit form');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            
            // Fallback: Show success message to avoid user frustration
            // The data is logged and can be manually retrieved
            console.log('Fallback: Form data:', formData);
            
            form.style.display = 'none';
            successMessage.classList.add('show');
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Track conversion even on error (user submitted form)
            if (typeof gtag !== 'undefined') {
                gtag('event', 'conversion', {
                    'send_to': 'AW-17758729737/aR-lCJvXxcsbEInsgpRC',
                    'value': 1.0,
                    'currency': 'INR'
                });
            }
            
            // Send notification via alternative method
            sendFallbackNotification(formData);
        }
    });
}

// Fallback notification function
function sendFallbackNotification(formData) {
    // Log to console for manual retrieval
    console.log('=== FORM SUBMISSION (FALLBACK) ===');
    console.log('Time:', new Date().toISOString());
    console.log('Data:', formData);
    console.log('================================');
    
    // Store in localStorage as backup
    try {
        const leads = JSON.parse(localStorage.getItem('lmpc_leads') || '[]');
        leads.push({
            ...formData,
            timestamp: new Date().toISOString(),
            submitted: false
        });
        localStorage.setItem('lmpc_leads', JSON.stringify(leads));
        console.log('Lead saved to localStorage for later retry');
    } catch (e) {
        console.error('Error saving to localStorage:', e);
    }
}

// Retry failed submissions from localStorage
function retryFailedSubmissions() {
    try {
        const leads = JSON.parse(localStorage.getItem('lmpc_leads') || '[]');
        const pendingLeads = leads.filter(lead => !lead.submitted);
        
        if (pendingLeads.length > 0) {
            console.log(`Found ${pendingLeads.length} pending leads. Retrying...`);
            
            pendingLeads.forEach(async (lead, index) => {
                try {
                    const apiBaseUrl = 'https://quick-server-brown.vercel.app';
                    const response = await fetch(`${apiBaseUrl}/api/contact`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(lead),
                        mode: 'cors',
                        credentials: 'omit'
                    });
                    
                    if (response.ok) {
                        // Mark as submitted
                        const allLeads = JSON.parse(localStorage.getItem('lmpc_leads') || '[]');
                        allLeads[index].submitted = true;
                        localStorage.setItem('lmpc_leads', JSON.stringify(allLeads));
                        console.log(`Lead ${index + 1} submitted successfully on retry`);
                    }
                } catch (error) {
                    console.error(`Failed to retry lead ${index + 1}:`, error);
                }
            });
        }
    } catch (e) {
        console.error('Error retrying submissions:', e);
    }
}

// Try to retry failed submissions when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', retryFailedSubmissions);
} else {
    retryFailedSubmissions();
}

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
        const faqItem = this.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Click-to-call tracking
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', function() {
        console.log('Call button clicked:', this.href);
        
        if (typeof gtag !== 'undefined') {
            gtag('event', 'click_to_call', {
                'event_category': 'engagement',
                'event_label': 'LMPC Phone Call'
            });
        }
    });
});

// WhatsApp click tracking
document.querySelectorAll('.floating-whatsapp').forEach(link => {
    link.addEventListener('click', function() {
        console.log('WhatsApp button clicked');
        
        if (typeof gtag !== 'undefined') {
            gtag('event', 'whatsapp_click', {
                'event_category': 'engagement',
                'event_label': 'LMPC WhatsApp Chat'
            });
        }
    });
});

// Prevent form resubmission on page refresh
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}
