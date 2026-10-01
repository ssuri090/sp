export const BUSINESS = {
  name: 'S&P Elegant Blinds',
  phoneDisplay: '302-279-6950',
  phoneE164: '+13022796950',
  phoneHref: 'tel:+13022796950',
  whatsappNumber: '13022796950',
  website: 'https://www.spelegantblinds.com/',
  serviceAreas: [
    {
      state: 'Delaware',
      abbreviation: 'DE',
      zipCodes: ['19709', '19734', '19977', '19904', '19962', '19720', '19702'],
    },
    {
      state: 'Maryland',
      abbreviation: 'MD',
      zipCodes: ['21921', '21901'],
    },
    {
      state: 'Pennsylvania',
      abbreviation: 'PA',
      zipCodes: ['19335', '19341', '19425', '19343', '19380', '19382', '19348', '19363', '19355', '19087', '19320', '19073', '19406', '19301', '19342'],
    },
  ],
  localServiceAreas: [
    {
      city: 'Exton',
      state: 'PA',
      description: 'Custom blinds and motorized shades for homes in Exton, with product compatibility confirmed before selection.',
    },
    {
      city: 'Chester Springs',
      state: 'PA',
      description: 'Explore window treatments and zebra blinds for Chester Springs homes, with options based on each window.',
    },
    {
      city: 'Downingtown',
      state: 'PA',
      description: 'Ask about custom blinds, motorized shades and blinds installation in Downingtown, with options confirmed for your project.',
    },
    {
      city: 'Middletown',
      state: 'DE',
      description: 'Whole house blinds for Middletown homes can coordinate a consistent style while meeting each room’s light and privacy needs.',
    },
    {
      city: 'Smyrna',
      state: 'DE',
      description: 'Compare custom blinds in Smyrna, with fabrics and light control chosen to suit each space.',
    },
    {
      city: 'Townsend',
      state: 'DE',
      description: 'Explore window shades in Townsend based on the privacy and daylight you want in each room.',
    },
  ],
}

export const getWhatsAppCatalogUrl = (collection) => {
  const message = collection
    ? `Hi S&P Elegant Blinds! I am interested in ${collection}. Please send me the catalog and available options.`
    : 'Hi S&P Elegant Blinds! Please send me your blinds catalog. I would like to explore styles and pricing for my home.'

  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`
}