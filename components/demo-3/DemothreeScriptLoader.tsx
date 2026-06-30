'use client';

import { useEffect } from 'react';

const SCRIPTS = [
  "/demo-3/js/jquery-3.7.1.min.js",
  "/demo-3/js/bootstrap.min.js",
  "/demo-3/js/validator.min.js",
  "/demo-3/js/jquery.slicknav.js",
  "/demo-3/js/swiper-bundle.min.js",
  "/demo-3/js/jquery.waypoints.min.js",
  "/demo-3/js/jquery.counterup.min.js",
  "/demo-3/js/jquery.magnific-popup.min.js",
  "/demo-3/js/SmoothScroll.js",
  "/demo-3/js/parallaxie.js",
  "/demo-3/js/jquery.event.move.js",
  "/demo-3/js/jquery.twentytwenty.js",
  "/demo-3/js/gsap.min.js",
  "/demo-3/js/magiccursor.js",
  "/demo-3/js/SplitText.min.js",
  "/demo-3/js/ScrollTrigger.min.js",
  "/demo-3/js/jquery.mb.YTPlayer.min.js",
  "/demo-3/js/wow.min.js",
  "/demo-3/js/function.js"
];

export default function DemothreeScriptLoader() {
  useEffect(() => {
    let index = 0;
    let isMounted = true;

    function loadNextScript() {
      if (!isMounted) return;
      if (index >= SCRIPTS.length) {
        return;
      }

      const src = SCRIPTS[index];
      
      if (document.querySelector(`script[src="${src}"]`)) {
        index++;
        loadNextScript();
        return;
      }

      const script = document.createElement('script');
      script.src = src;
      script.async = false;
      script.onload = () => {
        index++;
        loadNextScript();
      };
      script.onerror = () => {
        console.error(`Failed to load theme script: ${src}`);
        index++;
        loadNextScript();
      };
      document.body.appendChild(script);
    }

    loadNextScript();

    return () => {
      isMounted = false;
    };
  }, []);

  return null;
}
