const fs = require('fs');

const file = 'C:/primecare/public/demo-5/css/style.css';
const backupFile = 'C:/primecare/public/demo-5/css/style.css.bak';

// Backup first if it doesn't exist
if (!fs.existsSync(backupFile)) {
    fs.copyFileSync(file, backupFile);
}

let css = fs.readFileSync(file, 'utf-8');

// Replace the Google Fonts Import
const newImport = `@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&display=swap');`;
css = css.replace(/@import url\('https:\/\/fonts\.googleapis\.com.*?display=swap'\);/, newImport);

// Replace font families globally
css = css.replace(/'Poppins'/g, "'Outfit'");
css = css.replace(/"Poppins"/g, "'Outfit'");
css = css.replace(/'Roboto'/g, "'Plus Jakarta Sans'");
css = css.replace(/"Roboto"/g, "'Plus Jakarta Sans'");

fs.writeFileSync(file, css);
console.log("Fonts swapped successfully to Outfit and Plus Jakarta Sans!");
