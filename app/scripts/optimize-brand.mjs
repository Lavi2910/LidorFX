import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
await mkdir('src/assets/optimized', { recursive: true });
for (const [name, width] of [['Lidor-Pic-1', 720], ['Lidor-Pic-2', 720], ['Logo', 128]]) {
  await sharp(`src/assets/${name}.png`).resize({width, withoutEnlargement:true}).webp({quality:85}).toFile(`src/assets/optimized/${name}.webp`);
}
// Preserve the supplied logo as the sharing image; do not invent branding.
await sharp('src/assets/Logo.png').resize({width:600}).png().toFile('public/social-logo.png');
