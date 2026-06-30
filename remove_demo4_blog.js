const fs = require('fs');
const path = require('path');

const demo4Dir = 'C:/primecare/app/demo-4';

// Find all page.tsx files
function findPageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      findPageFiles(fullPath, fileList);
    } else if (file === 'page.tsx') {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const pageFiles = findPageFiles(demo4Dir);

// Complex regex or simple split/replace to remove the Blog li
const regex = /<li class="nav-item dropdown pr-lg-0">\s*<a[^>]*>\s*Blog\s*<\/a>\s*<div[^>]*>[\s\S]*?<\/div>\s*<\/li>/;

for (const file of pageFiles) {
  let content = fs.readFileSync(file, 'utf-8');
  if (regex.test(content)) {
    content = content.replace(regex, '');
    fs.writeFileSync(file, content);
  }
}

// Delete folders
const foldersToDelete = [
  'blog',
  'four-column',
  'infinite-scroll',
  'load-more',
  'one-column',
  'single-post',
  'six-colum-full-wide',
  'three-colum-sidbar',
  'three-column',
  'two-column'
];

for (const folder of foldersToDelete) {
  const folderPath = path.join(demo4Dir, folder);
  if (fs.existsSync(folderPath)) {
    fs.rmSync(folderPath, { recursive: true, force: true });
  }
}

console.log('Blog completely removed from Demo 4');
