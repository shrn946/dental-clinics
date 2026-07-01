const fs = require('fs');
const path = require('path');

function generate() {
  try {
    const appDir = path.join(__dirname, 'app');
    const items = fs.readdirSync(appDir);
    
    // Filter directories, excluding standard app layout (main) and api routes
    const demos = items.filter(item => {
      const fullPath = path.join(appDir, item);
      if (!fs.statSync(fullPath).isDirectory()) return false;
      return item !== '(main)' && item !== 'api' && !item.startsWith('.');
    });

    // Sort to keep order consistent
    demos.sort();

    // Include the main homepage as the first item (empty path)
    const allRoutes = ['', ...demos];

    const outputPath = path.join(__dirname, 'public', 'demos-list.json');
    
    // Ensure public folder exists
    const publicDir = path.dirname(outputPath);
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    fs.writeFileSync(outputPath, JSON.stringify(allRoutes, null, 2), 'utf8');
    console.log(`Successfully generated demos list in ${outputPath}:`, allRoutes);
  } catch (error) {
    console.error('Error generating demos list:', error);
    process.exit(1);
  }
}

generate();
