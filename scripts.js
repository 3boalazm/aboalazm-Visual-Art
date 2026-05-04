/* Shared site scripts:
   - Scroll-reveal on visibility
   - Smooth-scroll for in-page anchors
   - FAQ accordion (used on Services page)
   - Vercel Speed Insights
*/

(function () {
  // ---- Vercel Speed Insights
  // Initialize the queue for Speed Insights
  if (typeof window !== 'undefined' && !window.si) {
    window.si = function() {
      (window.siq = window.siq || []).push(arguments);
    };
  }

  // Inject Speed Insights script dynamically
  function injectSpeedInsights() {
    if (typeof document === 'undefined') return;
    
    const scriptSrc = '/_vercel/speed-insights/script.js';
    
    // Check if script already exists
    if (document.head.querySelector(`script[src*="${scriptSrc}"]`)) return;
    
    const script = document.createElement('script');
    script.src = scriptSrc;
    script.defer = true;
    script.dataset.sdkn = '@vercel/speed-insights';
    script.dataset.sdkv = '2.0.0';
    
    script.onerror = function() {
      console.log('[Vercel Speed Insights] Failed to load script. Please check if any content blockers are enabled.');
    };
    
    document.head.appendChild(script);
  }
  
  // Inject Speed Insights when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectSpeedInsights);
  } else {
    injectSpeedInsights();
  }

  // ---- Scroll reveals
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('is-visible'), (i % 6) * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

  // ---- Smooth scroll for in-page anchors only (#section-id)
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id.length > 1 && id !== '#') {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // ---- FAQ accordion
  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => item.classList.toggle('open'));
  });
})();
