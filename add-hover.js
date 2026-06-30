const fs = require('fs');

const cssPath = 'C:/primecare/public/demo-3/css/custom.css';
const cssToAdd = `
/* Custom Hover Effect for Hero Image */
.hero-image-prime img {
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), filter 0.4s ease !important;
}

.hero-image-prime img:hover {
    transform: scale(1.03) translateY(-8px) !important;
    filter: drop-shadow(0 20px 30px rgba(49, 109, 255, 0.2)) !important;
}
`;

fs.appendFileSync(cssPath, cssToAdd);
console.log('Appended hover effect to custom.css');
