const fs = require('fs');

const cssPath = 'C:/primecare/public/demo-3/css/custom.css';
const cssToAdd = `
/* Global Logo Sizing Fixes */
.main-header .navbar-brand img {
    max-height: 40px !important;
    width: auto !important;
}

.footer-logo img {
    max-height: 50px !important;
    width: auto !important;
}
`;

fs.appendFileSync(cssPath, cssToAdd);
console.log('Appended logo size fixes to custom.css');
