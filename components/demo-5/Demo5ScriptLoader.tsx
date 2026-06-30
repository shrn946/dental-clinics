'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Demo5ScriptLoader() {
  const pathname = usePathname();

  useEffect(() => {
    const scripts = ["/demo-5/js/vendor/modernizr-3.5.0.min.js","/demo-5/js/vendor/jquery-3.6.0.min.js","/demo-5/js/popper.min.js","/demo-5/js/bootstrap.min.js","/demo-5/js/slick.min.js","/demo-5/js/ajax-form.js","/demo-5/js/paroller.js","/demo-5/js/wow.min.js","/demo-5/js/js_isotope.pkgd.min.js","/demo-5/js/imagesloaded.min.js","/demo-5/js/parallax.min.js","/demo-5/js/jquery.waypoints.min.js","/demo-5/js/jquery.counterup.min.js","/demo-5/js/jquery.scrollUp.min.js","/demo-5/js/jquery.meanmenu.min.js","/demo-5/js/parallax-scroll.js","/demo-5/js/jquery.magnific-popup.min.js","/demo-5/js/element-in-view.js","/demo-5/js/main.js"];
    
    let promise = Promise.resolve();
    scripts.forEach(src => {
      promise = promise.then(() => new Promise((resolve) => {
        const existingScript = document.querySelector(`script[src="${src}"]`);
        
        // If it's an initialization script (like main.js), we want to forcefully re-run it
        // by removing it and adding it back, so it rebinds sliders to the newly routed DOM
        const isInitScript = src.endsWith('main.js');
        
        if (existingScript && !isInitScript) {
          resolve();
          return;
        }
        
        if (existingScript && isInitScript) {
          existingScript.remove();
        }

        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve();
        script.onerror = () => resolve(); // Continue even if one fails
        document.body.appendChild(script);
      }));
    });
  }, [pathname]); // Re-run when pathname changes
  
  return null;
}
