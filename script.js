
    window.addEventListener('load', function () {
      const preloader = document.getElementById('preloader');
      setTimeout(() => {
        preloader.classList.add('fade-out');
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 700);
      }, 700);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Active section highlighting
    window.addEventListener('scroll', function () {
      const sections = document.querySelectorAll('section, .hero, .services, .about, .contact-section');
      const navLinks = document.querySelectorAll('.menu a');

      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    });

    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('open');
    });
    // Close mobile menu when a link is clicked
    document.querySelectorAll('.mobile-menu a').forEach(link => {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('open');
      });
    });
    // Close mobile menu when close button is clicked
    document.querySelector('.close-menu').addEventListener('click', function () {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('open');
    });

// GSAP Animations for sections
window.addEventListener('DOMContentLoaded', function () {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  // Hero Section
  gsap.from('.hero', {
    opacity: 0,
    y: 60,
    duration: 1.1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top 85%',
    }
  });

  // Marquee (all)
  gsap.utils.toArray('.custom-marquee').forEach((marquee, i) => {
    gsap.from(marquee, {
      opacity: 0,
      x: i % 2 === 0 ? -60 : 60,
      duration: 0.9,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: marquee,
        start: 'top 90%',
      }
    });
  });

  // Explore Section (first .section)
  gsap.from('.section', {
    opacity: 0,
    y: 60,
    duration: 1.1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.section',
      start: 'top 85%',
    }
  });

  // Services
  gsap.from('.services', {
    opacity: 0,
    y: 60,
    duration: 1.1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.services',
      start: 'top 85%',
    }
  });

  // About
  gsap.from('.about', {
    opacity: 0,
    y: 60,
    duration: 1.1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.about',
      start: 'top 85%',
    }
  });

  // Contact Section
  gsap.from('.contact-section', {
    opacity: 0,
    y: 60,
    duration: 1.1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.contact-section',
      start: 'top 85%',
    }
  });

  // Footer
  gsap.from('.footer', {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.footer',
      start: 'top 95%',
    }
  });
});
