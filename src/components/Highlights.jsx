import React from 'react'
import { Container, SectionTitle, Card, Icon } from './common'

const Highlights = () => {
  const benefits = [
    {
      icon: 'consultation',
      title: 'Free Consultation',
      description: 'Work directly with experts who match shades to your room lighting, layout, and lifestyle.',
    },
    {
      icon: 'ruler',
      title: 'Custom Measurements',
      description: 'Every window is measured carefully for a perfect fit, smooth movement, and long-term durability.',
    },
    {
      icon: 'palette',
      title: '1000+ Styles',
      description: 'From subtle woven textures to statement finishes, discover combinations tailored to your taste.',
    },
    {
      icon: 'spark',
      title: 'Affordable Premium Options',
      description: 'Luxury quality is available at multiple price points without compromising elegance.',
    },
    {
      icon: 'install',
      title: 'Professional Installation',
      description: 'Experienced crews deliver clean installs with precision alignment and polished final detailing.',
    },
    {
      icon: 'map',
      title: 'Serving Multiple States',
      description: 'Fast, reliable service for homeowners throughout Delaware, Pennsylvania, Maryland, and New Jersey.',
    },
  ]

  return (
    <section className="bg-[#f5f8fc] py-20 md:py-28">
      <Container>
        <SectionTitle
          title="Built on Craft, Service, and Trust"
          subtitle="A premium process designed to make your window transformation effortless from consultation to final installation."
          eyebrow="Highlights"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group bg-white/95">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                <Icon name={benefit.icon} className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-slate-900">{benefit.title}</h3>
              <p className="leading-relaxed text-slate-600">{benefit.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-4">
          {[
            { number: '120+', label: 'Projects Completed' },
            { number: '1000+', label: 'Styles & Colors' },
            { number: '3', label: 'Years Experience' },
            { number: '100%', label: 'Satisfaction Guarantee' },
          ].map((stat, index) => (
            <div key={index} className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-soft">
              <p className="font-display text-3xl text-slate-900 md:text-4xl">{stat.number}</p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.08em] text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Highlights
