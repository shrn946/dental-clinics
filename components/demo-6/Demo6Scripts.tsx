'use client';
import { useEffect } from 'react';

export default function Demo6Scripts() {
  useEffect(() => {
    // Use Intersection Observer to animate elements when scrolled into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          
          // Progress Bars
          if (target.classList.contains('theme-widget-progress') || target.classList.contains('plus-progress-bar')) {
            const bars = target.querySelectorAll('.theme-progress-bar, .ptb-progress-bar-filled, .progress_bar-skill-bar-filled');
            bars.forEach((bar) => {
              const b = bar as HTMLElement;
              const progress = b.getAttribute('data-max') || b.parentElement?.getAttribute('data-percent-value') || '100';
              setTimeout(() => {
                b.style.width = `${progress}%`;
              }, 100);
            });
            observer.unobserve(target);
          }
          
          // Animations (theme-invisible)
          if (target.classList.contains('theme-invisible')) {
             try {
               const settingsStr = target.getAttribute('data-settings');
               if (settingsStr) {
                 const settings = JSON.parse(settingsStr);
                 const animationName = settings.animation || settings._animation;
                 if (animationName) {
                   target.classList.remove('theme-invisible');
                   target.classList.add('animated', animationName);
                   const delay = settings.animation_delay || settings._animation_delay;
                   if (delay) {
                     target.style.animationDelay = `${delay}ms`;
                   }
                 } else {
                   target.classList.remove('theme-invisible');
                 }
               } else {
                 target.classList.remove('theme-invisible');
               }
             } catch (e) {
               target.classList.remove('theme-invisible');
             }
             observer.unobserve(target);
          }
        }
      });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll('.theme-invisible, .theme-widget-progress, .plus-progress-bar');
    animatedElements.forEach(el => observer.observe(el));
    
    // Navigation Menu Logic (Mobile Toggle & Dropdowns)
    const toggleButton = document.querySelector('.theme-menu-toggle');
    const dropdownMenu = document.querySelector('nav.theme-nav-menu--dropdown');
    
    if (toggleButton && dropdownMenu) {
      toggleButton.addEventListener('click', (e) => {
        const isActive = toggleButton.classList.contains('theme-active');
        if (isActive) {
          toggleButton.classList.remove('theme-active');
          toggleButton.setAttribute('aria-expanded', 'false');
          dropdownMenu.classList.remove('theme-active');
          dropdownMenu.setAttribute('aria-hidden', 'true');
        } else {
          toggleButton.classList.add('theme-active');
          toggleButton.setAttribute('aria-expanded', 'true');
          dropdownMenu.classList.add('theme-active');
          dropdownMenu.setAttribute('aria-hidden', 'false');
        }
      });
    }

    // Submenu Toggles
    const menuItemsWithChildren = document.querySelectorAll('.menu-item-has-children > a');
    menuItemsWithChildren.forEach(item => {
      item.addEventListener('click', (e) => {
        // If it's a mobile menu or a hash link, toggle the submenu
        if (item.getAttribute('href') === '#' || item.closest('.theme-nav-menu--dropdown')) {
          e.preventDefault();
          const parentLi = item.parentElement;
          if (parentLi) {
            parentLi.classList.toggle('theme-active');
            const subMenu = parentLi.querySelector('.sub-menu');
            if (subMenu) {
              if (subMenu.classList.contains('theme-active')) {
                subMenu.classList.remove('theme-active');
                subMenu.setAttribute('style', 'display: none;');
              } else {
                subMenu.classList.add('theme-active');
                subMenu.setAttribute('style', 'display: block;');
              }
            }
          }
        }
      });
    });
    
    return () => observer.disconnect();
  }, []);

  return null;
}
