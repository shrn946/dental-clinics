const fs = require('fs');

const fontAwesomeCssPath = 'C:/primecare/public/demo-3/css/all.min.css';
let css = fs.readFileSync(fontAwesomeCssPath, 'utf8');

// Replace content:var(--fa)/"" which causes CSS parsing issues in some environments
css = css.replace(/content:var\(--fa\)\/""/g, '');

fs.writeFileSync(fontAwesomeCssPath, css);
console.log('Fixed content rule in all.min.css');
