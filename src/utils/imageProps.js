import sharedImages from '../data/images/shared.json';

export const cardImageSizes = [
  '(min-width: 1696px) 171px',
  '(min-width: 1024px) calc(20vw - 168.4px)',
  '(min-width: 832px) 118px',
  '(min-width: 768px) calc(25vw - 90px)',
  '(min-width: 704px) 142px',
  '(min-width: 640px) calc(33.333333vw - 92.666667px)',
  'calc(50vw - 82px)',
].join(', ');

export function createImageProps(images) {
  return (source, { sizes, loading = 'lazy', ...attributes } = {}) => {
    const image = images[source.replace(/^\.\./, '')];
    return {
      ...(image || { src: source }),
      sizes,
      loading,
      decoding: 'async',
      ...attributes,
    };
  };
}

export const imageProps = createImageProps(sharedImages);
