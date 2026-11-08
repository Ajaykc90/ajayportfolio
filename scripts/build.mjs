import { mkdir, copyFile } from 'node:fs/promises';

// Explicit allowlist keeps research, audit tools and agent instructions off the public site.
const files = ['index.html', 'styles.css', 'script.js', 'assets/ajay-cartoon.svg', 'assets/Ajay-K-C-Resume.docx'];
await mkdir('dist/assets', { recursive: true });
for (const file of files) await copyFile(file, `dist/${file}`);
console.log(`Built ${files.length} public files in dist/`);
