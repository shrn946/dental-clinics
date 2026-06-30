
'use client';
import { useEffect } from 'react';

export default function Demo4ScriptLoader() {
  useEffect(() => {
    // Load scripts sequentially
    const loadScript = (src: string) => {
      return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        document.body.appendChild(script);
      });
    };

    const initScripts = async () => {
      if (typeof window !== 'undefined') {
        if (!window.$) await loadScript('https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js');
        await loadScript('https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js');
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js');
        await loadScript('/demo-4/assets/js/wow.js');
        await loadScript('/demo-4/assets/js/style-script.js');
        
        // Initialize plugins
        if (window.WOW) new window.WOW().init();
        if (window.AOS) window.AOS.init();
      }
    };
    
    initScripts();
  }, []);

  return null;
}
