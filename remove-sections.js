const fs = require('fs');

const pagePath = 'C:/primecare/app/demo-3/appointment/page.tsx';
let content = fs.readFileSync(pagePath, 'utf8');

// The what-we-do section starts at <div className="what-we-do">
// The testimonials section follows it.
// The next section is <div className="our-faqs">
const startIndex = content.indexOf('<div className="what-we-do">');
const endIndex = content.indexOf('<div className="our-faqs">');

if (startIndex !== -1 && endIndex !== -1) {
    // Also include the preceding {/**/} if possible, but let's just cut from the start of what-we-do
    // to the start of our-faqs
    // Let's find the {/**/} before what-we-do
    const realStart = content.lastIndexOf('{/**/}', startIndex) !== -1 ? content.lastIndexOf('{/**/}', startIndex) : startIndex;
    const realEnd = content.lastIndexOf('{/**/}', endIndex) !== -1 ? content.lastIndexOf('{/**/}', endIndex) : endIndex;
    
    content = content.substring(0, realStart) + content.substring(realEnd);
    fs.writeFileSync(pagePath, content);
    console.log('Removed what we do and testimonials sections');
} else {
    console.log('Could not find sections to remove');
}
