/* ===== ASTER SHREE GARDENS - Mobile Navigation ===== */

(function () {
  'use strict';

    function initMobileNav() {
        const nav = document.querySelector('nav');
            const navUl = document.querySelector('nav ul');
                if (!nav || !navUl) return;

                    // Create hamburger button
                        const hamburger = document.createElement('button');
                            hamburger.className = 'hamburger';
                                hamburger.setAttribute('aria-label', 'Toggle navigation menu');
                                    hamburger.setAttribute('aria-expanded', 'false');
                                        hamburger.innerHTML =
                                              '<span class="ham-line"></span>' +
                                                    '<span class="ham-line"></span>' +
                                                          '<span class="ham-line"></span>';

                                                              // Insert hamburger before nav ul
                                                                  nav.insertBefore(hamburger, navUl);

                                                                      // Add nav-menu class to ul for targeting
                                                                          navUl.classList.add('nav-menu');

                                                                              // Toggle menu open/close
                                                                                  hamburger.addEventListener('click', function () {
                                                                                        const isOpen = navUl.classList.toggle('nav-open');
                                                                                              hamburger.classList.toggle('ham-active', isOpen);
                                                                                                    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
                                                                                                          // Prevent body scroll when menu is open
                                                                                                                document.body.style.overflow = isOpen ? 'hidden' : '';
                                                                                                                    });
                                                                                                                    
                                                                                                                        // Close menu when a nav link is clicked
                                                                                                                            navUl.addEventListener('click', function (e) {
                                                                                                                                  if (e.target.tagName === 'A') {
                                                                                                                                          navUl.classList.remove('nav-open');
                                                                                                                                                  hamburger.classList.remove('ham-active');
                                                                                                                                                          hamburger.setAttribute('aria-expanded', 'false');
                                                                                                                                                                  document.body.style.overflow = '';
                                                                                                                                                                        }
                                                                                                                                                                            });
                                                                                                                                                                            
                                                                                                                                                                                // Close menu when clicking outside
                                                                                                                                                                                    document.addEventListener('click', function (e) {
                                                                                                                                                                                          if (!nav.contains(e.target) && navUl.classList.contains('nav-open')) {
                                                                                                                                                                                                  navUl.classList.remove('nav-open');
                                                                                                                                                                                                          hamburger.classList.remove('ham-active');
                                                                                                                                                                                                                  hamburger.setAttribute('aria-expanded', 'false');
                                                                                                                                                                                                                          document.body.style.overflow = '';
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                    });
                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                        // Close menu on window resize to desktop
                                                                                                                                                                                                                                            window.addEventListener('resize', function () {
                                                                                                                                                                                                                                                  if (window.innerWidth > 768) {
                                                                                                                                                                                                                                                          navUl.classList.remove('nav-open');
                                                                                                                                                                                                                                                                  hamburger.classList.remove('ham-active');
                                                                                                                                                                                                                                                                          hamburger.setAttribute('aria-expanded', 'false');
                                                                                                                                                                                                                                                                                  document.body.style.overflow = '';
                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                            });
                                                                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                // Run when DOM is ready
                                                                                                                                                                                                                                                                                                  if (document.readyState === 'loading') {
                                                                                                                                                                                                                                                                                                      document.addEventListener('DOMContentLoaded', initMobileNav);
                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                            initMobileNav();
                                                                                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                                                                                              })();
