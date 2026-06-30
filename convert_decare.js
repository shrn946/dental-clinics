const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const SOURCE_DIR = 'C:/primecare/decare';
const APP_DIR = 'C:/primecare/app/demo-5';
const COMP_DIR = 'C:/primecare/components/demo-5';

if (!fs.existsSync(APP_DIR)) fs.mkdirSync(APP_DIR, { recursive: true });
if (!fs.existsSync(COMP_DIR)) fs.mkdirSync(COMP_DIR, { recursive: true });

// Create HtmlToNext component
const htmlToNextCode = `'use client';
import parse, { attributesToProps, domToReact } from 'html-react-parser';
import Link from 'next/link';
import Image from 'next/image';

export default function HtmlToNext({ html }: { html: string }) {
  return (
    <>
      {parse(html, {
        replace: (domNode: any) => {
          if (domNode.type === 'tag') {
            if (domNode.name === 'a') {
              const props = attributesToProps(domNode.attribs);
              let href = props.href || '#';
              
              if (!href.startsWith('http') && !href.startsWith('#')) {
                if (href === 'index.html') {
                    href = '/demo-5';
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
              let src = props.src || '';
              if (!src.startsWith('http') && !src.startsWith('data:')) {
                src = '/demo-5/' + src;
              }
              
              const { src: _, alt, width, height, style, ...rest } = props;
              
              return (
                <Image 
                  src={src} 
                  alt={alt || 'image'} 
                  width={0} 
                  height={0} 
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto', ...style }} 
                  {...rest}
                />
              );
            }
          }
        }
      })}
    </>
  );
}
`;
fs.writeFileSync(path.join(COMP_DIR, 'HtmlToNext.tsx'), htmlToNextCode);

// Get index.html to extract layout, header, footer
const indexHtml = fs.readFileSync(path.join(SOURCE_DIR, 'index.html'), 'utf-8');
const $index = cheerio.load(indexHtml);

// Extract CSS links
const cssLinks = [];
$index('head link[rel="stylesheet"]').each((i, el) => {
  let href = $index(el).attr('href');
  if (href && !href.startsWith('http')) href = '/demo-5/' + href;
  cssLinks.push(`<link rel="stylesheet" href="${href}" />`);
});

// Extract Scripts
const scripts = [];
$index('body script').each((i, el) => {
  let src = $index(el).attr('src');
  if (src && !src.startsWith('http')) {
      src = '/demo-5/' + src;
      scripts.push(src);
  } else if (src) {
      scripts.push(src);
  }
});

// Write Layout
const layoutCode = `
import Demo5ScriptLoader from '@/components/demo-5/Demo5ScriptLoader';

export default function Demo5Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        ${cssLinks.join('\\n        ')}
      </head>
      <body>
        {children}
        <Demo5ScriptLoader />
      </body>
    </html>
  );
}
`;
fs.writeFileSync(path.join(APP_DIR, 'layout.tsx'), layoutCode);

// Write Script Loader
const scriptLoaderCode = `'use client';
import { useEffect } from 'react';

export default function Demo5ScriptLoader() {
  useEffect(() => {
    const scripts = ${JSON.stringify(scripts)};
    
    let promise = Promise.resolve();
    scripts.forEach(src => {
      promise = promise.then(() => new Promise((resolve) => {
        if (document.querySelector(\`script[src="\${src}"]\`)) {
          resolve(true);
          return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = resolve; // Continue even if one fails
        document.body.appendChild(script);
      }));
    });
  }, []);
  
  return null;
}
`;
fs.writeFileSync(path.join(COMP_DIR, 'Demo5ScriptLoader.tsx'), scriptLoaderCode);

// Extract Header and Footer HTML
const headerHtml = $index('header').first().parent().html() ? $index('header').first().prop('outerHTML') : '';
const footerHtml = $index('footer').first().prop('outerHTML') || '';

const headerCode = `
import HtmlToNext from './HtmlToNext';

export default function Header() {
  const html = \`${headerHtml.replace(/`/g, '\\`').replace(/\\$/g, '\\$')}\`;
  return <HtmlToNext html={html} />;
}
`;
fs.writeFileSync(path.join(COMP_DIR, 'Header.tsx'), headerCode);

const footerCode = `
import HtmlToNext from './HtmlToNext';

export default function Footer() {
  const html = \`${footerHtml.replace(/`/g, '\\`').replace(/\\$/g, '\\$')}\`;
  return <HtmlToNext html={html} />;
}
`;
fs.writeFileSync(path.join(COMP_DIR, 'Footer.tsx'), footerCode);

// Process all HTML files
const htmlFiles = fs.readdirSync(SOURCE_DIR).filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
  const html = fs.readFileSync(path.join(SOURCE_DIR, file), 'utf-8');
  const $ = cheerio.load(html);
  
  // Remove scripts, header, footer from body
  $('script').remove();
  $('header').remove();
  $('footer').remove();
  
  let bodyHtml = $('body').html() || '';
  // Remove HTML comments
  bodyHtml = bodyHtml.replace(/<!--[\\s\\S]*?-->/g, '');
  
  let route = file === 'index.html' ? '' : file.replace('.html', '');
  let targetDir = path.join(APP_DIR, route);
  if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });
  
  const pageCode = `
import Header from '@/components/demo-5/Header';
import Footer from '@/components/demo-5/Footer';
import HtmlToNext from '@/components/demo-5/HtmlToNext';

export default function Page() {
  const html = \`${bodyHtml.replace(/`/g, '\\`').replace(/\\$/g, '\\$')}\`;
  
  return (
    <>
      <Header />
      <HtmlToNext html={html} />
      <Footer />
    </>
  );
}
`;
  fs.writeFileSync(path.join(targetDir, 'page.tsx'), pageCode);
});

console.log("Conversion complete!");
