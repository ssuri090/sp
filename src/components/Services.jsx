import React from 'react'
import { Container, SectionTitle, Card, Icon, Button } from './common'

const Services = () => {
  const services = [
    {
      icon: 'window',
      title: 'Zebra Blinds',
      description: 'Layered fabric bands that shift from open light to private comfort in one elegant motion.',
    },
    {
      icon: 'roller',
      title: 'Roller Shades',
      description: 'Sleek, minimal profiles with premium textures designed for contemporary interiors.',
    },
    {
      icon: 'roman',
      title: 'Roman Blinds',
      description: 'Soft folded luxury with rich fabrics that bring warmth and refinement to each room.',
    },
    {
      icon: 'vertical',
      title: 'Vertical Blinds',
      description: 'A practical upscale solution for large windows and patio doors with smooth operation.',
    },
    {
      icon: 'motorized',
      title: 'Motorized Blinds',
      description: 'Smart, whisper-quiet control using remote, app, or schedules for daily ease.',
    },
    {
      icon: 'solar',
      title: 'Solar Shades',
      description: 'Filter UV and glare while preserving outside views and maintaining a clean modern look.',
    },
  ]

  return (
    <section id="services" className="bg-white py-20 md:py-28">
      <Container>
        <SectionTitle
          title="Premium Blinds and Shades Services"
          subtitle="Every product is custom-fit, professionally installed, and selected to match your interior vision."
          eyebrow="Services"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group relative overflow-hidden">
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-sky-100/40 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white transition-colors duration-300 group-hover:bg-primary">
                <Icon name={service.icon} className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="leading-relaxed text-slate-600">{service.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-sky-100 bg-gradient-to-r from-sky-50 to-white p-8 text-center shadow-soft">
          <p className="mx-auto max-w-2xl text-slate-700">
            Need help choosing between zebra, roller, or motorized systems? Book a free design consultation and we will recommend the right fit for your home and budget.
          </p>
          <Button variant="primary" size="md" href="#contact" className="mt-6">
            Schedule Free Consultation
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default Services
