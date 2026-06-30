import os
import glob
import re
from bs4 import BeautifulSoup
import json

SOURCE_DIR = r'C:\primecare\dentisto'
APP_DIR = r'C:\primecare\app\demo-4'
COMP_DIR = r'C:\primecare\components\demo-4'

os.makedirs(APP_DIR, exist_ok=True)
os.makedirs(COMP_DIR, exist_ok=True)

html_files = glob.glob(os.path.join(SOURCE_DIR, '*.html'))

def fix_url(url):
    if not url: return url
    # Fix relative CDN URLs
    if url.startswith('../../'):
        url = 'https://' + url[6:]
    # Fix internal assets
    if url.startswith('assets/'):
        url = '/demo-4/' + url
    # Fix internal links
    if url == 'index.html' or url == 'index-2.html':
        url = '/demo-4'
    elif url.endswith('.html'):
        url = '/demo-4/' + url[:-5]
    return url

# Extract head contents from index.html for layout
with open(os.path.join(SOURCE_DIR, 'index.html'), 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f, 'html.parser')
    
css_links = []
for link in soup.find('head').find_all('link'):
    href = link.get('href', '')
    href = fix_url(href)
    rel = link.get('rel', ['stylesheet'])
    if 'stylesheet' in rel or 'preconnect' in rel:
        css_links.append(f'<link rel="{" ".join(rel) if isinstance(rel, list) else rel}" href="{href}" />')

layout_tsx = f"""
export default function Demo4Layout({{ children }}: {{ children: React.ReactNode }}) {{
  return (
    <html lang="en">
      <head>
        {chr(10).join(css_links)}
      </head>
      <body>
        {{children}}
      </body>
    </html>
  );
}}
"""
with open(os.path.join(APP_DIR, 'layout.tsx'), 'w', encoding='utf-8') as f:
    f.write(layout_tsx)

# Script Loader Component
script_loader_tsx = """
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
"""
with open(os.path.join(COMP_DIR, 'Demo4ScriptLoader.tsx'), 'w', encoding='utf-8') as f:
    f.write(script_loader_tsx)

# Process HTML pages
for file_path in html_files:
    filename = os.path.basename(file_path)
    
    with open(file_path, 'r', encoding='utf-8') as f:
        page_soup = BeautifulSoup(f, 'html.parser')
        
    body = page_soup.find('body')
    if not body: continue
    
    # Remove script tags from body
    for script in body.find_all('script'):
        script.decompose()
        
    # Fix all links and images
    for tag in body.find_all(['a', 'img', 'link', 'form']):
        if tag.name == 'a':
            tag['href'] = fix_url(tag.get('href'))
        elif tag.name == 'img':
            tag['src'] = fix_url(tag.get('src'))
        elif tag.name == 'link':
            tag['href'] = fix_url(tag.get('href'))
        elif tag.name == 'form':
            tag['action'] = fix_url(tag.get('action'))
            
    # Also fix background images in inline styles
    for tag in body.find_all(style=True):
        style = tag['style']
        if 'assets/' in style:
            tag['style'] = style.replace('assets/', '/demo-4/assets/')
            
    # Strip comments
    from bs4 import Comment
    for comment in body.find_all(string=lambda text: isinstance(text, Comment)):
        comment.extract()

    # Serialize body inner HTML
    body_html = ''.join(str(c) for c in body.contents)
    
    # Escape quotes and backticks for the template literal
    body_html_escaped = body_html.replace('`', '\\`').replace('$', '\\$')
    
    if filename in ['index.html', 'index-2.html']:
        page_dir = APP_DIR
    else:
        page_dir = os.path.join(APP_DIR, filename[:-5])
        os.makedirs(page_dir, exist_ok=True)
        
    page_tsx = f"""
import Demo4ScriptLoader from '@/components/demo-4/Demo4ScriptLoader';

export default function Page() {{
  const html = `{body_html_escaped}`;
  return (
    <>
      <div dangerouslySetInnerHTML={{{{ __html: html }}}} suppressHydrationWarning />
      <Demo4ScriptLoader />
    </>
  );
}}
"""
    with open(os.path.join(page_dir, 'page.tsx'), 'w', encoding='utf-8') as f:
        f.write(page_tsx)
        
print("Conversion complete!")
