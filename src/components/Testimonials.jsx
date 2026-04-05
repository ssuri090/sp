import React from 'react'
import { Container, SectionTitle, Card, Icon } from './common'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      title: 'Homeowner, Wilmington, DE',
      quote:
        'S&P Elegant Blinds transformed our living room beautifully. The consultant understood exactly the look we wanted, and installation was precise and clean.',
    },
    {
      name: 'David Chen',
      title: 'Business Owner, Philadelphia, PA',
      quote:
        'From quote to final install, everything felt premium and professional. The motorized blinds are smooth, quiet, and fit our large windows perfectly.',
    },
    {
      name: 'Emily Richardson',
      title: 'Interior Designer, Baltimore, MD',
      quote:
        'I recommend S&P to my design clients because they execute at a high level. Their product quality, communication, and finish detail are consistently excellent.',
    },
  ]

  return (
    <section id="testimonials" className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="absolute left-8 top-12 h-80 w-80 rounded-full bg-sky-100/70 blur-3xl" />

      <Container>
        <SectionTitle
          title="What Clients Are Saying"
          subtitle="Three of many reviews from homeowners who trusted us with their window transformation."
          eyebrow="Testimonials"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative z-10 bg-white">
              <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-primary">
                <Icon name="quote" className="h-4 w-4" />
              </div>

              <p className="mb-6 leading-relaxed text-slate-700">{testimonial.quote}</p>

              <div className="border-t border-slate-200 pt-5">
                <p className="text-lg font-semibold text-slate-900">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.title}</p>
                <div>
                  <p className="mt-2 text-sm font-semibold text-primary">Verified Customer</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 rounded-2xl border border-sky-100 bg-sky-50 p-7 md:grid-cols-3">
          <div className="text-center md:text-left">
            <p className="font-display text-4xl text-slate-900">4.9/5</p>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">Average Rating</p>
          </div>
          <div className="text-center md:text-left">
            <p className="font-display text-4xl text-slate-900">120+</p>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">Installations</p>
          </div>
          <div className="text-center md:text-left">
            <p className="font-display text-4xl text-slate-900">98%</p>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">Referral Rate</p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Testimonials
