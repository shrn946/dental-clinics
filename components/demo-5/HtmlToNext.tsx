'use client';
import parse, { attributesToProps, domToReact } from 'html-react-parser';
import Link from 'next/link';

interface HtmlToNextProps {
  html: string;
  components?: Record<string, React.ComponentType<any>>;
}

export default function HtmlToNext({ html, components = {} }: HtmlToNextProps) {
  return (
    <>
      {parse(html, {
        replace: (domNode: any) => {
          if (domNode.type === 'tag') {
            
            if (domNode.attribs && domNode.attribs['data-react-component']) {
              const componentName = domNode.attribs['data-react-component'];
              const Component = components[componentName];
              if (Component) return <Component />;
            }
            
            // Fix global typos and inline styles from the HTML template
            if (domNode.attribs) {
              if (domNode.attribs.style) {
                // Fix relative background images in inline styles
                domNode.attribs.style = domNode.attribs.style.replace(/url\(['"]?(img|images)\//g, 'url(/demo-5/$1/');
                
                // Dynamically apply a CSS gradient overlay to the breadcrumb banner image
                if (domNode.attribs.style.includes('bdrc-bg')) {
                  domNode.attribs.style = domNode.attribs.style.replace(
                    /url\(\/demo-5\/img\/bg\/bdrc-bg\.(png|jpg)\)/g, 
                    'linear-gradient(rgba(16, 76, 186, 0.8), rgba(16, 76, 186, 0.8)), url(/demo-5/img/bg/bdrc-bg.$1)'
                  );
                }
              }
              for (const key of Object.keys(domNode.attribs)) {
                if (key.startsWith('aria-bs-')) {
                  const newKey = key.replace('aria-bs-', 'aria-');
                  domNode.attribs[newKey] = domNode.attribs[key];
                  delete domNode.attribs[key];
                }
              }
            }

            if (domNode.name === 'a') {
              const props = attributesToProps(domNode.attribs);
              let href = typeof props.href === 'string' ? props.href : '#';
              
              if (!href.startsWith('http') && !href.startsWith('#')) {
                if (href === 'index.html') {
                    href = '/demo-5';
                } else if (href === 'index-2.html') {
                    href = '/demo-5/home-2';
                } else if (href === 'index-3.html') {
                    href = '/demo-5/home-3';
                } else if (href === 'index-4.html') {
                    href = '/demo-5/home-4';
                } else if (href.endsWith('.html')) {
                    href = '/demo-5/' + href.substring(0, href.length - 5);
                }
              }
              
              const { href: _, ...rest } = props;
              
              return (
                <Link href={href} {...rest} legacyBehavior={false}>
                  {domToReact(domNode.children)}
                </Link>
              );
            }
            
            if (domNode.name === 'img') {
              const props = attributesToProps(domNode.attribs);
              let src = typeof props.src === 'string' ? props.src : '';
              if (src && !src.startsWith('http') && !src.startsWith('data:') && !src.startsWith('/demo-5/')) {
                // Strip leading / or ./ to ensure clean path concatenation
                src = '/demo-5/' + src.replace(/^\.?\//, '');
              }
              
              const { src: _, ...rest } = props;
              return (
                <img {...rest} src={src} />
              );
            }
            
            if (domNode.name === 'option') {
              const props = attributesToProps(domNode.attribs);
              if (props.selected !== undefined) {
                  delete props.selected;
              }
              return (
                  <option {...props}>{domToReact(domNode.children)}</option>
              );
            }
          }
        }
      })}
    </>
  );
}
