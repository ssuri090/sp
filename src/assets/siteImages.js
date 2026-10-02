const image = (id, sourcePath, publicPath, alt, placement, collection = null, objectPosition = 'center', width = 1024, height = 768, smallImagePath = null) => ({
  id,
  sourcePath,
  publicPath,
  srcSet: `${smallImagePath || publicPath.replace('.webp', '-480.webp')} 480w, ${publicPath} 1024w`,
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
  image('rollerDetail', 'WhatsApp Unknown 2026-10-01 at 4.41.36 PM/ROLLER/WhatsApp Image 2026-09-26 at 10.49.31 AM.jpeg', '/images/site/collection-roller-detail-1024.webp', 'Neutral roller shades fitted to a bedroom window.', 'collection-detail', 'roller', 'center', 1024, 768, '/images/site/collection-roller-detail-480.webp'),
  image('cellularDetail', 'WhatsApp Unknown 2026-10-01 at 4.41.36 PM/Honeycomb /WhatsApp Image 2026-10-02 at 10.26.53 AM (2).jpeg', '/images/site/collection-cellular-detail-1024.webp', 'Honeycomb shades across several windows in a bright living room.', 'collection-detail', 'cellular', 'center', 1024, 1024, '/images/site/collection-cellular-detail-480.webp'),
  image('romanDetail', 'WhatsApp Unknown 2026-10-01 at 4.41.36 PM/ROMAN/WhatsApp Image 2026-10-02 at 10.34.22 AM.jpeg', '/images/site/collection-roman-detail-1024.webp', 'A Roman shade fitted to a living-room window.', 'collection-detail', 'roman', 'center', 1024, 1024, '/images/site/collection-roman-detail-480.webp'),
  image('sheerDetail', 'WhatsApp Unknown 2026-10-01 at 4.41.36 PM/SHEER/WhatsApp Image 2026-09-26 at 10.49.22 AM (3).jpeg', '/images/site/collection-sheer-detail-1024.webp', 'A bright living room with sheer shades across several windows.', 'collection-detail', 'sheer', 'center', 768, 1024, '/images/site/collection-sheer-detail-480.webp'),
  image('workLivingOne', 'WhatsApp Unknown 2026-10-01 at 4.41.36 PM/WhatsApp Image 2026-09-26 at 10.48.48 AM.jpeg', '/images/site/work-living-01.webp', 'A living room with coordinated window coverings.', 'installation-gallery'),
  image('workDiningOne', 'WhatsApp Unknown 2026-10-01 at 4.41.36 PM/WhatsApp Image 2026-09-26 at 10.48.58 AM (6).jpeg', '/images/site/work-dining-01.webp', 'Window coverings in a dining room with a round table.', 'installation-gallery', null, 'center', 768, 1024),
  image('workDiningTwo', 'WhatsApp Unknown 2026-10-01 at 4.41.36 PM/WhatsApp Image 2026-09-26 at 10.49.04 AM.jpeg', '/images/site/work-dining-02.webp', 'Window coverings above a dining table.', 'installation-gallery', null, 'center', 768, 1024),
  image('workFamilyOne', 'WhatsApp Unknown 2026-10-01 at 4.41.36 PM/WhatsApp Image 2026-09-26 at 10.49.20 AM (2).jpeg', '/images/site/work-family-01.webp', 'A family room with custom shades and curtains.', 'installation-gallery', null, 'center', 768, 1024),
  image('workFamilyTwo', 'WhatsApp Unknown 2026-10-01 at 4.41.36 PM/WhatsApp Image 2026-09-26 at 10.49.20 AM (9).jpeg', '/images/site/work-family-02.webp', 'A living room with dark horizontal shades.', 'installation-gallery'),
  image('workLivingTwo', 'WhatsApp Unknown 2026-10-01 at 4.41.36 PM/WhatsApp Image 2026-09-26 at 10.49.39 AM.jpeg', '/images/site/work-living-02.webp', 'A warm living room with window shades.', 'installation-gallery'),
  image('zebraDetail', 'src/assets/photos/photo-11.jpeg', '/images/site/collection-zebra-closeup-1024.webp', 'Close view of alternating dark and sheer horizontal zebra-shade bands.', 'collection-detail', 'zebra', 'center', 1024, 576, '/images/site/collection-zebra-closeup-480.webp'),
  image('patioEntry', 'WhatsApp Unknown 2026-10-01 at 4.41.36 PM/WhatsApp Image 2026-09-26 at 10.48.57 AM.jpeg', '/images/site/patio-entry-1024.webp', 'An entry door and sidelights fitted with shades.', 'patio', null, 'center', 768, 1024, '/images/site/patio-entry-480.webp'),
  image('customPrintBeach', 'WhatsApp Unknown 2026-10-01 at 4.41.36 PM/Picturized blinds/WhatsApp Image 2026-09-26 at 10.48.47 AM.jpeg', '/images/site/custom-print-beach-1024.webp', 'A zebra shade with a tropical beach photograph printed across alternating bands.', 'custom-printing', null, 'center', 720, 960, '/images/site/custom-print-beach-480.webp'),
  image('customPrintFloral', 'WhatsApp Unknown 2026-10-01 at 4.41.36 PM/Picturized blinds/WhatsApp Image 2026-09-26 at 10.48.55 AM (1).jpeg', '/images/site/custom-print-floral-1024.webp', 'A zebra shade with a floral and hummingbird image printed across the bands.', 'custom-printing', null, 'center', 720, 960, '/images/site/custom-print-floral-480.webp'),
  image('zebraSlides1', 'WhatsApp Unknown 2026-10-01 at 4.41.36 PM/ZEBRA BLINDS/WhatsApp Image 2026-09-26 at 10.48.57 AM.jpeg', '/images/site/collections/zebra-01-1024.webp', 'Zebra shades fitted to a glazed entry door and sidelights.', 'collection-slide', 'zebra', 'center', 768, 1024, '/images/site/collections/zebra-01-480.webp'),
  image('zebraSlides2', 'WhatsApp Unknown 2026-10-01 at 4.41.36 PM/ZEBRA BLINDS/WhatsApp Image 2026-09-26 at 10.48.57 AM (3).jpeg', '/images/site/collections/zebra-02-1024.webp', 'Zebra shades fitted around a dining room.', 'collection-slide', 'zebra', 'center', 768, 1024, '/images/site/collections/zebra-02-480.webp'),
  image('zebraSlides3', 'WhatsApp Unknown 2026-10-01 at 4.41.36 PM/ZEBRA BLINDS/WhatsApp Image 2026-09-26 at 10.48.58 AM (5).jpeg', '/images/site/collections/zebra-03-1024.webp', 'Zebra shades fitted across windows in a large living room.', 'collection-slide', 'zebra', 'center', 1024, 768, '/images/site/collections/zebra-03-480.webp'),
  image('zebraSlides4', 'WhatsApp Unknown 2026-10-01 at 4.41.36 PM/ZEBRA BLINDS/WhatsApp Image 2026-09-26 at 10.49.08 AM.jpeg', '/images/site/collections/zebra-04-1024.webp', 'Zebra shades fitted to several living room windows.', 'collection-slide', 'zebra', 'center', 1024, 768, '/images/site/collections/zebra-04-480.webp'),
  image('zebraSlides5', 'WhatsApp Unknown 2026-10-01 at 4.41.36 PM/ZEBRA BLINDS/WhatsApp Image 2026-09-26 at 10.49.35 AM (5).jpeg', '/images/site/collections/zebra-05-1024.webp', 'Close view of zebra shades with alternating dark and sheer bands.', 'collection-slide', 'zebra', 'center', 1024, 768, '/images/site/collections/zebra-05-480.webp'),
  image('rollerSlides1', 'WhatsApp Unknown 2026-10-01 at 4.41.36 PM/ROLLER/WhatsApp Image 2026-09-26 at 10.49.26 AM.jpeg', '/images/site/collections/roller-01-1024.webp', 'Roller shades fitted to windows in a bedroom.', 'collection-slide', 'roller', 'center', 1024, 768, '/images/site/collections/roller-01-480.webp'),
  image('rollerSlides2', 'WhatsApp Unknown 2026-10-01 at 4.41.36 PM/ROLLER/WhatsApp Image 2026-09-26 at 10.49.31 AM.jpeg', '/images/site/collections/roller-02-1024.webp', 'Roller shades fitted to the windows of a bedroom.', 'collection-slide', 'roller', 'center', 1024, 768, '/images/site/collections/roller-02-480.webp'),
  image('rollerSlides3', 'WhatsApp Unknown 2026-10-01 at 4.41.36 PM/ROLLER/WhatsApp Image 2026-09-26 at 10.49.31 AM (1).jpeg', '/images/site/collections/roller-03-1024.webp', 'A roller shade lowered over a bathroom window.', 'collection-slide', 'roller', 'center', 768, 1024, '/images/site/collections/roller-03-480.webp'),
  image('cellularSlides1', 'WhatsApp Unknown 2026-10-01 at 4.41.36 PM/Honeycomb /WhatsApp Image 2026-10-02 at 10.26.53 AM (1).jpeg', '/images/site/collections/honeycomb-01-1024.webp', 'Close view of the pleated surface of a honeycomb shade.', 'collection-slide', 'cellular', 'center', 566, 566, '/images/site/collections/honeycomb-01-480.webp'),
  image('cellularSlides2', 'WhatsApp Unknown 2026-10-01 at 4.41.36 PM/Honeycomb /WhatsApp Image 2026-10-02 at 10.26.53 AM (2).jpeg', '/images/site/collections/honeycomb-02-1024.webp', 'Honeycomb shades fitted across several windows in a living room.', 'collection-slide', 'cellular', 'center', 1024, 1024, '/images/site/collections/honeycomb-02-480.webp'),
  image('romanSlides1', 'WhatsApp Unknown 2026-10-01 at 4.41.36 PM/ROMAN/WhatsApp Image 2026-10-02 at 10.34.22 AM.jpeg', '/images/site/collections/roman-01-1024.webp', 'A Roman shade fitted to a living room window.', 'collection-slide', 'roman', 'center', 1024, 1024, '/images/site/collections/roman-01-480.webp'),
  image('sheerSlides1', 'WhatsApp Unknown 2026-10-01 at 4.41.36 PM/SHEER/WhatsApp Image 2026-09-26 at 10.49.22 AM (3).jpeg', '/images/site/collections/sheer-01-1024.webp', 'Sheer shades fitted across several windows in a bright living room.', 'collection-slide', 'sheer', 'center', 768, 1024, '/images/site/collections/sheer-01-480.webp'),
]

export const SITE_IMAGES = Object.fromEntries(IMAGE_MANIFEST.map((item) => [item.id, item]))

export const COLLECTIONS = [
  {
    id: 'zebra',
    slug: 'zebra-shades',
    name: 'Zebra shades',
    imageId: 'zebraSlides1',
    imageIds: ['zebraSlides1', 'zebraSlides2', 'zebraSlides3', 'zebraSlides4', 'zebraSlides5'],
    benefit: 'Alternating sheer and opaque bands let you shift between filtered light and added privacy.',
  },
  {
    id: 'roller',
    slug: 'roller-shades',
    name: 'Roller shades',
    imageId: 'rollerSlides1',
    imageIds: ['rollerSlides1', 'rollerSlides2', 'rollerSlides3'],
    benefit: 'A clean profile keeps the window simple, with fabric choices for different light preferences.',
  },
  {
    id: 'cellular',
    slug: 'honeycomb-cellular-shades',
    name: 'Honeycomb / cellular',
    imageId: 'cellularSlides1',
    imageIds: ['cellularSlides1', 'cellularSlides2'],
    benefit: 'A softly pleated structure brings a tailored look to the window.',
  },
  {
    id: 'roman',
    slug: 'roman-shades',
    name: 'Roman shades',
    imageId: 'romanSlides1',
    imageIds: ['romanSlides1'],
    benefit: 'Fabric folds bring a softer, more tailored finish to a room.',
  },
  {
    id: 'sheer',
    slug: 'sheer-shades',
    name: 'Sheer shades',
    imageId: 'sheerSlides1',
    imageIds: ['sheerSlides1'],
    benefit: 'A light-filtering layered look softens daylight while keeping a room bright.',
  },
  {
    id: 'picturized',
    slug: 'picturized-blinds',
    name: 'Picturized Blinds',
    imageId: 'customPrintBeach',
    imageIds: ['customPrintBeach'],
    benefit: 'Add a personal image to a compatible shade. Image rights, print quality and product compatibility are confirmed for each project.',
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
