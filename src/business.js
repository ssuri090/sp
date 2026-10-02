export const BUSINESS = {
  name: 'S&P Elegant Blinds',
  email: 'info@spelegantblinds.com',
  phoneDisplay: '302-279-6950',
  phoneE164: '+13022796950',
  phoneHref: 'tel:+13022796950',
  whatsappNumber: '13022796950',
  instagramHref: 'https://www.instagram.com/spelegantblinds/',
  website: 'https://www.spelegantblinds.com/',
  serviceAreas: [
    {
      state: 'Delaware',
      abbreviation: 'DE',
      towns: ['Middletown', 'Smyrna', 'Townsend'],
      zipCodes: ['19709', '19734', '19977', '19904', '19962', '19720', '19702'],
    },
    {
      state: 'Maryland',
      abbreviation: 'MD',
      towns: [],
      zipCodes: ['21921', '21901'],
    },
    {
      state: 'Pennsylvania',
      abbreviation: 'PA',
      towns: ['Exton', 'Chester Springs', 'Downingtown'],
      zipCodes: ['19335', '19341', '19425', '19343', '19380', '19382', '19348', '19363', '19355', '19087', '19320', '19073', '19406', '19301', '19342'],
    },
  ],
  localServiceAreas: [
    {
      city: 'Exton',
      state: 'PA',
      services: 'Custom blinds · Motorized shades',
    },
    {
      city: 'Chester Springs',
      state: 'PA',
      services: 'Window treatments · Zebra blinds',
    },
    {
      city: 'Downingtown',
      state: 'PA',
      services: 'Custom blinds · Motorization · Installation',
    },
    {
      city: 'Middletown',
      state: 'DE',
      services: 'Whole-house blinds',
    },
    {
      city: 'Smyrna',
      state: 'DE',
      services: 'Custom blinds',
    },
    {
      city: 'Townsend',
      state: 'DE',
      services: 'Window shades',
    },
  ],
}

export const getWhatsAppCatalogUrl = (collection) => {
  const message = collection
    ? `Hi S&P Elegant Blinds! I am interested in ${collection}. Please send me the catalog and available options.`
    : 'Hi S&P Elegant Blinds! Please send me your blinds catalog. I would like to explore styles and pricing for my home.'

  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`
}