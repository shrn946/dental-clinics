'use client';
import React, {useEffect} from 'react';

export default function Page() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const $ = (window as any).jQuery;
      if ($) {
        $(window).trigger('resize');
        if (typeof (window as any).AOS !== 'undefined') {
          (window as any).AOS.refresh();
        }
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: `

<!-- Error -->
<div class="error_page position-relative">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="error_content position-relative text-center">
                    <h1>404</h1>
                    <p class="text">Sorry! The Page Not Found ;(</p>
                    <p class="col-xl-8 col-lg-10 mx-auto text2">Lorem ipsum dolor sit amet, consec tse tur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                    <a href="/eye-2" class="back_home text-decoration-none">Back to Home<i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- PRE LOADER -->
<div class="loader-mask">
    <div class="loader">
        <div></div>
        <div></div>
    </div>
</div>
<!-- Latest compiled JavaScript -->






    ` }} />
  );
}
