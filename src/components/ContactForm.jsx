import React, { useState } from 'react'
import { Container } from './common'
import { BUSINESS, getWhatsAppCatalogUrl } from '../business'
import { COLLECTIONS } from '../assets/siteImages'

const ContactForm = () => {
  const formEndpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT
  const [formStatus, setFormStatus] = useState('idle')

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!formEndpoint) return

    setFormStatus('submitting')
    const form = event.currentTarget
    const fields = Object.fromEntries(new FormData(form).entries())

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(fields),
      })

      if (!response.ok) throw new Error('Inquiry delivery failed')
      form.reset()
      setFormStatus('submitted')
    } catch {
      setFormStatus('error')
    }
  }

  return (
    <section id="contact" className="section section--bronze contact-section">
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
        <form className="inquiry-form" onSubmit={handleSubmit}>
          <fieldset disabled={!formEndpoint || formStatus === 'submitting'}>
            <legend>Prefer to send a project inquiry?</legend>
            <div className="inquiry-fields">
              <label>
                Name
                <input autoComplete="name" name="name" required />
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
                <select name="collection" defaultValue="not-sure">
                  <option value="not-sure">Not sure yet</option>
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
          {!formEndpoint && <p className="form-notice">Online inquiries are not connected yet. Please call or start a WhatsApp conversation above.</p>}
          {formStatus === 'submitted' && <p className="form-status" role="status">Your inquiry was accepted. The team can follow up using the contact details you provided.</p>}
          {formStatus === 'error' && <p className="form-error" role="alert">We could not send that inquiry. Please call or message us using the contact links above.</p>}
        </form>
      </Container>
    </section>
  )
}

export default ContactForm
