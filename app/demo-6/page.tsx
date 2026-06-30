
import Chatbot from '@/components/Chatbot';
import Demo6Scripts from '@/components/demo-6/Demo6Scripts';

export default function Page() {
  return (
    <div className="home wp-singular page-template page-template-theme_header_footer page page-id-135 wp-embed-responsive -hello-theme hello-theme-default theme-default theme-template-full-width theme-kit-7 theme-page theme-page-135">
      
      
      <style dangerouslySetInnerHTML={{ __html: `
img:is([sizes=auto i],[sizes^="auto," i]){contain-intrinsic-size:3000px 1500px}
/*# sourceURL=wp-img-auto-sizes-contain-inline-css */
` }} />
      <style dangerouslySetInnerHTML={{ __html: `

	img.wp-smiley, img.emoji {
		display: inline !important;
		border: none !important;
		box-shadow: none !important;
		height: 1em !important;
		width: 1em !important;
		margin: 0 0.07em !important;
		vertical-align: -0.1em !important;
		background: none !important;
		padding: 0 !important;
	}
/*# sourceURL=wp-emoji-styles-inline-css */
` }} />
      <style dangerouslySetInnerHTML={{ __html: `
:root{--wp--preset--aspect-ratio--square: 1;--wp--preset--aspect-ratio--4-3: 4/3;--wp--preset--aspect-ratio--3-4: 3/4;--wp--preset--aspect-ratio--3-2: 3/2;--wp--preset--aspect-ratio--2-3: 2/3;--wp--preset--aspect-ratio--16-9: 16/9;--wp--preset--aspect-ratio--9-16: 9/16;--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgb(6,147,227) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgb(252,185,0) 0%,rgb(255,105,0) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgb(255,105,0) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgb(255, 255, 255), 6px 6px rgb(0, 0, 0);--wp--preset--shadow--crisp: 6px 6px 0px rgb(0, 0, 0);}:root { --wp--style--global--content-size: 800px;--wp--style--global--wide-size: 1200px; }:where(body) { margin: 0; }.wp-site-blocks > .alignleft { float: left; margin-right: 2em; }.wp-site-blocks > .alignright { float: right; margin-left: 2em; }.wp-site-blocks > .aligncenter { justify-content: center; margin-left: auto; margin-right: auto; }:where(.wp-site-blocks) > * { margin-block-start: 24px; margin-block-end: 0; }:where(.wp-site-blocks) > :first-child { margin-block-start: 0; }:where(.wp-site-blocks) > :last-child { margin-block-end: 0; }:root { --wp--style--block-gap: 24px; }:root :where(.is-layout-flow) > :first-child{margin-block-start: 0;}:root :where(.is-layout-flow) > :last-child{margin-block-end: 0;}:root :where(.is-layout-flow) > *{margin-block-start: 24px;margin-block-end: 0;}:root :where(.is-layout-constrained) > :first-child{margin-block-start: 0;}:root :where(.is-layout-constrained) > :last-child{margin-block-end: 0;}:root :where(.is-layout-constrained) > *{margin-block-start: 24px;margin-block-end: 0;}:root :where(.is-layout-flex){gap: 24px;}:root :where(.is-layout-grid){gap: 24px;}.is-layout-flow > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}.is-layout-flow > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}.is-layout-flow > .aligncenter{margin-left: auto !important;margin-right: auto !important;}.is-layout-constrained > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}.is-layout-constrained > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}.is-layout-constrained > .aligncenter{margin-left: auto !important;margin-right: auto !important;}.is-layout-constrained > :where(:not(.alignleft):not(.alignright):not(.alignfull)){max-width: var(--wp--style--global--content-size);margin-left: auto !important;margin-right: auto !important;}.is-layout-constrained > .alignwide{max-width: var(--wp--style--global--wide-size);}body .is-layout-flex{display: flex;}.is-layout-flex{flex-wrap: wrap;align-items: center;}.is-layout-flex > :is(*, div){margin: 0;}body .is-layout-grid{display: grid;}.is-layout-grid > :is(*, div){margin: 0;}body{padding-top: 0px;padding-right: 0px;padding-bottom: 0px;padding-left: 0px;}:root :where(.wp-element-button, .block-button__link){background-color: #32373c;border-width: 0;color: #fff;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;letter-spacing: inherit;line-height: inherit;padding-top: calc(0.667em + 2px);padding-right: calc(1.333em + 2px);padding-bottom: calc(0.667em + 2px);padding-left: calc(1.333em + 2px);text-decoration: none;text-transform: inherit;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}
:root :where(.block-icon svg){width: 24px;}
:root :where(.block-pullquote){font-size: 1.5em;line-height: 1.6;}
/*# sourceURL=global-styles-inline-css */
` }} />
      <style dangerouslySetInnerHTML={{ __html: `

			` }} />
      <style dangerouslySetInnerHTML={{ __html: `
    .theme-135 .theme-element.theme-element-6d639874 {
        background-color: #3a3089 !important;
    }
    .theme-135 .theme-element.theme-element-7d52fd9d {
        background-color: #3a3089 !important;
    }
    .theme-135 .theme-element.theme-element-7d52fd9d::before, 
    .theme-135 .theme-element.theme-element-7d52fd9d > .theme-background-video-container::before, 
    .theme-135 .theme-element.theme-element-7d52fd9d > .e-con-inner > .theme-background-video-container::before, 
    .theme-135 .theme-element.theme-element-7d52fd9d > .theme-background-slideshow::before, 
    .theme-135 .theme-element.theme-element-7d52fd9d > .e-con-inner > .theme-background-slideshow::before, 
    .theme-135 .theme-element.theme-element-7d52fd9d > .theme-motion-effects-container > .theme-motion-effects-layer::before {
        background-image: url(/demo-6/assets/uploads/sites/19/2024/09/shape-2-min.png) !important;
        --background-overlay: '';
        background-position: top left !important;
        background-repeat: no-repeat !important;
        background-size: auto !important;
    }
    ` }} />
      <div dangerouslySetInnerHTML={{ __html: `
<a class="skip-link screen-reader-text" href="#content">Skip to content</a>
<header class="theme theme-21 theme-location-header" data-theme-id="21" data-theme-post-type="theme_library" data-theme-type="header">
<div class="theme-element theme-element-1a28cd14 theme-hidden-mobile e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="1a28cd14" data-settings='{"background_background":"classic"}'>
<div class="e-con-inner">
<div class="theme-element theme-element-4de4a71a e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="4de4a71a">
<div class="theme-element theme-element-7845466b theme-icon-list--layout-inline theme-align-start theme-tablet-align-start theme-widget__width-auto theme-list-item-link-full_width theme-widget theme-widget-icon-list" data-e-type="widget" data-element_type="widget" data-id="7845466b" data-widget_type="icon-list.default">
<div class="theme-widget-container">
<ul class="theme-icon-list-items theme-inline-items">
<li class="theme-icon-list-item theme-inline-item">
<span class="theme-icon-list-icon">
<i aria-hidden="true" class="fas fa-map-marker-alt"></i> </span>
<span class="theme-icon-list-text">4924 Buck Drive South Burlington, VT 05403</span>
</li>
<li class="theme-icon-list-item theme-inline-item">
<span class="theme-icon-list-icon">
<i aria-hidden="true" class="fas fa-envelope"></i> </span>
<span class="theme-icon-list-text">email@domain.com</span>
</li>
<li class="theme-icon-list-item theme-inline-item">
<span class="theme-icon-list-icon">
<i aria-hidden="true" class="fas fa-phone"></i> </span>
<span class="theme-icon-list-text">+(123) 4567 8900</span>
</li>
</ul>
</div>
</div>
<div class="theme-element theme-element-5c1a40e4 e-grid-align-left theme-shape-circle theme-widget__width-auto theme-grid-0 theme-widget theme-widget-social-icons" data-e-type="widget" data-element_type="widget" data-id="5c1a40e4" data-widget_type="social-icons.default">
<div class="theme-widget-container">
<div class="theme-social-icons-wrapper theme-grid" role="list">
<span class="theme-grid-item" role="listitem">
<a class="theme-icon theme-social-icon theme-social-icon-facebook-f theme-repeater-item-320e991" href="#" target="_blank">
<span class="theme-screen-only">Facebook-f</span>
<i aria-hidden="true" class="fab fa-facebook-f"></i> </a>
</span>
<span class="theme-grid-item" role="listitem">
<a class="theme-icon theme-social-icon theme-social-icon-twitter theme-repeater-item-1491259" href="#" target="_blank">
<span class="theme-screen-only">Twitter</span>
<i aria-hidden="true" class="fab fa-twitter"></i> </a>
</span>
<span class="theme-grid-item" role="listitem">
<a class="theme-icon theme-social-icon theme-social-icon-github theme-repeater-item-8206083" href="#" target="_blank">
<span class="theme-screen-only">Github</span>
<i aria-hidden="true" class="fab fa-github"></i> </a>
</span>
<span class="theme-grid-item" role="listitem">
<a class="theme-icon theme-social-icon theme-social-icon-bitbucket theme-repeater-item-dccfaf9" href="#" target="_blank">
<span class="theme-screen-only">Bitbucket</span>
<i aria-hidden="true" class="fab fa-bitbucket"></i> </a>
</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="theme-element theme-element-1caf13f1 e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="1caf13f1">
<div class="e-con-inner">
<div class="theme-element theme-element-1ec5ee e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="1ec5ee">
<div class="theme-element theme-element-2470b06 theme-widget__width-initial theme-widget theme-widget-spacer" data-e-type="widget" data-element_type="widget" data-id="2470b06" data-widget_type="spacer.default" style="display: none;">
<div class="theme-widget-container">
<div class="theme-spacer">
<div class="theme-spacer-inner"></div>
</div>
</div>
</div>
<div class="theme-element theme-element-237a702 theme-widget__width-auto theme-widget theme-widget-heading" data-e-type="widget" data-element_type="widget" data-id="237a702" data-widget_type="heading.default">
<div class="theme-widget-container">
<div class="theme-heading-title theme-size-default"><a href="/demo-6" style="display: flex; align-items: center; gap: 10px;"><img src="/demo-6/assets/uploads/sites/19/2024/09/logo-tt-white.png" alt="Dental Logo" style="height: 35px; width: auto; object-fit: contain;" />Dental</a></div> </div>
</div>
</div>
<div class="theme-element theme-element-79c3dbf6 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="79c3dbf6">
<div class="theme-element theme-element-1f042073 theme-nav-menu--stretch theme-widget__width-auto theme-nav-menu__align-end theme-nav-menu--dropdown-tablet_extra theme-nav-menu__text-align-aside theme-nav-menu--toggle theme-nav-menu--burger theme-widget theme-widget-nav-menu" data-e-type="widget" data-element_type="widget" data-id="1f042073" data-settings='{"full_width":"stretch","layout":"horizontal","submenu_icon":{"value":"&lt;i class=\"fas fa-caret-down\" aria-hidden=\"true\"&gt;&lt;\/i&gt;","library":"fa-solid"},"toggle":"burger"}' data-widget_type="nav-menu.default">
<div class="theme-widget-container">
<nav aria-label="Menu" class="theme-nav-menu--main theme-nav-menu__container theme-nav-menu--layout-horizontal e--pointer-none">
<ul class="theme-nav-menu" id="menu-1-1f042073"><li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-238"><a class="theme-item theme-item-anchor" href="#">Homepages</a>
<ul class="sub-menu theme-nav-menu--dropdown">
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-135 current_page_item menu-item-224"><a aria-current="page" class="theme-sub-item theme-item-active" href="/demo-6">Home 01</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-230"><a class="theme-sub-item" href="home-02/index.html">Home 02</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-239"><a class="theme-item theme-item-anchor" href="#">Pages</a>
<ul class="sub-menu theme-nav-menu--dropdown">
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-227"><a class="theme-sub-item" href="/demo-6/about-us">About Us</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-236"><a class="theme-sub-item" href="/demo-6/services">Services</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-232"><a class="theme-sub-item" href="/demo-6/pricing-plan-01">Pricing Plan 01</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-233"><a class="theme-sub-item" href="/demo-6/pricing-plan-02">Pricing Plan 02</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-226"><a class="theme-sub-item" href="404-not-found/index.html">404</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-241"><a class="theme-item theme-item-anchor" href="#">Treatments</a>
<ul class="sub-menu theme-nav-menu--dropdown">
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-229"><a class="theme-sub-item" href="/demo-6/dental-appliances">Dental Appliances</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-234"><a class="theme-sub-item" href="/demo-6/prosthetics">Prosthetics</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-235"><a class="theme-sub-item" href="/demo-6/root-canal-treatment">Root Canal Treatment</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-237"><a class="theme-sub-item" href="/demo-6/tooth-whitening">Tooth Whitening</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-231"><a class="theme-sub-item" href="/demo-6/lenses">Lenses</a></li>
</ul>
</li>

<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-228"><a class="theme-item" href="/demo-6/contact-us">Contact Us</a></li>
</ul> </nav>
<div aria-expanded="false" aria-label="Menu Toggle" class="theme-menu-toggle" role="button" tabindex="0">
<i aria-hidden="true" class="theme-menu-toggle__icon--open eicon-menu-bar" role="presentation"></i><i aria-hidden="true" class="theme-menu-toggle__icon--close eicon-close" role="presentation"></i> </div>
<nav aria-hidden="true" class="theme-nav-menu--dropdown theme-nav-menu__container">
<ul class="theme-nav-menu" id="menu-2-1f042073"><li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-238"><a class="theme-item theme-item-anchor" href="#" tabindex="-1">Homepages</a>
<ul class="sub-menu theme-nav-menu--dropdown">
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-135 current_page_item menu-item-224"><a aria-current="page" class="theme-sub-item theme-item-active" href="/demo-6" tabindex="-1">Home 01</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-230"><a class="theme-sub-item" href="home-02/index.html" tabindex="-1">Home 02</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-239"><a class="theme-item theme-item-anchor" href="#" tabindex="-1">Pages</a>
<ul class="sub-menu theme-nav-menu--dropdown">
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-227"><a class="theme-sub-item" href="/demo-6/about-us" tabindex="-1">About Us</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-236"><a class="theme-sub-item" href="/demo-6/services" tabindex="-1">Services</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-232"><a class="theme-sub-item" href="/demo-6/pricing-plan-01" tabindex="-1">Pricing Plan 01</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-233"><a class="theme-sub-item" href="/demo-6/pricing-plan-02" tabindex="-1">Pricing Plan 02</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-226"><a class="theme-sub-item" href="404-not-found/index.html" tabindex="-1">404</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-241"><a class="theme-item theme-item-anchor" href="#" tabindex="-1">Treatments</a>
<ul class="sub-menu theme-nav-menu--dropdown">
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-229"><a class="theme-sub-item" href="/demo-6/dental-appliances" tabindex="-1">Dental Appliances</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-234"><a class="theme-sub-item" href="/demo-6/prosthetics" tabindex="-1">Prosthetics</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-235"><a class="theme-sub-item" href="/demo-6/root-canal-treatment" tabindex="-1">Root Canal Treatment</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-237"><a class="theme-sub-item" href="/demo-6/tooth-whitening" tabindex="-1">Tooth Whitening</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-231"><a class="theme-sub-item" href="/demo-6/lenses" tabindex="-1">Lenses</a></li>
</ul>
</li>

<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-228"><a class="theme-item" href="/demo-6/contact-us" tabindex="-1">Contact Us</a></li>
</ul> </nav>
</div>
</div>
<div class="theme-element theme-element-3b86e027 theme-align-left theme-hidden-mobile theme-widget theme-widget-button" data-e-type="widget" data-element_type="widget" data-id="3b86e027" data-widget_type="button.default">
<div class="theme-widget-container">
<div class="theme-button-wrapper">
<a class="theme-button theme-button-link theme-size-sm theme-animation-float" href="#theme-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjExOCIsInRvZ2dsZSI6ZmFsc2V9">
<span class="theme-button-content-wrapper">
<span class="theme-button-text">schedule a visit</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</header>
<div class="theme theme-135" data-theme-id="135" data-theme-post-type="page" data-theme-type="wp-page">
<div class="theme-element theme-element-4fc630d8 e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="4fc630d8" data-settings='{"background_background":"gradient"}'>
<div class="e-con-inner">
<div class="theme-element theme-element-57dfe8ad e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="57dfe8ad">
<div class="theme-element theme-element-51041659 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="51041659">
<div class="theme-element theme-element-6bf4116c theme-widget theme-widget-heading" data-e-type="widget" data-element_type="widget" data-id="6bf4116c" data-widget_type="heading.default">
<div class="theme-widget-container">
<div class="theme-heading-title theme-size-default">Your perfect smile</div> </div>
</div>
<div class="theme-element theme-element-70a9cea1 theme-widget theme-widget-icon-box" data-e-type="widget" data-element_type="widget" data-id="70a9cea1" data-widget_type="icon-box.default">
<div class="theme-widget-container">
<div class="theme-icon-box-wrapper">
<div class="theme-icon-box-content">
<h1 class="theme-icon-box-title">
<span>
							We improve dental health &amp; enhance smiles						</span>
</h1>
<p class="theme-icon-box-description">
						You can trust in our expertise to provide exceptional dental care that is tailored to your unique needs and goals.					</p>
</div>
</div>
</div>
</div>
<div class="theme-element theme-element-4ee13205 theme-align-left theme-mobile-align-justify theme-widget theme-widget-button" data-e-type="widget" data-element_type="widget" data-id="4ee13205" data-widget_type="button.default">
<div class="theme-widget-container">
<div class="theme-button-wrapper">
<a class="theme-button theme-button-link theme-size-sm" href="#">
<span class="theme-button-content-wrapper">
<span class="theme-button-text">Learn more</span>
</span>
</a>
</div>
</div>
</div>
</div>
<div class="theme-element theme-element-34570f76 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="34570f76">
<div class="theme-element theme-element-28efe425 theme-widget__width-initial theme-absolute theme-align-right e-transform theme-hidden-mobile theme-widget theme-widget-lottie" data-e-type="widget" data-element_type="widget" data-id="28efe425" data-settings='{"source":"external_url","source_external_url":{"url":"https:\/\/lottie.host\/793582e7-8f89-4f96-805f-a91c1ee2468f\/an54Hv8ILa.json","is_external":"","nofollow":"","custom_attributes":""},"loop":"yes","play_speed":{"unit":"px","size":0.5,"sizes":[]},"_position":"absolute","_transform_translateX_effect":{"unit":"px","size":-40,"sizes":[]},"_transform_translateY_effect":{"unit":"px","size":-40,"sizes":[]},"_transform_translateX_effect_tablet":{"unit":"px","size":-15,"sizes":[]},"_animation":"zoomIn","_animation_delay":300,"link_to":"none","trigger":"arriving_to_viewport","viewport":{"unit":"%","size":"","sizes":{"start":0,"end":100}},"start_point":{"unit":"%","size":0,"sizes":[]},"end_point":{"unit":"%","size":100,"sizes":[]},"renderer":"svg","_transform_translateX_effect_widescreen":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_laptop":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_tablet_extra":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_mobile_extra":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_mobile":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_widescreen":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_laptop":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_tablet_extra":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_tablet":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_mobile_extra":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_mobile":{"unit":"px","size":"","sizes":[]}}' data-widget_type="lottie.default">
<div class="theme-widget-container">
<div class="e-lottie__container"><div class="e-lottie__animation"></div></div> </div>
</div>
<div class="theme-element theme-element-32351bce theme-widget__width-initial theme-absolute e-transform theme-widget theme-widget-spacer" data-e-type="widget" data-element_type="widget" data-id="32351bce" data-settings='{"_position":"absolute","_transform_translateX_effect":{"unit":"px","size":-130,"sizes":[]},"_transform_translateY_effect":{"unit":"px","size":100,"sizes":[]},"_animation":"fadeIn","_animation_delay":400,"_transform_translateX_effect_mobile":{"unit":"px","size":0,"sizes":[]},"_transform_translateY_effect_mobile":{"unit":"px","size":0,"sizes":[]},"_transform_translateX_effect_widescreen":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_laptop":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_tablet_extra":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_tablet":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_mobile_extra":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_widescreen":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_laptop":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_tablet_extra":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_tablet":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_mobile_extra":{"unit":"px","size":"","sizes":[]}}' data-widget_type="spacer.default">
<div class="theme-widget-container">
<div class="theme-spacer">
<div class="theme-spacer-inner"></div>
</div>
</div>
</div>
<div class="theme-element theme-element-a47f61b theme-widget__width-initial theme-absolute e-transform theme-widget theme-widget-spacer" data-e-type="widget" data-element_type="widget" data-id="a47f61b" data-settings='{"_position":"absolute","_transform_translateX_effect":{"unit":"px","size":0,"sizes":[]},"_transform_translateY_effect":{"unit":"px","size":170,"sizes":[]},"_transform_translateX_effect_mobile":{"unit":"px","size":-20,"sizes":[]},"_transform_translateY_effect_mobile":{"unit":"px","size":160,"sizes":[]},"_animation":"zoomIn","_animation_delay":300,"_transform_translateX_effect_widescreen":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_laptop":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_tablet_extra":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_tablet":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_mobile_extra":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_widescreen":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_laptop":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_tablet_extra":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_tablet":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_mobile_extra":{"unit":"px","size":"","sizes":[]}}' data-widget_type="spacer.default">
<div class="theme-widget-container">
<div class="theme-spacer">
<div class="theme-spacer-inner"></div>
</div>
</div>
</div>
<div class="theme-element theme-element-4a3a0c1e theme-widget__width-initial theme-absolute e-transform theme-widget theme-widget-spacer" data-e-type="widget" data-element_type="widget" data-id="4a3a0c1e" data-settings='{"_position":"absolute","_transform_translateX_effect":{"unit":"px","size":-15,"sizes":[]},"_transform_translateY_effect":{"unit":"px","size":80,"sizes":[]},"_transform_translateX_effect_mobile":{"unit":"px","size":-100,"sizes":[]},"_animation":"rotateInUpRight","_transform_translateX_effect_widescreen":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_laptop":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_tablet_extra":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_tablet":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_mobile_extra":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_widescreen":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_laptop":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_tablet_extra":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_tablet":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_mobile_extra":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_mobile":{"unit":"px","size":"","sizes":[]}}' data-widget_type="spacer.default">
<div class="theme-widget-container">
<div class="theme-spacer">
<div class="theme-spacer-inner"></div>
</div>
</div>
</div>
<div class="theme-element theme-element-4d0fb49c theme-widget__width-inherit theme-absolute e-transform theme-widget theme-widget-spacer" data-e-type="widget" data-element_type="widget" data-id="4d0fb49c" data-settings='{"_transform_translateX_effect_mobile":{"unit":"%","size":"","sizes":[]},"_animation":"zoomIn","_animation_delay":400,"_position":"absolute","_transform_translateX_effect":{"unit":"px","size":0,"sizes":[]},"_transform_translateY_effect":{"unit":"px","size":-60,"sizes":[]},"_transform_translateY_effect_mobile_extra":{"unit":"px","size":-40,"sizes":[]},"_transform_translateX_effect_widescreen":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_laptop":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_tablet_extra":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_tablet":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_mobile_extra":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_widescreen":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_laptop":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_tablet_extra":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_tablet":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_mobile":{"unit":"px","size":"","sizes":[]}}' data-widget_type="spacer.default">
<div class="theme-widget-container">
<div class="theme-spacer">
<div class="theme-spacer-inner"></div>
</div>
</div>
</div>
<div class="theme-element theme-element-5a7137bc e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="5a7137bc" data-settings='{"background_background":"classic"}'>
</div>
</div>
</div>
<div class="theme-element theme-element-16be4033 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="16be4033">
<div class="theme-element theme-element-55e10fa7 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="55e10fa7" data-settings='{"background_background":"classic"}'>
<div class="theme-element theme-element-39bb34f7 theme-widget theme-widget-heading" data-e-type="widget" data-element_type="widget" data-id="39bb34f7" data-widget_type="heading.default">
<div class="theme-widget-container">
<h2 class="theme-heading-title theme-size-default">Get to know some treatments</h2> </div>
</div>
</div>
<div class="theme-element theme-element-74cd9842 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="74cd9842" data-settings='{"background_background":"classic"}'>
<div class="theme-element theme-element-64d44d4b theme-widget__width-initial theme-widget theme-widget-spacer" data-e-type="widget" data-element_type="widget" data-id="64d44d4b" data-widget_type="spacer.default">
<div class="theme-widget-container">
<div class="theme-spacer">
<div class="theme-spacer-inner"></div>
</div>
</div>
</div>
<div class="theme-element theme-element-6a0bd846 theme-widget theme-widget-icon-box" data-e-type="widget" data-element_type="widget" data-id="6a0bd846" data-widget_type="icon-box.default">
<div class="theme-widget-container">
<div class="theme-icon-box-wrapper">
<div class="theme-icon-box-content">
<h3 class="theme-icon-box-title">
<span>
							Prosthetics						</span>
</h3>
<p class="theme-icon-box-description">
						Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.					</p>
</div>
</div>
</div>
</div>
</div>
<div class="theme-element theme-element-66cfd101 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="66cfd101" data-settings='{"background_background":"classic"}'>
<div class="theme-element theme-element-4f73923c theme-widget__width-initial theme-widget theme-widget-spacer" data-e-type="widget" data-element_type="widget" data-id="4f73923c" data-widget_type="spacer.default">
<div class="theme-widget-container">
<div class="theme-spacer">
<div class="theme-spacer-inner"></div>
</div>
</div>
</div>
<div class="theme-element theme-element-7df91950 theme-widget theme-widget-icon-box" data-e-type="widget" data-element_type="widget" data-id="7df91950" data-widget_type="icon-box.default">
<div class="theme-widget-container">
<div class="theme-icon-box-wrapper">
<div class="theme-icon-box-content">
<h3 class="theme-icon-box-title">
<span>
							Whitening						</span>
</h3>
<p class="theme-icon-box-description">
						Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.					</p>
</div>
</div>
</div>
</div>
</div>
<div class="theme-element theme-element-4e26eb91 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="4e26eb91" data-settings='{"background_background":"classic"}'>
<div class="theme-element theme-element-446e2200 theme-widget__width-initial theme-widget theme-widget-spacer" data-e-type="widget" data-element_type="widget" data-id="446e2200" data-widget_type="spacer.default">
<div class="theme-widget-container">
<div class="theme-spacer">
<div class="theme-spacer-inner"></div>
</div>
</div>
</div>
<div class="theme-element theme-element-73076ea8 theme-widget theme-widget-icon-box" data-e-type="widget" data-element_type="widget" data-id="73076ea8" data-widget_type="icon-box.default">
<div class="theme-widget-container">
<div class="theme-icon-box-wrapper">
<div class="theme-icon-box-content">
<h3 class="theme-icon-box-title">
<span>
							Periodontics						</span>
</h3>
<p class="theme-icon-box-description">
						Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.					</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="theme-element theme-element-62948e4e e-con-full e-flex e-con e-parent" data-e-type="container" data-element_type="container" data-id="62948e4e">
<div class="theme-element theme-element-549181f e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="549181f" data-settings='{"background_background":"classic","animation":"fadeInLeft"}'>
</div>
<div class="theme-element theme-element-5cd64b78 e-flex e-con-boxed e-con e-child" data-e-type="container" data-element_type="container" data-id="5cd64b78">
<div class="e-con-inner">
<div class="theme-element theme-element-4ff824bc theme-widget theme-widget-heading" data-e-type="widget" data-element_type="widget" data-id="4ff824bc" data-widget_type="heading.default">
<div class="theme-widget-container">
<div class="theme-heading-title theme-size-default">Why smile</div> </div>
</div>
<div class="theme-element theme-element-41f899c theme-widget theme-widget-icon-box" data-e-type="widget" data-element_type="widget" data-id="41f899c" data-widget_type="icon-box.default">
<div class="theme-widget-container">
<div class="theme-icon-box-wrapper">
<div class="theme-icon-box-content">
<h2 class="theme-icon-box-title">
<span>
							Keeping teeth healthy and achieving a beautiful smile						</span>
</h2>
<p class="theme-icon-box-description">
						At augue eget arcu dictum varius duis at. Lectus magna fringilla urna porttitor rhoncus dolor purus non. Faucibus purus in massa tempor. Sollicitudin tempor id eu nisl nunc. Tristique senectus et netus et malesuada fames ac turpis.					</p>
</div>
</div>
</div>
</div>
<div class="theme-element theme-element-23801f0 theme-widget theme-widget-tp-adv-text-block" data-e-type="widget" data-element_type="widget" data-id="23801f0" data-widget_type="tp-adv-text-block.default">
<div class="theme-widget-container">
<div class="pt-plus-text-block-wrapper" data-tp-gsap-textblock=""><div class="text_block_parallax"><div class="pt_plus_adv_text_block"><div class="text-content-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div></div></div></div> </div>
</div>
<div class="theme-element theme-element-35df373 theme-widget theme-widget-tp-progress-bar" data-e-type="widget" data-element_type="widget" data-id="35df373" data-widget_type="tp-progress-bar.default">
<div class="theme-widget-container">

<div class="progress_bar pt-plus-peicharts progress-skill-bar progress_bar6a40f74c3a243 progress_bar-progressbar" data-empty="#8072fc" data-uid="progress_bar6a40f74c3a243"><div class="progress_bar-media"><div class="prog-title prog-icon"><span class="progres-ims"><i class="fa fa-bank"></i></span><span class="progress_bar-title"> Quality in health care </span></div><h5 class="counter-number"><span class="theserivce-milestone-number icon-milestone" data-counterup-nums="85">85</span><span class="theserivce-milestone-symbol">%</span></h5></div><div class="progress_bar-skill skill-fill medium"><div class="progress_bar-skill-bar-filled" data-width="85%"> </div></div></div> </div>
</div>
<div class="theme-element theme-element-d2d74be theme-widget theme-widget-tp-progress-bar" data-e-type="widget" data-element_type="widget" data-id="d2d74be" data-widget_type="tp-progress-bar.default">
<div class="theme-widget-container">

<div class="progress_bar pt-plus-peicharts progress-skill-bar progress_bar6a40f74c3b53d progress_bar-progressbar" data-empty="#8072fc" data-uid="progress_bar6a40f74c3b53d"><div class="progress_bar-media"><div class="prog-title prog-icon"><span class="progres-ims"><i class="fa fa-bank"></i></span><span class="progress_bar-title"> Access guarantee </span></div><h5 class="counter-number"><span class="theserivce-milestone-number icon-milestone" data-counterup-nums="75">75</span><span class="theserivce-milestone-symbol">%</span></h5></div><div class="progress_bar-skill skill-fill medium"><div class="progress_bar-skill-bar-filled" data-width="75%"> </div></div></div> </div>
</div>
</div>
</div>
</div>
<div class="theme-element theme-element-26c4462a e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="26c4462a">
<div class="e-con-inner">
<div class="theme-element theme-element-6fce2792 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="6fce2792">
<div class="theme-element theme-element-87e5407 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="87e5407">
<div class="theme-element theme-element-1460bd8e e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="1460bd8e" data-settings='{"background_background":"classic","animation":"fadeInUp"}'>
<div class="theme-element theme-element-1d329565 theme-widget theme-widget-icon-box" data-e-type="widget" data-element_type="widget" data-id="1d329565" data-widget_type="icon-box.default">
<div class="theme-widget-container">
<div class="theme-icon-box-wrapper">
<div class="theme-icon-box-content">
<h2 class="theme-icon-box-title">
<span>
							Tooth whitening						</span>
</h2>
<p class="theme-icon-box-description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.					</p>
</div>
</div>
</div>
</div>
<div class="theme-element theme-element-399c9044 theme-align-justify theme-mobile-align-justify theme-tablet-align-left theme-widget theme-widget-button" data-e-type="widget" data-element_type="widget" data-id="399c9044" data-widget_type="button.default">
<div class="theme-widget-container">
<div class="theme-button-wrapper">
<a class="theme-button theme-button-link theme-size-sm theme-animation-float" href="#">
<span class="theme-button-content-wrapper">
<span class="theme-button-text">Learn more</span>
</span>
</a>
</div>
</div>
</div>
</div>
<div class="theme-element theme-element-51199de2 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="51199de2" data-settings='{"background_background":"classic"}' style="position: relative; overflow: hidden;">
<img src="/demo-6/assets/uploads/sites/19/2024/09/dentists-with-a-patient-during-a-dental-interventi-2021-08-27-22-49-32-utc-min.jpg" alt="Dentists with a patient during a dental intervention" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0;" />
</div>
<div class="theme-element theme-element-140dec0a e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="140dec0a" data-settings='{"background_background":"classic","animation":"fadeInUp","animation_delay":100}'>
<div class="theme-element theme-element-380803eb theme-widget theme-widget-icon-box" data-e-type="widget" data-element_type="widget" data-id="380803eb" data-widget_type="icon-box.default">
<div class="theme-widget-container">
<div class="theme-icon-box-wrapper">
<div class="theme-icon-box-content">
<h3 class="theme-icon-box-title">
<span>
							Contact lenses &amp; porcelain veneers						</span>
</h3>
<p class="theme-icon-box-description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.					</p>
</div>
</div>
</div>
</div>
</div>
<div class="theme-element theme-element-26a1764 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="26a1764" data-settings='{"background_background":"classic"}'>
</div>
</div>
</div>
</div>
</div>
<div class="theme-element theme-element-426035f9 e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="426035f9" data-settings='{"background_background":"gradient"}'>
<div class="e-con-inner">
<div class="theme-element theme-element-7f12e64b e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="7f12e64b">
<div class="theme-element theme-element-7a2addae e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="7a2addae">
<div class="theme-element theme-element-1e30b0e5 theme-widget__width-initial theme-widget theme-widget-spacer" data-e-type="widget" data-element_type="widget" data-id="1e30b0e5" data-settings='{"_animation":"fadeIn"}' data-widget_type="spacer.default">
<div class="theme-widget-container">
<div class="theme-spacer">
<div class="theme-spacer-inner"></div>
</div>
</div>
</div>
<div class="theme-element theme-element-4297d36e theme-widget theme-widget-heading" data-e-type="widget" data-element_type="widget" data-id="4297d36e" data-settings='{"_animation":"fadeInUp","_animation_delay":100}' data-widget_type="heading.default">
<div class="theme-widget-container">
<div class="theme-heading-title theme-size-default">Choose the plan</div> </div>
</div>
<div class="theme-element theme-element-c4c3082 theme-widget theme-widget-icon-box" data-e-type="widget" data-element_type="widget" data-id="c4c3082" data-settings='{"_animation":"fadeInUp","_animation_delay":200}' data-widget_type="icon-box.default">
<div class="theme-widget-container">
<div class="theme-icon-box-wrapper">
<div class="theme-icon-box-content">
<h2 class="theme-icon-box-title">
<span>
							Choose the right plan for you						</span>
</h2>
<p class="theme-icon-box-description">
						Explore the benefits of affordable expert access with our packages.					</p>
</div>
</div>
</div>
</div>
</div>
<div class="theme-element theme-element-7ba6f63b theme-widget__width-initial theme-absolute theme-align-right theme-widget-mobile__width-initial theme-widget theme-widget-lottie" data-e-type="widget" data-element_type="widget" data-id="7ba6f63b" data-settings='{"source":"external_url","source_external_url":{"url":"https:\/\/lottie.host\/793582e7-8f89-4f96-805f-a91c1ee2468f\/an54Hv8ILa.json","is_external":"","nofollow":"","custom_attributes":""},"loop":"yes","play_speed":{"unit":"px","size":0.5,"sizes":[]},"_position":"absolute","link_to":"none","trigger":"arriving_to_viewport","viewport":{"unit":"%","size":"","sizes":{"start":0,"end":100}},"start_point":{"unit":"%","size":0,"sizes":[]},"end_point":{"unit":"%","size":100,"sizes":[]},"renderer":"svg"}' data-widget_type="lottie.default">
<div class="theme-widget-container">
<div class="e-lottie__container"><div class="e-lottie__animation"></div></div> </div>
</div>
<div class="theme-element theme-element-a2e7918 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="a2e7918">
<div class="theme-element theme-element-4c80ac53 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="4c80ac53" data-settings='{"background_background":"classic","animation":"fadeInLeft","animation_delay":300}'>
<div class="theme-element theme-element-32602a3d theme-widget theme-widget-heading" data-e-type="widget" data-element_type="widget" data-id="32602a3d" data-widget_type="heading.default">
<div class="theme-widget-container">
<div class="theme-heading-title theme-size-default">\$</div> </div>
</div>
<div class="theme-element theme-element-3cd51606 theme-widget theme-widget-heading" data-e-type="widget" data-element_type="widget" data-id="3cd51606" data-widget_type="heading.default">
<div class="theme-widget-container">
<div class="theme-heading-title theme-size-default">99</div> </div>
</div>
<div class="theme-element theme-element-98d2a98 theme-widget__width-inherit theme-widget theme-widget-icon-box" data-e-type="widget" data-element_type="widget" data-id="98d2a98" data-widget_type="icon-box.default">
<div class="theme-widget-container">
<div class="theme-icon-box-wrapper">
<div class="theme-icon-box-content">
<h3 class="theme-icon-box-title">
<span>
							Monthly package						</span>
</h3>
<p class="theme-icon-box-description">
						Started package					</p>
</div>
</div>
</div>
</div>
<div class="theme-element theme-element-4ab09e59 theme-align-center theme-widget__width-inherit theme-icon-list--layout-traditional theme-list-item-link-full_width theme-widget theme-widget-icon-list" data-e-type="widget" data-element_type="widget" data-id="4ab09e59" data-widget_type="icon-list.default">
<div class="theme-widget-container">
<ul class="theme-icon-list-items">
<li class="theme-icon-list-item">
<span class="theme-icon-list-icon">
<i aria-hidden="true" class="fas fa-check"></i> </span>
<span class="theme-icon-list-text">consultations </span>
</li>
<li class="theme-icon-list-item">
<span class="theme-icon-list-icon">
<i aria-hidden="true" class="fas fa-check"></i> </span>
<span class="theme-icon-list-text">root canal treatment </span>
</li>
<li class="theme-icon-list-item">
<span class="theme-icon-list-icon">
<i aria-hidden="true" class="fas fa-check"></i> </span>
<span class="theme-icon-list-text">wisdom tooth extraction</span>
</li>
<li class="theme-icon-list-item">
<span class="theme-icon-list-icon">
<i aria-hidden="true" class="fas fa-times"></i> </span>
<span class="theme-icon-list-text">restoration  </span>
</li>
<li class="theme-icon-list-item">
<span class="theme-icon-list-icon">
<i aria-hidden="true" class="fas fa-times"></i> </span>
<span class="theme-icon-list-text">cleaning</span>
</li>
</ul>
</div>
</div>
<div class="theme-element theme-element-799e9628 theme-align-center theme-mobile-align-justify theme-widget theme-widget-paypal-button" data-e-type="widget" data-element_type="widget" data-id="799e9628" data-settings='{"merchant_account":"simple"}' data-widget_type="paypal-button.default">
<div class="theme-widget-container">
<div class="theme-button-wrapper">
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
<input name="cmd" type="hidden" value="_xclick-subscriptions"/>
<input name="business" type="hidden" value="email@nodomain.com"/>
<input name="lc" type="hidden" value="US"/>
<input name="item_name" type="hidden" value="\$99 Package"/>
<input name="item_number" type="hidden" value=""/>
<input name="currency_code" type="hidden" value="USD"/>
<input name="a3" type="hidden" value="0.00"/>
<input name="no_note" type="hidden" value="1"/>
<input name="src" type="hidden" value="1"/>
<input name="p3" type="hidden" value="1"/>
<input name="t3" type="hidden" value="M"/>
<input name="no-shipping" type="hidden" value="1"/>
<button class="theme-button theme-size-sm theme-paypal-legacy theme-payment-button" role="button" type="submit">
<span class="theme-button-content-wrapper">
<span class="theme-button-icon">
<i aria-hidden="true" class="fab fa-paypal"></i> </span>
<span class="theme-button-text">Get started</span>
</span>
</button>
</form>
</div>
</div>
</div>
</div>
<div class="theme-element theme-element-6d639874 e-con-full e-transform e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="6d639874" data-settings='{"background_background":"gradient","animation":"zoomIn","animation_delay":400,"_transform_scale_effect":{"unit":"px","size":1.1,"sizes":[]},"_transform_scale_effect_mobile_extra":{"unit":"px","size":1,"sizes":[]},"_transform_scale_effect_widescreen":{"unit":"px","size":"","sizes":[]},"_transform_scale_effect_laptop":{"unit":"px","size":"","sizes":[]},"_transform_scale_effect_tablet_extra":{"unit":"px","size":"","sizes":[]},"_transform_scale_effect_tablet":{"unit":"px","size":"","sizes":[]},"_transform_scale_effect_mobile":{"unit":"px","size":"","sizes":[]}}'>
<div class="theme-element theme-element-67c312dc theme-widget theme-widget-heading" data-e-type="widget" data-element_type="widget" data-id="67c312dc" data-widget_type="heading.default">
<div class="theme-widget-container">
<div class="theme-heading-title theme-size-default">\$</div> </div>
</div>
<div class="theme-element theme-element-746c1633 theme-widget theme-widget-heading" data-e-type="widget" data-element_type="widget" data-id="746c1633" data-widget_type="heading.default">
<div class="theme-widget-container">
<div class="theme-heading-title theme-size-default">129</div> </div>
</div>
<div class="theme-element theme-element-2744847d theme-widget__width-inherit theme-widget theme-widget-icon-box" data-e-type="widget" data-element_type="widget" data-id="2744847d" data-widget_type="icon-box.default">
<div class="theme-widget-container">
<div class="theme-icon-box-wrapper">
<div class="theme-icon-box-content">
<h3 class="theme-icon-box-title">
<span>
							Monthly package						</span>
</h3>
<p class="theme-icon-box-description">
						Medium package					</p>
</div>
</div>
</div>
</div>
<div class="theme-element theme-element-51e4b5db theme-align-center theme-widget__width-inherit theme-icon-list--layout-traditional theme-list-item-link-full_width theme-widget theme-widget-icon-list" data-e-type="widget" data-element_type="widget" data-id="51e4b5db" data-widget_type="icon-list.default">
<div class="theme-widget-container">
<ul class="theme-icon-list-items">
<li class="theme-icon-list-item">
<span class="theme-icon-list-icon">
<i aria-hidden="true" class="fas fa-check"></i> </span>
<span class="theme-icon-list-text">consultations </span>
</li>
<li class="theme-icon-list-item">
<span class="theme-icon-list-icon">
<i aria-hidden="true" class="fas fa-check"></i> </span>
<span class="theme-icon-list-text">root canal treatment</span>
</li>
<li class="theme-icon-list-item">
<span class="theme-icon-list-icon">
<i aria-hidden="true" class="fas fa-check"></i> </span>
<span class="theme-icon-list-text">wisdom tooth extraction</span>
</li>
<li class="theme-icon-list-item">
<span class="theme-icon-list-icon">
<i aria-hidden="true" class="fas fa-times"></i> </span>
<span class="theme-icon-list-text">restoration  </span>
</li>
<li class="theme-icon-list-item">
<span class="theme-icon-list-icon">
<i aria-hidden="true" class="fas fa-times"></i> </span>
<span class="theme-icon-list-text">cleaning</span>
</li>
</ul>
</div>
</div>
<div class="theme-element theme-element-5b32bf8b theme-align-center theme-mobile-align-justify theme-widget theme-widget-paypal-button" data-e-type="widget" data-element_type="widget" data-id="5b32bf8b" data-settings='{"merchant_account":"simple"}' data-widget_type="paypal-button.default">
<div class="theme-widget-container">
<div class="theme-button-wrapper">
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
<input name="cmd" type="hidden" value="_xclick-subscriptions"/>
<input name="business" type="hidden" value="email@nodomain.com"/>
<input name="lc" type="hidden" value="US"/>
<input name="item_name" type="hidden" value="\$99 Package"/>
<input name="item_number" type="hidden" value=""/>
<input name="currency_code" type="hidden" value="USD"/>
<input name="a3" type="hidden" value="0.00"/>
<input name="no_note" type="hidden" value="1"/>
<input name="src" type="hidden" value="1"/>
<input name="p3" type="hidden" value="1"/>
<input name="t3" type="hidden" value="M"/>
<input name="no-shipping" type="hidden" value="1"/>
<button class="theme-button theme-size-sm theme-paypal-legacy theme-payment-button" role="button" type="submit">
<span class="theme-button-content-wrapper">
<span class="theme-button-icon">
<i aria-hidden="true" class="fab fa-paypal"></i> </span>
<span class="theme-button-text">Get started</span>
</span>
</button>
</form>
</div>
</div>
</div>
</div>
<div class="theme-element theme-element-170a6f25 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="170a6f25" data-settings='{"background_background":"classic","animation":"fadeInRight","animation_delay":500}'>
<div class="theme-element theme-element-390bc18e theme-widget theme-widget-heading" data-e-type="widget" data-element_type="widget" data-id="390bc18e" data-widget_type="heading.default">
<div class="theme-widget-container">
<div class="theme-heading-title theme-size-default">\$</div> </div>
</div>
<div class="theme-element theme-element-4c79a583 theme-widget theme-widget-heading" data-e-type="widget" data-element_type="widget" data-id="4c79a583" data-widget_type="heading.default">
<div class="theme-widget-container">
<div class="theme-heading-title theme-size-default">189</div> </div>
</div>
<div class="theme-element theme-element-7d76be88 theme-widget__width-inherit theme-widget theme-widget-icon-box" data-e-type="widget" data-element_type="widget" data-id="7d76be88" data-widget_type="icon-box.default">
<div class="theme-widget-container">
<div class="theme-icon-box-wrapper">
<div class="theme-icon-box-content">
<h3 class="theme-icon-box-title">
<span>
							Monthly package						</span>
</h3>
<p class="theme-icon-box-description">
						Vip package					</p>
</div>
</div>
</div>
</div>
<div class="theme-element theme-element-3e046622 theme-align-center theme-mobile-align-center theme-widget__width-inherit theme-icon-list--layout-traditional theme-list-item-link-full_width theme-widget theme-widget-icon-list" data-e-type="widget" data-element_type="widget" data-id="3e046622" data-widget_type="icon-list.default">
<div class="theme-widget-container">
<ul class="theme-icon-list-items">
<li class="theme-icon-list-item">
<span class="theme-icon-list-icon">
<i aria-hidden="true" class="fas fa-check"></i> </span>
<span class="theme-icon-list-text">consultations </span>
</li>
<li class="theme-icon-list-item">
<span class="theme-icon-list-icon">
<i aria-hidden="true" class="fas fa-check"></i> </span>
<span class="theme-icon-list-text">root canal treatment </span>
</li>
<li class="theme-icon-list-item">
<span class="theme-icon-list-icon">
<i aria-hidden="true" class="fas fa-check"></i> </span>
<span class="theme-icon-list-text">wisdom tooth extraction</span>
</li>
<li class="theme-icon-list-item">
<span class="theme-icon-list-icon">
<i aria-hidden="true" class="fas fa-times"></i> </span>
<span class="theme-icon-list-text">restoration</span>
</li>
<li class="theme-icon-list-item">
<span class="theme-icon-list-icon">
<i aria-hidden="true" class="fas fa-times"></i> </span>
<span class="theme-icon-list-text">cleaning</span>
</li>
</ul>
</div>
</div>
<div class="theme-element theme-element-3fd1a3a0 theme-align-center theme-widget theme-widget-paypal-button" data-e-type="widget" data-element_type="widget" data-id="3fd1a3a0" data-settings='{"merchant_account":"simple"}' data-widget_type="paypal-button.default">
<div class="theme-widget-container">
<div class="theme-button-wrapper">
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
<input name="cmd" type="hidden" value="_xclick-subscriptions"/>
<input name="business" type="hidden" value="email@nodomain.com"/>
<input name="lc" type="hidden" value="US"/>
<input name="item_name" type="hidden" value="\$99 Package"/>
<input name="item_number" type="hidden" value=""/>
<input name="currency_code" type="hidden" value="USD"/>
<input name="a3" type="hidden" value="0.00"/>
<input name="no_note" type="hidden" value="1"/>
<input name="src" type="hidden" value="1"/>
<input name="p3" type="hidden" value="1"/>
<input name="t3" type="hidden" value="M"/>
<input name="no-shipping" type="hidden" value="1"/>
<button class="theme-button theme-size-sm theme-paypal-legacy theme-payment-button" role="button" type="submit">
<span class="theme-button-content-wrapper">
<span class="theme-button-icon">
<i aria-hidden="true" class="fab fa-paypal"></i> </span>
<span class="theme-button-text">Get started</span>
</span>
</button>
</form>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="theme-element theme-element-6e2c47d0 e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="6e2c47d0">
<div class="e-con-inner">
<div class="theme-element theme-element-71c7721f e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="71c7721f">
<div class="theme-element theme-element-1165da0f e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="1165da0f">
<div class="theme-element theme-element-51f36fbd e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="51f36fbd" data-settings='{"background_background":"classic"}'>
<div class="theme-element theme-element-6fa2cda2 theme-widget theme-widget-heading" data-e-type="widget" data-element_type="widget" data-id="6fa2cda2" data-widget_type="heading.default">
<div class="theme-widget-container">
<div class="theme-heading-title theme-size-default">Orofacial harmonization</div> </div>
</div>
<div class="theme-element theme-element-294f3c0e theme-widget theme-widget-heading" data-e-type="widget" data-element_type="widget" data-id="294f3c0e" data-widget_type="heading.default">
<div class="theme-widget-container">
<h2 class="theme-heading-title theme-size-default">Botulinum toxin &amp; hyaluronic acid filler</h2> </div>
</div>
<div class="theme-element theme-element-3f7f3665 theme-widget theme-widget-icon-box" data-e-type="widget" data-element_type="widget" data-id="3f7f3665" data-widget_type="icon-box.default">
<div class="theme-widget-container">
<div class="theme-icon-box-wrapper">
<div class="theme-icon-box-content">
<h3 class="theme-icon-box-title">
<span>
							Tooth whitening						</span>
</h3>
<p class="theme-icon-box-description">
						 Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.					</p>
</div>
</div>
</div>
</div>
</div>
<div class="theme-element theme-element-255ae6ba e-con-full theme-hidden-tablet theme-hidden-mobile_extra theme-hidden-mobile e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="255ae6ba" data-settings='{"background_background":"gradient"}'>
</div>
<div class="theme-element theme-element-7d8c83a0 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="7d8c83a0" data-settings='{"background_background":"classic"}'>
<div class="theme-element theme-element-84f3899 theme-widget theme-widget-tp-adv-text-block" data-e-type="widget" data-element_type="widget" data-id="84f3899" data-widget_type="tp-adv-text-block.default">
<div class="theme-widget-container">
<div class="pt-plus-text-block-wrapper" data-tp-gsap-textblock=""><div class="text_block_parallax"><div class="pt_plus_adv_text_block"><div class="text-content-block">Botulinum toxin application, filling with hyaluronic acid, enzymatic jowl liposuction, among others.</div></div></div></div> </div>
</div>
<div class="theme-element theme-element-64146d25 e-transform e-transform theme-blockquote--skin-border theme-widget theme-widget-blockquote" data-e-type="widget" data-element_type="widget" data-id="64146d25" data-settings='{"_transform_translateX_effect":{"unit":"px","size":-30,"sizes":[]},"_transform_translateX_effect_hover":{"unit":"px","size":0,"sizes":[]},"_transform_translateX_effect_widescreen":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_laptop":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_tablet_extra":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_tablet":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_mobile_extra":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_mobile":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_widescreen":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_laptop":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_tablet_extra":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_tablet":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_mobile_extra":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_mobile":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_hover_widescreen":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_hover_laptop":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_hover_tablet_extra":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_hover_tablet":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_hover_mobile_extra":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_hover_mobile":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_hover":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_hover_widescreen":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_hover_laptop":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_hover_tablet_extra":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_hover_tablet":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_hover_mobile_extra":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_hover_mobile":{"unit":"px","size":"","sizes":[]}}' data-widget_type="blockquote.default">
<div class="theme-widget-container">
<blockquote class="theme-blockquote">
<p class="theme-blockquote__content">
				Nam at lectus urna duis convallis convallis. Blandit volutpat maecenas volutpat			</p>
</blockquote>
</div>
</div>
<div class="theme-element theme-element-223dd981 e-transform theme-blockquote--skin-border theme-widget theme-widget-blockquote" data-e-type="widget" data-element_type="widget" data-id="223dd981" data-settings='{"_transform_translateX_effect_hover":{"unit":"px","size":0,"sizes":[]},"_transform_translateX_effect_hover_widescreen":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_hover_laptop":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_hover_tablet_extra":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_hover_tablet":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_hover_mobile_extra":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_hover_mobile":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_hover":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_hover_widescreen":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_hover_laptop":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_hover_tablet_extra":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_hover_tablet":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_hover_mobile_extra":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_hover_mobile":{"unit":"px","size":"","sizes":[]}}' data-widget_type="blockquote.default">
<div class="theme-widget-container">
<blockquote class="theme-blockquote">
<p class="theme-blockquote__content">
				Amet nisl suscipit adipiscing bibendum est ultricies integer quis. A condimentum vitae sapien			</p>
</blockquote>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="theme-element theme-element-25f55650 e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="25f55650" data-settings='{"background_background":"classic"}'>
<div class="e-con-inner">
<div class="theme-element theme-element-103fa2ad e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="103fa2ad">
<div class="theme-element theme-element-70cf6cef theme-widget theme-widget-heading" data-e-type="widget" data-element_type="widget" data-id="70cf6cef" data-widget_type="heading.default">
<div class="theme-widget-container">
<div class="theme-heading-title theme-size-default"> nearly invisible</div> </div>
</div>
<div class="theme-element theme-element-6778043 theme-widget theme-widget-icon-box" data-e-type="widget" data-element_type="widget" data-id="6778043" data-widget_type="icon-box.default">
<div class="theme-widget-container">
<div class="theme-icon-box-wrapper">
<div class="theme-icon-box-content">
<h2 class="theme-icon-box-title">
<span>
							Orthodontics with innovative transparent aligners						</span>
</h2>
<p class="theme-icon-box-description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.<br/><br/>

Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Tempus urna et pharetra pharetra massa massa ultricies mi. Scelerisque eu ultrices vitae auctor eu augue.					</p>
</div>
</div>
</div>
</div>
<div class="theme-element theme-element-5de29f8c theme-align-left theme-widget theme-widget-button" data-e-type="widget" data-element_type="widget" data-id="5de29f8c" data-widget_type="button.default">
<div class="theme-widget-container">
<div class="theme-button-wrapper">
<a class="theme-button theme-button-link theme-size-md" href="#">
<span class="theme-button-content-wrapper">
<span class="theme-button-text">Learn more</span>
</span>
</a>
</div>
</div>
</div>
</div>
<div class="theme-element theme-element-2101d88f e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="2101d88f" data-settings='{"background_background":"classic"}'>
<div class="theme-element theme-element-7d52fd9d e-con-full e-transform e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="7d52fd9d" data-settings='{"background_background":"gradient","animation":"fadeIn","_transform_translateX_effect":{"unit":"px","size":-60,"sizes":[]},"_transform_translateY_effect":{"unit":"px","size":-40,"sizes":[]},"_transform_translateX_effect_widescreen":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_laptop":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_tablet_extra":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_tablet":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_mobile_extra":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_mobile":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_widescreen":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_laptop":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_tablet_extra":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_tablet":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_mobile_extra":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_mobile":{"unit":"px","size":"","sizes":[]}}'>
<div class="theme-element theme-element-72cb329a theme-widget theme-widget-heading" data-e-type="widget" data-element_type="widget" data-id="72cb329a" data-widget_type="heading.default">
<div class="theme-widget-container">
<h3 class="theme-heading-title theme-size-default">Opening hours</h3> </div>
</div>
<div class="theme-element theme-element-282f1402 theme-widget theme-widget-price-list" data-e-type="widget" data-element_type="widget" data-id="282f1402" data-widget_type="price-list.default">
<div class="theme-widget-container">
<ul class="theme-price-list">
<li><a class="theme-price-list-item" href="#">
<div class="theme-price-list-text">
<div class="theme-price-list-header">
<div class="theme-price-list-title">
							Mon						</div>
<span class="theme-price-list-separator"></span>
<span class="theme-price-list-price">09:00 - 17:00</span>
</div>
</div>
</a></li> <li><a class="theme-price-list-item" href="#">
<div class="theme-price-list-text">
<div class="theme-price-list-header">
<div class="theme-price-list-title">
							Tue						</div>
<span class="theme-price-list-separator"></span>
<span class="theme-price-list-price">09:00 - 17:00</span>
</div>
</div>
</a></li> <li><a class="theme-price-list-item" href="#">
<div class="theme-price-list-text">
<div class="theme-price-list-header">
<div class="theme-price-list-title">
							Wed						</div>
<span class="theme-price-list-separator"></span>
<span class="theme-price-list-price">09:00 - 17:00</span>
</div>
</div>
</a></li> <li><a class="theme-price-list-item" href="#">
<div class="theme-price-list-text">
<div class="theme-price-list-header">
<div class="theme-price-list-title">
							Thu						</div>
<span class="theme-price-list-separator"></span>
<span class="theme-price-list-price">09:00 - 17:00</span>
</div>
</div>
</a></li> <li><a class="theme-price-list-item" href="#">
<div class="theme-price-list-text">
<div class="theme-price-list-header">
<div class="theme-price-list-title">
							Fri						</div>
<span class="theme-price-list-separator"></span>
<span class="theme-price-list-price">09:00 - 17:00</span>
</div>
</div>
</a></li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="theme-element theme-element-3b44616a e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="3b44616a">
<div class="e-con-inner">
<div class="theme-element theme-element-351f4234 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="351f4234" data-settings='{"background_background":"classic","animation":"fadeInLeft"}'>
</div>
<div class="theme-element theme-element-3e09216 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="3e09216">
<div class="theme-element theme-element-5a0720a4 theme-widget__width-initial theme-absolute theme-align-right e-transform theme-widget theme-widget-lottie" data-e-type="widget" data-element_type="widget" data-id="5a0720a4" data-settings='{"source":"external_url","source_external_url":{"url":"https:\/\/lottie.host\/793582e7-8f89-4f96-805f-a91c1ee2468f\/an54Hv8ILa.json","is_external":"","nofollow":"","custom_attributes":""},"loop":"yes","play_speed":{"unit":"px","size":0.5,"sizes":[]},"_position":"absolute","_transform_translateX_effect":{"unit":"px","size":10,"sizes":[]},"_transform_translateY_effect":{"unit":"px","size":-70,"sizes":[]},"link_to":"none","trigger":"arriving_to_viewport","viewport":{"unit":"%","size":"","sizes":{"start":0,"end":100}},"start_point":{"unit":"%","size":0,"sizes":[]},"end_point":{"unit":"%","size":100,"sizes":[]},"renderer":"svg","_transform_translateX_effect_widescreen":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_laptop":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_tablet_extra":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_tablet":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_mobile_extra":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_mobile":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_widescreen":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_laptop":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_tablet_extra":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_tablet":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_mobile_extra":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_mobile":{"unit":"px","size":"","sizes":[]}}' data-widget_type="lottie.default">
<div class="theme-widget-container">
<div class="e-lottie__container"><div class="e-lottie__animation"></div></div> </div>
</div>
<div class="theme-element theme-element-3f8a9560 theme-widget__width-initial theme-widget theme-widget-spacer" data-e-type="widget" data-element_type="widget" data-id="3f8a9560" data-widget_type="spacer.default">
<div class="theme-widget-container">
<div class="theme-spacer">
<div class="theme-spacer-inner"></div>
</div>
</div>
</div>
<div class="theme-element theme-element-6719afa8 theme-widget theme-widget-heading" data-e-type="widget" data-element_type="widget" data-id="6719afa8" data-widget_type="heading.default">
<div class="theme-widget-container">
<div class="theme-heading-title theme-size-default">Painless laser whitening</div> </div>
</div>
<div class="theme-element theme-element-7dfc604c theme-widget theme-widget-icon-box" data-e-type="widget" data-element_type="widget" data-id="7dfc604c" data-widget_type="icon-box.default">
<div class="theme-widget-container">
<div class="theme-icon-box-wrapper">
<div class="theme-icon-box-content">
<h2 class="theme-icon-box-title">
<span>
							The best technique immediate &amp; efficient result						</span>
</h2>
<p class="theme-icon-box-description">
						Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Tempus urna et pharetra pharetra massa massa ultricies mi. Scelerisque eu ultrices vitae auctor eu augue.

					</p>
</div>
</div>
</div>
</div>
<div class="theme-element theme-element-3f3cee87 theme-align-left theme-widget theme-widget-button" data-e-type="widget" data-element_type="widget" data-id="3f3cee87" data-widget_type="button.default">
<div class="theme-widget-container">
<div class="theme-button-wrapper">
<a class="theme-button theme-button-link theme-size-sm" href="#">
<span class="theme-button-content-wrapper">
<span class="theme-button-text">Contact us</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<footer class="theme theme-17 theme-location-footer" data-theme-id="17" data-theme-post-type="theme_library" data-theme-type="footer">
<div class="theme-element theme-element-6c855d17 e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="6c855d17" data-settings='{"background_background":"gradient"}'>
<div class="e-con-inner">
<div class="theme-element theme-element-613807bf e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="613807bf">
<div class="theme-element theme-element-e4a9aa1 theme-widget theme-widget-heading" data-e-type="widget" data-element_type="widget" data-id="e4a9aa1" data-widget_type="heading.default">
<div class="theme-widget-container">
<div class="theme-heading-title theme-size-default">Have a perfect smile!</div> </div>
</div>
<div class="theme-element theme-element-56051a81 theme-widget theme-widget-heading" data-e-type="widget" data-element_type="widget" data-id="56051a81" data-widget_type="heading.default">
<div class="theme-widget-container">
<h2 class="theme-heading-title theme-size-default">Find the ideal treatment for your smile!</h2> </div>
</div>
<div class="theme-element theme-element-1116d906 theme-align-center theme-mobile-align-justify theme-widget theme-widget-button" data-e-type="widget" data-element_type="widget" data-id="1116d906" data-widget_type="button.default">
<div class="theme-widget-container">
<div class="theme-button-wrapper">
<a class="theme-button theme-button-link theme-size-lg" href="#">
<span class="theme-button-content-wrapper">
<span class="theme-button-text">Contact us</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="theme-element theme-element-e0ac9d9 e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="e0ac9d9">
<div class="e-con-inner">
<div class="theme-element theme-element-7a148b57 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="7a148b57">
<div class="theme-element theme-element-3c423f3c e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="3c423f3c">
<div class="theme-element theme-element-7a1337fa e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="7a1337fa">
<div class="theme-element theme-element-7346e50b theme-widget theme-widget-spacer" data-e-type="widget" data-element_type="widget" data-id="7346e50b" data-widget_type="spacer.default">
<div class="theme-widget-container">
<div class="theme-spacer">
<div class="theme-spacer-inner"></div>
</div>
</div>
</div>
<div class="theme-element theme-element-90ea1b4 theme-widget theme-widget-heading" data-e-type="widget" data-element_type="widget" data-id="90ea1b4" data-widget_type="heading.default">
<div class="theme-widget-container">
<div class="theme-heading-title theme-size-default">Dental</div> </div>
</div>
</div>
<div class="theme-element theme-element-392c4bdf theme-widget theme-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="392c4bdf" data-widget_type="text-editor.default">
<div class="theme-widget-container">
									With a rich experience of more than 25 years in performing dental procedures with proficiency and skill.								</div>
</div>
<div class="theme-element theme-element-4a9d17d1 theme-shape-circle e-grid-align-left e-grid-align-tablet-left e-grid-align-mobile-left theme-grid-0 theme-widget theme-widget-social-icons" data-e-type="widget" data-element_type="widget" data-id="4a9d17d1" data-widget_type="social-icons.default">
<div class="theme-widget-container">
<div class="theme-social-icons-wrapper theme-grid" role="list">
<span class="theme-grid-item" role="listitem">
<a class="theme-icon theme-social-icon theme-social-icon-facebook theme-repeater-item-ce21007" target="_blank">
<span class="theme-screen-only">Facebook</span>
<i aria-hidden="true" class="fab fa-facebook"></i> </a>
</span>
<span class="theme-grid-item" role="listitem">
<a class="theme-icon theme-social-icon theme-social-icon-twitter theme-repeater-item-c5615a9" target="_blank">
<span class="theme-screen-only">Twitter</span>
<i aria-hidden="true" class="fab fa-twitter"></i> </a>
</span>
<span class="theme-grid-item" role="listitem">
<a class="theme-icon theme-social-icon theme-social-icon-youtube theme-repeater-item-927a3d3" target="_blank">
<span class="theme-screen-only">Youtube</span>
<i aria-hidden="true" class="fab fa-youtube"></i> </a>
</span>
<span class="theme-grid-item" role="listitem">
<a class="theme-icon theme-social-icon theme-social-icon-wordpress theme-repeater-item-e4a8fbb" target="_blank">
<span class="theme-screen-only">Wordpress</span>
<i aria-hidden="true" class="fab fa-wordpress"></i> </a>
</span>
<span class="theme-grid-item" role="listitem">
<a class="theme-icon theme-social-icon theme-social-icon-instagram theme-repeater-item-4012113" target="_blank">
<span class="theme-screen-only">Instagram</span>
<i aria-hidden="true" class="fab fa-instagram"></i> </a>
</span>
</div>
</div>
</div>
</div>
<div class="theme-element theme-element-7c0abbbe e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="7c0abbbe">
<div class="theme-element theme-element-40e43a7f theme-widget theme-widget-heading" data-e-type="widget" data-element_type="widget" data-id="40e43a7f" data-widget_type="heading.default">
<div class="theme-widget-container">
<div class="theme-heading-title theme-size-default">Explore</div> </div>
</div>
<div class="theme-element theme-element-3b67fa27 theme-tablet-align-start theme-mobile-align-start theme-icon-list--layout-traditional theme-list-item-link-full_width theme-widget theme-widget-icon-list" data-e-type="widget" data-element_type="widget" data-id="3b67fa27" data-widget_type="icon-list.default">
<div class="theme-widget-container">
<ul class="theme-icon-list-items">
<li class="theme-icon-list-item">
<a href="#">
<span class="theme-icon-list-text">Home</span>
</a>
</li>
<li class="theme-icon-list-item">
<a href="#">
<span class="theme-icon-list-text">About Us</span>
</a>
</li>
<li class="theme-icon-list-item">
<a href="#">
<span class="theme-icon-list-text">Contact Us</span>
</a>
</li>
<li class="theme-icon-list-item">
<a href="#">
<span class="theme-icon-list-text">Schedule A Visit</span>
</a>
</li>
</ul>
</div>
</div>
</div>
<div class="theme-element theme-element-46716644 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="46716644">
<div class="theme-element theme-element-512a43cb theme-widget theme-widget-heading" data-e-type="widget" data-element_type="widget" data-id="512a43cb" data-widget_type="heading.default">
<div class="theme-widget-container">
<div class="theme-heading-title theme-size-default">Contact</div> </div>
</div>
<div class="theme-element theme-element-528a19e7 theme-tablet-align-start theme-mobile-align-start theme-list-item-link-inline theme-icon-list--layout-traditional theme-widget theme-widget-icon-list" data-e-type="widget" data-element_type="widget" data-id="528a19e7" data-widget_type="icon-list.default">
<div class="theme-widget-container">
<ul class="theme-icon-list-items">
<li class="theme-icon-list-item">
<span class="theme-icon-list-icon">
<i aria-hidden="true" class="far fa-building"></i> </span>
<span class="theme-icon-list-text">4924 Buck Drive South Burlington, VT 05403</span>
</li>
<li class="theme-icon-list-item">
<span class="theme-icon-list-icon">
<i aria-hidden="true" class="fas fa-phone-alt"></i> </span>
<span class="theme-icon-list-text">Phone: +(123) 4567 8900</span>
</li>
<li class="theme-icon-list-item">
<span class="theme-icon-list-icon">
<i aria-hidden="true" class="far fa-envelope-open"></i> </span>
<span class="theme-icon-list-text">email@domain.com</span>
</li>
</ul>
</div>
</div>
</div>
<div class="theme-element theme-element-1f2acf90 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="1f2acf90" data-settings='{"background_background":"classic"}'>
<div class="theme-element theme-element-6bd4365c theme-widget theme-widget-heading" data-e-type="widget" data-element_type="widget" data-id="6bd4365c" data-widget_type="heading.default">
<div class="theme-widget-container">
<div class="theme-heading-title theme-size-default">Sign up for newsletter</div> </div>
</div>
<div class="theme-element theme-element-4914af theme-tablet-button-align-stretch theme-mobile-button-align-stretch theme-button-align-stretch theme-widget theme-widget-form" data-e-type="widget" data-element_type="widget" data-id="4914af" data-settings='{"step_next_label":"Next","step_previous_label":"Previous","button_width":"100","step_type":"number_text","step_icon_shape":"circle"}' data-widget_type="form.default">
<div class="theme-widget-container">
<form aria-label="Dental Sign Up Form" class="theme-form" method="post" name="Dental Sign Up Form">
<input name="post_id" type="hidden" value="17"/>
<input name="form_id" type="hidden" value="4914af"/>
<input name="referer_title" type="hidden" value="Services"/>
<input name="queried_id" type="hidden" value="145"/>
<div class="theme-form-fields-wrapper theme-labels-">
<div class="theme-field-type-email theme-field-group theme-column theme-field-group-email_newsletter theme-col-100">
<label class="theme-field-label theme-screen-only" for="form-field-email_newsletter">
								Email							</label>
<input class="theme-field theme-size-lg theme-field-textual" id="form-field-email_newsletter" name="form_fields[email_newsletter]" placeholder="Email" size="1" type="email"/>
</div>
<div class="theme-field-group theme-column theme-field-type-submit theme-col-100 e-form__buttons">
<button class="theme-button theme-size-md" type="submit">
<span class="theme-button-content-wrapper">
<span class="theme-button-text">Subscribe</span>
</span>
</button>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="theme-element theme-element-2a9efd75 e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="2a9efd75" data-settings='{"background_background":"classic"}'>
<div class="e-con-inner">
<div class="theme-element theme-element-4b64202d e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="4b64202d">
<div class="theme-element theme-element-59a3fbde theme-widget theme-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="59a3fbde" data-widget_type="text-editor.default">
<div class="theme-widget-container">
									©2026  – Dental Template Kit by TemplateUP								</div>
</div>
</div>
</div>
</div>
</footer>






















` }} />
      <Demo6Scripts />
      <Chatbot themeColor="#00bcd4" />
    </div>
  );
}
