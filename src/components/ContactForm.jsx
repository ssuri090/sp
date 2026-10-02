import React, { useEffect, useState } from 'react'
import { Container } from './common'
import { BUSINESS, getWhatsAppCatalogUrl } from '../business'
import { COLLECTIONS } from '../assets/siteImages'

const ContactForm = () => {
  const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formsubmit.co/ajax/info@spelegantblinds.com'
  const alertEndpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT || (import.meta.env.PROD ? '/api/inquiry' : '')
  const requestedCollection = new URLSearchParams(window.location.search).get('collection')
  const normalizedRequestedCollection = requestedCollection === 'picturized-blinds' ? 'Picturized Blinds' : requestedCollection
  const initialCollection = requestedCollection === 'catalog-request'
    ? requestedCollection
    : COLLECTIONS.find((collection) => collection.name === normalizedRequestedCollection)?.name || 'not-sure'
  const [formStatus, setFormStatus] = useState('idle')
  const [submitError, setSubmitError] = useState('')

  useEffect(() => {
    if (window.location.hash !== '#contact') return undefined

    let scrollTimer
    const scrollToForm = () => {
      scrollTimer = window.setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 250)
    }

    if (document.readyState === 'complete') scrollToForm()
    else window.addEventListener('load', scrollToForm, { once: true })

    return () => {
      window.clearTimeout(scrollTimer)
      window.removeEventListener('load', scrollToForm)
    }
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()

    setFormStatus('submitting')
    setSubmitError('')
    const form = event.currentTarget
    const fields = Object.fromEntries(new FormData(form).entries())

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(fields),
      })

      const result = await response.json().catch(() => ({}))
      if (!response.ok || result.success === false || result.success === 'false') {
        throw new Error(result.message || result.error || 'The email provider did not accept your inquiry.')
      }

      if (alertEndpoint) {
        try {
          await fetch(alertEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify(fields),
          })
        } catch (alertError) {
          console.error('WhatsApp inquiry alert request failed')
        }
      }

      form.reset()
      setFormStatus('submitted')
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'We could not send your inquiry. Please call us instead.')
      setFormStatus('error')
    }
  }

  return (
    <section id="contact-section" className="section section--bronze contact-section">
      <Container className="contact-layout">
        <div>
          <p className="eyebrow">Start a conversation</p>
          <h2>Let's find the right fit for your windows.</h2>
          <p className="contact-intro">Tell us about the rooms, the light you want and what you're considering. We'll help you explore the next step.</p>
        </div>
        <div className="contact-options">
          <a className="contact-option" href={BUSINESS.phoneHref}>
            <span className="contact-option__label">Call</span>
            <span className="contact-option__value">{BUSINESS.phoneDisplay}</span>
            <span className="contact-option__action">Speak with S&amp;P <span aria-hidden="true">↗</span></span>
          </a>
          <a className="contact-option contact-option--whatsapp" href={getWhatsAppCatalogUrl()} target="_blank" rel="noopener noreferrer">
            <span className="contact-option__label">WhatsApp</span>
            <span className="contact-option__value">Request the catalog</span>
            <span className="contact-option__action">Opens WhatsApp <span aria-hidden="true">↗</span></span>
          </a>
        </div>
        <p className="contact-footnote">WhatsApp opens a prepared message. Press Send to start the conversation; a click alone does not send a request.</p>
        <form id="contact" className="inquiry-form" onSubmit={handleSubmit}>
          <fieldset disabled={formStatus === 'submitting'}>
            <legend>Prefer to send a project inquiry?</legend>
            <label className="inquiry-honeypot" aria-hidden="true">
              Leave this field blank
              <input autoComplete="off" name="companyWebsite" tabIndex={-1} />
            </label>
            <div className="inquiry-fields">
              <label>
                Name
                <input autoComplete="name" name="name" required />
              </label>
              <label>
                Email address
                <input autoComplete="email" name="email" type="email" required />
              </label>
              <label>
                Preferred contact
                <select name="preferredContact" defaultValue="phone">
                  <option value="phone">Phone call</option>
                  <option value="whatsapp">WhatsApp</option>
                </select>
              </label>
              <label>
                Phone number
                <input autoComplete="tel" name="phone" type="tel" required />
              </label>
              <label>
                ZIP code
                <input autoComplete="postal-code" inputMode="numeric" name="zipCode" pattern="[0-9]{5}" required />
              </label>
              <label>
                Collection
                <select name="collection" defaultValue={initialCollection}>
                  <option value="not-sure">Not sure yet</option>
                  <option value="catalog-request">Catalog request</option>
                  {COLLECTIONS.map((collection) => <option key={collection.id} value={collection.name}>{collection.name}</option>)}
                </select>
              </label>
              <label className="inquiry-fields__message">
                A little about your project <span>(optional)</span>
                <textarea name="message" rows="3" />
              </label>
            </div>
            <label className="inquiry-consent">
              <input type="checkbox" name="contactConsent" required />
              <span>I agree to be contacted about this inquiry.</span>
            </label>
            <button className="button button--primary button--md" type="submit">
              {formStatus === 'submitting' ? 'Sending…' : 'Send inquiry'}
            </button>
          </fieldset>
          {formStatus === 'submitted' && <p className="form-status" role="status">Thank you. Your inquiry has been sent to S&amp;P Elegant Blinds. We’ll contact you using your preferred method.</p>}
          {formStatus === 'error' && <p className="form-error" role="alert">{submitError} Call {BUSINESS.phoneDisplay} if you need to contact us now.</p>}
        </form>
      </Container>
    </section>
  )
}

export default ContactForm
