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

<div class="comingsoon_outer">
    <!-- Sub Banner -->
    <section class="comingsoon_section position-relative">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="logo_outer">
                        <figure class="banner-logo mb-0">
                            <img src="/eye-2/assets/images/logo.png" alt="image" class="img-fluid">
                        </figure>
                    </div>
                    <div class="sub_banner_content">
                        <h1>Coming Soon</h1>
                        <p class="text-size-18">Be the first to know when our new site is live</p>
                        <form action="javascript:;">
                            <div class="form-group position-relative">
                                <input type="text" class="form_style" placeholder="Email Address" name="email">
                                <button>Submit</button>
                            </div>
                        </form>
                        <ul class="list-unstyled mb-0 social-icon">
                            <li><a href="https://www.facebook.com/"><i class="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="https://twitter.com/"><i class="fa-brands fa-x-twitter"></i></a></li>
                            <li><a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a></li>
                            <li><a href="https://www.linkedin.com/"><i class="fa-brands fa-linkedin-in"></i></a></li>
                            <li><a href="https://www.pinterest.com/"><i class="fa-brands fa-pinterest-p"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
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
