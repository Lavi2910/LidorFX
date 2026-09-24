import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
const html = await readFile('dist/index.html', 'utf8');
assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, 'Homepage must have one H1 before JavaScript');
for (const phrase of ['לידור', 'מסלולים', 'שאלות', 'לדבר עם לידור']) assert(html.includes(phrase), `Missing prerendered content: ${phrase}`);
assert(html.includes('rel="canonical" href="https://lidorfx.com/"'), 'Canonical must be the production domain');
assert(!html.includes('/LidorFX/assets/'), 'Old deployment prefix found');
const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]);
assert.equal(ids.length, new Set(ids).size, 'Duplicate IDs');
let checked = 0;
for (const [, raw] of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
  const url = new URL(raw.replaceAll('&amp;', '&'), 'https://lidorfx.com/');
  if (url.origin !== 'https://lidorfx.com') continue;
  const pathname = decodeURIComponent(url.pathname);
  const file = pathname === '/' ? 'dist/index.html' : path.join('dist', pathname);
  await access(file);
  if (url.hash) {
    const target = await readFile(file, 'utf8');
    assert(target.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`), `Missing anchor: ${raw}`);
  }
  checked++;
}
const structured = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1]));
assert(structured.some(s=>s['@type']==='Organization' && s.url==='https://lidorfx.com/'));
assert(html.includes('https://wa.me/972559618562?'), 'WhatsApp must use international format without the domestic zero');
const robots = await readFile('dist/robots.txt','utf8');
assert(robots.includes('Sitemap: https://lidorfx.com/sitemap.xml'));
assert(!/Disallow:\s*\/\s*(?:\n|$)/.test(robots));
assert((await readFile('dist/404.html','utf8')).includes('noindex'));
await access('dist/_headers');
console.log(`Production checks passed: ${checked} local references, prerendered content, canonical, structured data, sitemap, 404, WhatsApp.`);

for (const name of ['terms', 'privacy', 'accessibility']) {
  const legal = await readFile(`dist/legal/${name}.html`, 'utf8');
  assert(legal.includes('name="viewport"'), `Missing mobile viewport: ${name}`);
  assert(legal.includes(`https://lidorfx.com/legal/${name}.html`), `Missing legal canonical: ${name}`);
}
console.log('Legal document mobile metadata verified.');
