const fs = require('fs');

// 1. Fix bootstrap.min.css
const bootstrapPath = 'C:/primecare/public/demo-3/css/bootstrap.min.css';
let bootstrapCss = fs.readFileSync(bootstrapPath, 'utf8');
bootstrapCss = bootstrapCss.replace('var(--bs-breadcrumb-divider, "https://html.awaikenthemes.com/")', 'var(--bs-breadcrumb-divider, "/")');
fs.writeFileSync(bootstrapPath, bootstrapCss);
console.log('Fixed bootstrap.min.css');

// 2. Fix team/page.tsx
const teamPagePath = 'C:/primecare/app/demo-3/team/page.tsx';
let teamPage = fs.readFileSync(teamPagePath, 'utf8');

// Update imports
teamPage = teamPage.replace(
  "import { FaPinterestP, FaTwitter as Twitter, FaFacebookF as Facebook, FaInstagram as Instagram } from 'react-icons/fa';",
  "import { FaPinterestP, FaTwitter as Twitter, FaFacebookF as Facebook, FaInstagram as Instagram, FaLinkedinIn } from 'react-icons/fa';"
);

// Replace icons
teamPage = teamPage.replace(/<span className="fab fa-facebook-f"><\/span>/g, '<Facebook />');
teamPage = teamPage.replace(/<span className="fa-brands fa-x-twitter"><\/span>/g, '<Twitter />');
teamPage = teamPage.replace(/<span className="fab fa-linkedin-in"><\/span>/g, '<FaLinkedinIn />');

fs.writeFileSync(teamPagePath, teamPage);
console.log('Fixed team/page.tsx');
