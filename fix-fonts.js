const fs = require('fs');

const customCssPath = 'C:/primecare/public/demo-3/css/custom.css';
let customCss = fs.readFileSync(customCssPath, 'utf8');

// Replace both single and double quotes
customCss = customCss.replace(/font-family:\s*['"]FontAwesome['"]/g, "font-family: 'Font Awesome 7 Free', 'Font Awesome 6 Free', 'Font Awesome 5 Free', 'FontAwesome'");

fs.writeFileSync(customCssPath, customCss);
console.log('Fixed font-family in custom.css');
