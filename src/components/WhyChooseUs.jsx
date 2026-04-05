import React from 'react'
import { Container, SectionTitle, Card, Icon } from './common'

const WhyChooseUs = () => {
  const reasons = [
    {
      number: '01',
      title: 'Personal Service',
      description: 'You get direct support from an experienced consultant, not a one-size-fits-all sales process.',
      icon: 'consultation',
    },
    {
      number: '02',
      title: 'Custom Fitting',
      description: 'Precise measurements and careful planning ensure each shade sits perfectly and performs beautifully.',
      icon: 'ruler',
    },
    {
      number: '03',
      title: 'Design Guidance',
      description: 'We help you select colors, openness levels, and materials that truly match your home.',
      icon: 'palette',
    },
    {
      number: '04',
      title: 'Smooth Installation',
      description: 'Our installers work cleanly, efficiently, and with detail-focused finishing from start to final walkthrough.',
      icon: 'install',
    },
  ]

  return (
    <section id="why-us" className="relative overflow-hidden bg-[#f8fbff] py-20 md:py-28">
      <div className="absolute -right-28 top-0 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <Container>
        <SectionTitle
          title="Why Homeowners Choose S&P Elegant Blinds"
          subtitle="Premium products matter. The difference is in execution, communication, and the care behind every detail."
          eyebrow="Why Choose Us"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <Card key={index} className="group flex gap-4 bg-white p-7">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon name={reason.icon} className="h-5 w-5" />
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-[0.14em] text-slate-400">{reason.number}</p>
                <h3 className="mt-1 text-2xl font-semibold text-slate-900">{reason.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{reason.description}</p>
                <div className="mt-4 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { value: '120+', label: 'Installations Completed' },
              { value: '4.9 / 5', label: 'Average Customer Rating' },
              { value: '24h', label: 'Typical Quote Response' },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl bg-slate-50 p-5 text-center">
                <p className="font-display text-4xl text-slate-900">{item.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default WhyChooseUs
