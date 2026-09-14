import images from './optimizedImages.json';

export function imageProps(source, { sizes, loading = 'lazy', ...attributes } = {}) {
  const variants = images[source.replace(/^\.\./, '')];
  if (!variants) return { src: source, loading, decoding: 'async', ...attributes };
  const fallback = variants.find(image => image.width >= 640) || variants[variants.length - 1];
  return {
    src: fallback.src,
    srcSet: variants.map(image => `${image.src} ${image.width}w`).join(', '),
    sizes,
    width: fallback.width,
    height: fallback.height,
    loading,
    decoding: 'async',
    ...attributes,
  };
}