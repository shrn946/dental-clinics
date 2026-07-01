'use client';
import { useEffect } from 'react';

export default function AccordionHandler() {
  useEffect(() => {
    const handleAccordionClick = (e: MouseEvent) => {
      const btn = (e.target as HTMLElement).closest('.accord-btn');
      if (!btn) return;
      
      const $ = (window as any).jQuery;
      if ($) {
        // Use jQuery for smooth sliding transitions
        e.preventDefault();
        const $btn = $(btn);
        const $content = $btn.next('.accord-content');
        const $accordionBox = $btn.closest('.accordion-box');
        
        if ($btn.hasClass('active')) {
          $btn.removeClass('active');
          $content.removeClass('collapsed').slideUp(500);
        } else {
          // Close others in the same box
          $accordionBox.find('.accord-btn').removeClass('active');
          $accordionBox.find('.accord-content').removeClass('collapsed').slideUp(500);
          
          // Open current
          $btn.addClass('active');
          $content.addClass('collapsed').slideDown(500);
        }
      } else {
        // Fallback to CSS-only toggling if jQuery is not yet initialized
        e.preventDefault();
        const accordionBlock = btn.closest('.accordion');
        if (!accordionBlock) return;
        const accordionBox = btn.closest('.accordion-box');
        if (!accordionBox) return;
        const content = accordionBlock.querySelector('.accord-content') as HTMLElement;
        if (!content) return;
        
        const isAlreadyActive = btn.classList.contains('active');
        
        const allBtns = accordionBox.querySelectorAll('.accord-btn');
        const allContents = accordionBox.querySelectorAll('.accord-content');
        
        allBtns.forEach((otherBtn) => otherBtn.classList.remove('active'));
        allContents.forEach((otherContent) => {
          (otherContent as HTMLElement).classList.remove('collapsed');
          (otherContent as HTMLElement).style.display = '';
        });
        
        if (!isAlreadyActive) {
          btn.classList.add('active');
          content.classList.add('collapsed');
        }
      }
    };

    document.addEventListener('click', handleAccordionClick);
    return () => {
      document.removeEventListener('click', handleAccordionClick);
    };
  }, []);

  return null;
}
