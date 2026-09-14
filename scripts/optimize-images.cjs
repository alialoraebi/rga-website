const fs = require('node:fs/promises');
const path = require('node:path');
const { createHash } = require('node:crypto');
const sharp = require('sharp');

const root = path.resolve(__dirname, '..');
const output = path.join(root, 'public/images/optimized');

async function optimizeImages() {
  await fs.mkdir(output, { recursive: true });
  const sources = ['logo.png', 'rga-map.png', 'audiostuffs.png'];
  for (const directory of ['logos', 'projects', 'services']) {
    const files = await fs.readdir(path.join(root, 'public/images', directory));
    sources.push(...files.filter(file => /\.(png|jpe?g)$/i.test(file)).map(file => `${directory}/${file}`));
  }
  const manifest = {};
  let originalBytes = 0;
  let largestVariantBytes = 0;
  for (const source of sources.sort()) {
    const input = await fs.readFile(path.join(root, 'public/images', source));
    const metadata = await sharp(input).metadata();
    const widths = source === 'audiostuffs.png' ? [640, 960, 1600, 2400]
      : source === 'logo.png' ? [320, 640, 800]
      : source.startsWith('logos/') ? [160, 320, 480]
      : [160, 320, 640, 960, 1280];
    const variants = [];
    for (const width of [...new Set(widths.map(size => Math.min(size, metadata.width)))]) {
      const { data, info } = await sharp(input).rotate().resize({ width, withoutEnlargement: true })
        .webp({ quality: source.includes('logo') ? 90 : 82, effort: 6 }).toBuffer({ resolveWithObject: true });
      const hash = createHash('sha256').update(data).digest('hex').slice(0, 12);
      const name = `${source.replace(/\.[^.]+$/, '').replaceAll('/', '-')}-${info.width}-${hash}.webp`;
      await fs.writeFile(path.join(output, name), data);
      variants.push({ src: `/images/optimized/${name}`, width: info.width, height: info.height, bytes: data.length });
    }
    manifest[`/images/${source}`] = variants;
    originalBytes += input.length;
    largestVariantBytes += variants[variants.length - 1].bytes;
  }
  await fs.writeFile(path.join(root, 'src/optimizedImages.json'), `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(`Optimized ${sources.length} images: ${originalBytes} original bytes -> ${largestVariantBytes} bytes for largest WebP variants.`);
}

optimizeImages().catch(error => {
  console.error(error);
  process.exitCode = 1;
});