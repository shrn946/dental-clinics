const fs = require('fs');
const path = require('path');

const workspacePath = 'C:/primecare';

// 1. Copy directories
const dirsToCopy = [
    { old: 'app/demo-3', new: 'app/demo-3' },
    { old: 'components/demo-3', new: 'components/demo-3' },
    { old: 'public/demo-3', new: 'public/demo-3' },
    { old: 'app/demo-2', new: 'app/demo-2' },
    { old: 'public/demo-2', new: 'public/demo-2' }
];

for (const dir of dirsToCopy) {
    const oldPath = path.join(workspacePath, dir.old);
    const newPath = path.join(workspacePath, dir.new);
    if (fs.existsSync(oldPath)) {
        fs.cpSync(oldPath, newPath, { recursive: true });
        console.log(`Copied ${dir.old} to ${dir.new}`);
    }
}

// 2. Find and replace
const replacements = [
    { old: 'demo-3', new: 'demo-3' },
    { old: 'demo-2', new: 'demo-2' }
];

function walk(dir, callback) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filepath = path.join(dir, file);
        if (fs.statSync(filepath).isDirectory()) {
            // exclude node_modules, .next, .git
            // and exclude the OLD directories
            if (['node_modules', '.next', '.git', 'demo-3', 'demo-2'].includes(file)) continue;
            walk(filepath, callback);
        } else {
            if (/\.(tsx|ts|js|jsx|css|html|json|md)$/.test(file)) {
                callback(filepath);
            }
        }
    }
}

let changedFiles = 0;
walk(workspacePath, (filepath) => {
    let content = fs.readFileSync(filepath, 'utf8');
    let modified = false;
    for (const r of replacements) {
        if (content.includes(r.old)) {
            content = content.split(r.old).join(r.new);
            modified = true;
        }
    }
    if (modified) {
        fs.writeFileSync(filepath, content);
        changedFiles++;
    }
});

console.log(`Updated files: ${changedFiles}`);
