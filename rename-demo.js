const fs = require('fs');
const path = require('path');

const workspacePath = 'C:/primecare';
const oldStr = 'demo-3';
const newStr = 'demo-3';

// 1. Copy directories (to avoid EPERM file lock issues on Windows)
const dirsToRename = [
    { old: 'app/demo-3', new: 'app/demo-3' },
    { old: 'components/demo-3', new: 'components/demo-3' },
    { old: 'public/demo-3', new: 'public/demo-3' }
];

for (const dir of dirsToRename) {
    const oldPath = path.join(workspacePath, dir.old);
    const newPath = path.join(workspacePath, dir.new);
    if (fs.existsSync(oldPath)) {
        fs.cpSync(oldPath, newPath, { recursive: true });
        console.log(`Copied ${dir.old} to ${dir.new}`);
    }
}

// 2. Recursively find and replace in files
function walk(dir, callback) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filepath = path.join(dir, file);
        if (fs.statSync(filepath).isDirectory()) {
            // exclude node_modules, .next, and the old demo-3 folders so we don't mess them up while locked
            if (file !== 'node_modules' && file !== '.next' && file !== '.git' && file !== 'demo-3') {
                walk(filepath, callback);
            }
        } else {
            // only process text files
            if (/\.(tsx|ts|js|jsx|css|html|json|md)$/.test(file)) {
                callback(filepath);
            }
        }
    }
}

let changedFiles = 0;
// Note: because we ignore "demo-3" directory, we are only modifying demo-3 and other global files (like tailwind.config or layout.tsx)
walk(workspacePath, (filepath) => {
    let content = fs.readFileSync(filepath, 'utf8');
    if (content.includes(oldStr)) {
        // global replace
        const newContent = content.split(oldStr).join(newStr);
        fs.writeFileSync(filepath, newContent);
        changedFiles++;
    }
});

console.log(`Updated string '${oldStr}' to '${newStr}' in ${changedFiles} files.`);
