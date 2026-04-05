import React, { useState } from 'react'
import { Container, SectionTitle, Button, Icon } from './common'

const ContactForm = () => {
  const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT
  const fallbackEndpoint = 'https://formsubmit.co/ajax/info@spelegantblinds.com'
  const submitEndpoint = formEndpoint || fallbackEndpoint

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    requirement: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    if (submitError) {
      setSubmitError('')
    }

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setIsSubmitting(true)

    try {
      const response = await fetch(submitEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          city: formData.city,
          requirement: formData.requirement,
          _subject: 'New Quote Request - S&P Elegant Blinds',
          _captcha: 'false',
        }),
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      setSubmitted(true)
      setFormData({ name: '', phone: '', city: '', requirement: '' })

      window.setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } catch (error) {
      setSubmitError('We could not submit your request right now. Please call us at (302) 555-0123.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const cities = [
    'Select your city',
    'Wilmington, DE',
    'Dover, DE',
    'Philadelphia, PA',
    'Pittsburgh, PA',
    'Baltimore, MD',
    'Annapolis, MD',
    'Newark, NJ',
    'Jersey City, NJ',
    'Other',
  ]

  return (
    <section id="contact" className="relative overflow-hidden bg-[linear-gradient(155deg,#f5fbff_0%,#ffffff_52%,#f7f9fc_100%)] py-20 md:py-28">
      <div className="absolute -left-28 bottom-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-sky-100/70 blur-3xl" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle
              title="Request Your Free Quote"
              subtitle="Tell us what you need and we will contact you quickly with personalized recommendations and pricing."
              centered={false}
              eyebrow="Contact"
              className="mb-0"
            />
            
            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-primary shadow-soft">
                  <Icon name="call" className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-slate-900">Call Us Today</h4>
                  <p className="text-slate-700">(302) 555-0123</p>
                  <p className="text-sm text-slate-500">Mon-Fri, 9 AM-6 PM</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-primary shadow-soft">
                  <Icon name="map" className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-slate-900">Service Areas</h4>
                  <p className="text-slate-700">Delaware, Pennsylvania, Maryland, New Jersey</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-primary shadow-soft">
                  <Icon name="check" className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-slate-900">What Is Included</h4>
                  <p className="text-slate-700">Free measurement, design consultation, and installation estimate.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-sky-100 bg-white p-6 shadow-soft">
              <p className="font-medium text-slate-700">
                <span className="font-semibold text-slate-900">100% Satisfaction Commitment:</span> your finished look should feel exactly right in your home.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-premium">
            <h3 className="font-display text-3xl text-slate-900">Request Free Quote</h3>
            <p className="mt-2 text-sm text-slate-500">No obligation. Fast response from a local specialist.</p>

            {submitted ? (
              <div className="mt-6 rounded-2xl border-2 border-emerald-100 bg-emerald-50 p-6 text-center">
                <h4 className="text-xl font-semibold text-emerald-700">Thank You</h4>
                <p className="mt-2 text-emerald-700">
                  Your request is in. Our team will call you soon to schedule your consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    placeholder="John Doe"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    placeholder="(302) 555-0123"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">City *</label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                  >
                    {cities.map((city, index) => (
                      <option key={index} value={index === 0 ? '' : city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Requirement *</label>
                  <select
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                  >
                    <option value="">Select an option...</option>
                    <option value="zebra">Zebra Blinds</option>
                    <option value="roller">Roller Shades</option>
                    <option value="roman">Roman Blinds</option>
                    <option value="vertical">Vertical Blinds</option>
                    <option value="motorized">Motorized Blinds</option>
                    <option value="solar">Solar Shades</option>
                    <option value="combination">Combination / Not Sure</option>
                  </select>
                </div>

                <Button 
                  type="submit"
                  variant="primary" 
                  size="lg"
                  className="mt-6 w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Request Free Quote'}
                </Button>

                {submitError ? (
                  <p className="rounded-xl border border-rose-100 bg-rose-50 px-4 py-3 text-center text-sm font-medium text-rose-700" role="alert">
                    {submitError}
                  </p>
                ) : null}

                <p className="text-center text-xs text-slate-500">
                  By submitting this form you agree to be contacted about your request.
                </p>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ContactForm
