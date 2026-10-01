const image = (id, sourcePath, publicPath, alt, placement, collection = null, objectPosition = 'center', width = 1024, height = 768) => ({
  id,
  sourcePath,
  publicPath,
  srcSet: `${publicPath.replace('.webp', '-480.webp')} 480w, ${publicPath} 1024w`,
  sizes: placement === 'hero'
    ? '(max-width: 767px) 100vw, 50vw'
    : placement === 'installation-gallery'
      ? '(max-width: 767px) 50vw, 33vw'
      : '(max-width: 420px) 100vw, (max-width: 767px) 50vw, 33vw',
  alt,
  placement,
  collection,
  objectPosition,
  width,
  height,
})

export const IMAGE_MANIFEST = [
  image('hero', 'WhatsApp Unknown 2026-10-01 at 4.41.36 PM/WhatsApp Image 2026-09-26 at 10.48.47 AM (3).jpeg', '/images/site/hero-room.webp', 'A bright living room with custom shades across a double-height window.', 'hero', null, 'center 58%'),
  image('zebra', 'WhatsApp Unknown 2026-10-01 at 4.41.36 PM/WhatsApp Image 2026-09-26 at 10.49.35 AM (5).jpeg', '/images/site/collection-zebra.webp', 'A living room with alternating dark and sheer horizontal bands across the windows.', 'collection', 'zebra'),
  image('roller', 'WhatsApp Unknown 2026-10-01 at 4.41.36 PM/WhatsApp Image 2026-09-26 at 10.49.18 AM.jpeg', '/images/site/collection-roller.webp', 'Two neutral fabric shades fitted inside adjacent windows.', 'collection', 'roller'),
  image('cellular', 'WhatsApp Unknown 2026-10-01 at 4.41.36 PM/WhatsApp Image 2026-09-26 at 10.48.56 AM (1).jpeg', '/images/site/collection-cellular.webp', 'A bright living room with custom shades across several windows.', 'collection'),
  image('roman', 'WhatsApp Unknown 2026-10-01 at 4.41.36 PM/WhatsApp Image 2026-09-26 at 10.49.19 AM (1).jpeg', '/images/site/collection-roman.webp', 'A warm room with layered window coverings in natural tones.', 'collection'),
  image('sheer', 'WhatsApp Unknown 2026-10-01 at 4.41.36 PM/WhatsApp Image 2026-09-26 at 10.49.20 AM (3).jpeg', '/images/site/collection-sheer.webp', 'Daylight through a layered shade framed by curtains.', 'collection'),
  image('workLivingOne', 'WhatsApp Unknown 2026-10-01 at 4.41.36 PM/WhatsApp Image 2026-09-26 at 10.48.48 AM.jpeg', '/images/site/work-living-01.webp', 'A living room with coordinated window coverings.', 'installation-gallery'),
  image('workDiningOne', 'WhatsApp Unknown 2026-10-01 at 4.41.36 PM/WhatsApp Image 2026-09-26 at 10.48.58 AM (6).jpeg', '/images/site/work-dining-01.webp', 'Window coverings in a dining room with a round table.', 'installation-gallery', null, 'center', 768, 1024),
  image('workDiningTwo', 'WhatsApp Unknown 2026-10-01 at 4.41.36 PM/WhatsApp Image 2026-09-26 at 10.49.04 AM.jpeg', '/images/site/work-dining-02.webp', 'Window coverings above a dining table.', 'installation-gallery', null, 'center', 768, 1024),
  image('workFamilyOne', 'WhatsApp Unknown 2026-10-01 at 4.41.36 PM/WhatsApp Image 2026-09-26 at 10.49.20 AM (2).jpeg', '/images/site/work-family-01.webp', 'A family room with custom shades and curtains.', 'installation-gallery', null, 'center', 768, 1024),
  image('workFamilyTwo', 'WhatsApp Unknown 2026-10-01 at 4.41.36 PM/WhatsApp Image 2026-09-26 at 10.49.20 AM (9).jpeg', '/images/site/work-family-02.webp', 'A living room with dark horizontal shades.', 'installation-gallery'),
  image('workLivingTwo', 'WhatsApp Unknown 2026-10-01 at 4.41.36 PM/WhatsApp Image 2026-09-26 at 10.49.39 AM.jpeg', '/images/site/work-living-02.webp', 'A warm living room with window shades.', 'installation-gallery'),
  image('motorization', 'WhatsApp Unknown 2026-10-01 at 4.41.36 PM/WhatsApp Image 2026-09-26 at 10.49.20 AM (7).jpeg', '/images/site/motorized-detail.webp', 'A close view of a layered shade fitted to a bedroom window.', 'motorization', null, 'center', 768, 1024),
]

export const SITE_IMAGES = Object.fromEntries(IMAGE_MANIFEST.map((item) => [item.id, item]))

export const COLLECTIONS = [
  {
    id: 'zebra',
    name: 'Zebra shades',
    benefit: 'Alternating sheer and opaque bands let you shift between filtered light and added privacy.',
  },
  {
    id: 'roller',
    name: 'Roller shades',
    benefit: 'A clean profile keeps the window simple, with fabric choices for different light preferences.',
  },
  {
    id: 'cellular',
    name: 'Honeycomb / cellular',
    benefit: 'A softly pleated structure brings a tailored look to the window.',
  },
  {
    id: 'roman',
    name: 'Roman shades',
    benefit: 'Fabric folds bring a softer, more tailored finish to a room.',
  },
  {
    id: 'sheer',
    name: 'Sheer shades',
    benefit: 'A light-filtering layered look softens daylight while keeping a room bright.',
  },
]

export const INSTALLATIONS = [
  SITE_IMAGES.workLivingOne,
  SITE_IMAGES.workDiningOne,
  SITE_IMAGES.workDiningTwo,
  SITE_IMAGES.workFamilyOne,
  SITE_IMAGES.workFamilyTwo,
  SITE_IMAGES.workLivingTwo,
]