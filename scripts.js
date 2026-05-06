/* Shared site scripts:
   - Scroll-reveal on visibility
   - Smooth-scroll for in-page anchors
   - FAQ accordion (used on Services page)
*/

(function () {
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

  // ---- Burger menu toggle
  const menuToggle = document.querySelector('.nav-menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');

      // Close menu when clicking on a link
      if (navLinks.classList.contains('active')) {
        navLinks.querySelectorAll('a').forEach(link => {
          link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
          });
        });
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
      }
    });
    /* =================================================================
   CUSTOM CURSOR INITIALIZATION
   ================================================================= */
(function initCustomCursor() {
  // إنشاء عناصر الـ cursor
  const cursor = document.createElement('div');
  cursor.className = 'cc-cursor';
  document.body.appendChild(cursor);
  
  const cursorDot = document.createElement('div');
  cursorDot.className = 'cc-cursor-dot';
  document.body.appendChild(cursorDot);
  
  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  
  // تتبع حركة الماوس
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // تحديث موقع النقطة الصغيرة فورًا
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';
    
    // إضافة trail
    if (Math.random() > 0.9) {
      const trail = document.createElement('div');
      trail.className = 'cc-trail';
      trail.style.left = mouseX + 'px';
      trail.style.top = mouseY + 'px';
      document.body.appendChild(trail);
      setTimeout(() => trail.remove(), 600);
    }
  });
  
  // Animation loop للـ cursor الرئيسي (smooth following)
  function animateCursor() {
    const dx = mouseX - cursorX;
    const dy = mouseY - cursorY;
    
    cursorX += dx * 0.15;
    cursorY += dy * 0.15;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    requestAnimationFrame(animateCursor);
  }
  animateCursor();
  
  // Hover effects على الروابط والأزرار
  const interactiveElements = document.querySelectorAll('a, button, .nav-link, .btn, .project, .contact-card');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
  
  // Click effect
  document.addEventListener('mousedown', () => {
    document.body.classList.add('cursor-click');
    
    // إضافة ripple effect
    const ripple = document.createElement('div');
    ripple.className = 'cc-ripple';
    ripple.style.left = mouseX + 'px';
    ripple.style.top = mouseY + 'px';
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
  
  document.addEventListener('mouseup', () => {
    document.body.classList.remove('cursor-click');
  });
})();
  }
