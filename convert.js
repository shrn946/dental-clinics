const fs = require('fs');

function htmlToJsx(html) {
    let jsx = html;
    // Replace class= with className=
    jsx = jsx.replace(/class=/g, 'className=');
    // Replace <img ... > with <img ... />
    jsx = jsx.replace(/<img([^>]*?)(?!\/)> /g, '<img$1 /> ');
    jsx = jsx.replace(/<img([^>]*?)(?!\/)>(\s*)/g, '<img$1 />$2');
    
    // Sometimes there are self closing tags that are missing /
    jsx = jsx.replace(/<hr([^>]*?)>/g, '<hr$1 />');
    jsx = jsx.replace(/<br([^>]*?)>/g, '<br$1 />');
    jsx = jsx.replace(/<input([^>]*?)>/g, '<input$1 />');
    
    // Replace images/ with /demo-3/images/
    jsx = jsx.replace(/(src|href)="images\//g, '$1="/demo-3/images/');
    
    // Replace <i> with <span>
    jsx = jsx.replace(/<i className="([^"]+)"><\/i>/g, '<span className="$1"></span>');
    jsx = jsx.replace(/<i className="([^"]+)"><\/i>/g, '<span className="$1"></span>');
    jsx = jsx.replace(/<i className="([^"]+)"><\/i>/g, '<span className="$1"></span>');

    // Make sure all images end with />
    let imgRegex = /<img([^>]+)>/g;
    jsx = jsx.replace(imgRegex, (match, p1) => {
        if (p1.trim().endsWith('/')) {
            return match;
        }
        return `<img${p1} />`;
    });

    // Make sure <input> end with />
    let inputRegex = /<input([^>]+)>/g;
    jsx = jsx.replace(inputRegex, (match, p1) => {
        if (p1.trim().endsWith('/')) {
            return match;
        }
        return `<input${p1} />`;
    });

    // Some specific replacements for links
    jsx = jsx.replace(/href="([a-zA-Z0-9-]+\.html)"/g, 'href="/demo-3"');
    
    // Replace <!-- --> with {/* */}
    jsx = jsx.replace(/<!--(.*?)-->/g, '{/* $1 */}');
    
    return jsx;
}

function processFile(inputFile, outputFile, startMarker, endMarker) {
    const html = fs.readFileSync(inputFile, 'utf-8');
    const startIndex = html.indexOf(startMarker);
    const endIndex = html.indexOf(endMarker) + endMarker.length;
    
    if (startIndex === -1 || endIndex === -1) {
        console.log(`Markers not found in ${inputFile}`);
        return;
    }
    
    const content = html.substring(startIndex, endIndex);
    const jsxContent = htmlToJsx(content);
    
    const finalFileContent = `import Link from 'next/link';
import Image from 'next/image';
import { Star, Plus, Check, Phone, Mail, MapPin, Clock, ArrowRight, Search, Play } from 'lucide-react';
import { FaPinterestP, FaTwitter as Twitter, FaFacebookF as Facebook, FaInstagram as Instagram } from 'react-icons/fa';

export default function Page() {
  return (
    <>
${jsxContent}
    </>
  );
}
`;

    // create directory if it doesn't exist
    const dir = outputFile.substring(0, outputFile.lastIndexOf('/'));
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(outputFile, finalFileContent);
    console.log(`Wrote to ${outputFile}`);
}

processFile(
    'C:/primecare/denture/team.html',
    'C:/primecare/app/demo-3/team/page.tsx',
    '<!-- Page Header Start -->',
    '<!-- Page Team End -->'
);

processFile(
    'C:/primecare/denture/testimonials.html',
    'C:/primecare/app/demo-3/testimonials/page.tsx',
    '<!-- Page Header Start -->',
    '<!-- Our FAQs Section End -->'
);
