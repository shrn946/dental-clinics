const fs = require('fs');

const pagePath = 'C:/primecare/app/demo-3/services/page.tsx';
let content = fs.readFileSync(pagePath, 'utf8');

const startIndex = content.indexOf('<div className="what-we-do">');
const endIndex = content.indexOf('<div className="our-testimonial bg-section">');

if (startIndex !== -1 && endIndex !== -1) {
    const realStart = content.lastIndexOf('{/**/}', startIndex) !== -1 ? content.lastIndexOf('{/**/}', startIndex) : startIndex;
    const realEnd = content.lastIndexOf('{/**/}', endIndex) !== -1 ? content.lastIndexOf('{/**/}', endIndex) : endIndex;
    
    content = content.substring(0, realStart) + content.substring(realEnd);
    fs.writeFileSync(pagePath, content);
    console.log('Removed what we do section');
} else {
    console.log('Could not find section to remove');
}
