import { build } from 'vite';
import { readFile, writeFile, rm } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
const temp = '.prerender';
try {
  await build({ build: { ssr: 'src/entry-server.jsx', outDir: temp, emptyOutDir: true }, logLevel: 'warn' });
  const { render } = await import(pathToFileURL(path.resolve(temp, 'entry-server.js')));
  const html = await readFile('dist/index.html', 'utf8');
  await writeFile('dist/index.html', html.replace('<div id="root"></div>', `<div id="root">${render()}</div>`));
  console.log('Prerendered homepage: meaningful HTML without JavaScript.');
} finally {
  await rm(temp, { recursive: true, force: true });
}
