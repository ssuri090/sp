import { BUSINESS } from '../src/business.js'
import { COLLECTIONS } from '../src/assets/siteImages.js'

const RATE_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT = 5
const MAX_RATE_LIMIT_KEYS = 1000
const requestsByIp = new Map()

const reply = (res, status, payload) => res.status(status).json(payload)

const cleanText = (value, maxLength) => (typeof value === 'string'
  ? value.replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, maxLength)
  : '')

const isAllowedOrigin = (origin) => {
  if (!origin) return true

  try {
    const host = new URL(origin).host.toLowerCase()
    const allowedHosts = new Set([
      'spelegantblinds.com',
      'www.spelegantblinds.com',
      'localhost:3000',
      'localhost:3002',
      'localhost:5173',
      '127.0.0.1:3000',
      '127.0.0.1:3002',
      process.env.VERCEL_URL,
      process.env.VERCEL_PROJECT_PRODUCTION_URL,
    ].filter(Boolean).map((value) => value.toLowerCase()))
    return allowedHosts.has(host)
  } catch {
    return false
  }
}

const isRateLimited = (ip, now = Date.now()) => {
  if (requestsByIp.size >= MAX_RATE_LIMIT_KEYS) {
    for (const [key, request] of requestsByIp) {
      if (now - request.start >= RATE_WINDOW_MS) requestsByIp.delete(key)
    }
    if (requestsByIp.size >= MAX_RATE_LIMIT_KEYS) return true
  }

  const previous = requestsByIp.get(ip)
  if (!previous || now - previous.start >= RATE_WINDOW_MS) {
    requestsByIp.set(ip, { start: now, count: 1 })
    return false
  }

  if (previous.count >= RATE_LIMIT) return true
  previous.count += 1
  return false
}

const sendWhatsAppAlert = async () => {
  const {
    WHATSAPP_CLOUD_API_TOKEN: token,
    WHATSAPP_PHONE_NUMBER_ID: phoneNumberId,
    WHATSAPP_ALERT_TO: recipient,
    WHATSAPP_GRAPH_API_VERSION: apiVersion,
    WHATSAPP_TEMPLATE_NAME: templateName,
  } = process.env
  const templateLanguage = process.env.WHATSAPP_TEMPLATE_LANGUAGE || 'en_US'

  if (!token || !phoneNumberId || !recipient || !apiVersion || !templateName) {
    return 'not_configured'
  }

  if (!/^v\d+\.\d+$/.test(apiVersion) || !/^\d+$/.test(phoneNumberId) || !/^\d{8,15}$/.test(recipient) || !/^[a-z0-9_]+$/.test(templateName)) {
    return 'failed'
  }

  try {
    const response = await fetch(`https://graph.facebook.com/${apiVersion}/${phoneNumberId}/messages`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: recipient,
        type: 'template',
        template: {
          name: templateName,
          language: { code: templateLanguage },
        },
      }),
      signal: AbortSignal.timeout(10000),
    })

    if (!response.ok) {
      console.error('WhatsApp inquiry alert delivery failed')
      return 'failed'
    }
    return 'sent'
  } catch {
    console.error('WhatsApp inquiry alert request failed')
    return 'failed'
  }
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return reply(res, 405, { error: 'Method not allowed.' })
  }

  if (!isAllowedOrigin(req.headers.origin)) {
    return reply(res, 403, { error: 'Request origin not allowed.' })
  }

  const forwardedFor = req.headers['x-forwarded-for']
  const ip = (Array.isArray(forwardedFor) ? forwardedFor[0] : forwardedFor)?.split(',')[0]?.trim() || 'unknown'
  if (isRateLimited(ip)) {
    return reply(res, 429, { error: 'Too many requests. Please call us instead.' })
  }

  const body = req.body && typeof req.body === 'object' ? req.body : {}
  if (cleanText(body.companyWebsite, 200)) {
    return reply(res, 400, { error: 'Unable to process this request.' })
  }

  const name = cleanText(body.name, 100)
  const email = cleanText(body.email, 254)
  const phone = cleanText(body.phone, 30)
  const phoneDigits = phone.replace(/\D/g, '')
  const zipCode = cleanText(body.zipCode, 5)
  const preferredContact = cleanText(body.preferredContact, 20)
  const collectionValue = cleanText(body.collection, 80)
  const collection = collectionValue === 'not-sure'
    ? 'Not sure yet'
    : collectionValue === 'picturized-blinds'
      ? 'Picturized blinds'
      : collectionValue
  const message = cleanText(body.message, 2000)
  const allowedCollections = new Set(['not-sure', 'Not sure yet', 'catalog-request', 'Catalog request', 'picturized-blinds', 'Picturized blinds', ...COLLECTIONS.map((item) => item.name)])
  const consentGiven = body.contactConsent === true || body.contactConsent === 'on'

  if (!name || name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !/^[+\d().\s-]{7,30}$/.test(phone) || phoneDigits.length < 7 || phoneDigits.length > 15 || !/^\d{5}$/.test(zipCode) || !['phone', 'whatsapp'].includes(preferredContact) || !allowedCollections.has(collectionValue) || message.length > 2000 || !consentGiven) {
    return reply(res, 400, { error: 'Please check your name, email, phone, ZIP code, collection and contact consent.' })
  }


  const whatsappAlert = await sendWhatsAppAlert()
  return reply(res, 200, {
    ok: true,
    whatsappAlert,
  })
}