import React, { useEffect, useState } from 'react'
import { Container, Button, Badge, Icon } from './common'
import { heroSlideshowImages } from '../assets/galleryImages'

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlideshowImages.length)
    }, 3000)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-28 sm:pt-32 md:pb-28">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_right,_rgba(77,182,229,0.20),_transparent_45%),linear-gradient(160deg,#f9fcff_0%,#f6f8fc_45%,#ffffff_100%)]" />
      <div className="absolute -left-28 top-20 -z-10 h-72 w-72 rounded-full bg-sky-100 blur-3xl" />
      <div className="absolute bottom-8 right-6 -z-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="animate-fade-up">
            <Badge className="mb-5">Luxury Window Styling for Modern Homes</Badge>

            <h1 className="font-display text-4xl leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Your Home Deserves
              <span className="block text-primary">Elegant Light, Perfect Privacy.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              S&amp;P Elegant Blinds creates custom blinds and shades with designer-level detail, precise measurement,
              and clean professional installation. Trusted by homeowners across DE, PA, MD, and NJ.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="primary" size="lg" href="#contact">
                Get Free Quote
                <Icon name="arrowRight" className="h-4 w-4" />
              </Button>
              <Button variant="secondary" size="lg" href="tel:+13025550123">
                Book Consultation
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-slate-700">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-soft ring-1 ring-slate-200">
                <Icon name="ruler" className="h-4 w-4 text-primary" />
                Free Measurement
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-soft ring-1 ring-slate-200">
                <Icon name="install" className="h-4 w-4 text-primary" />
                Professional Installation
              </div>
            </div>

            <div className="mt-8 inline-flex flex-wrap items-center gap-2 rounded-2xl border border-sky-100 bg-white/80 p-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
              <span className="rounded-xl bg-sky-50 px-3 py-1 text-primary">DE</span>
              <span className="rounded-xl bg-sky-50 px-3 py-1 text-primary">PA</span>
              <span className="rounded-xl bg-sky-50 px-3 py-1 text-primary">MD</span>
              <span className="rounded-xl bg-sky-50 px-3 py-1 text-primary">NJ</span>
            </div>
          </div>

          <div className="animate-fade-up-delayed">
            <div className="relative rounded-[2rem] border border-slate-200/80 bg-white p-4 shadow-premium">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-slate-100 via-white to-sky-50 p-6">
                <div className="mb-5 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  <span>Featured Space</span>
                  <span>Premium Install</span>
                </div>

                <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200/80">
                  <img
                    src={heroSlideshowImages[activeSlide]}
                    alt="Custom window blinds installation by S&P Elegant Blinds"
                    className="aspect-[4/3] w-full object-cover transition-opacity duration-500"
                    loading="eager"
                  />
                </div>

                <div className="mt-3 flex items-center justify-center gap-2">
                  {heroSlideshowImages.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      className={`h-2.5 rounded-full transition-all ${index === activeSlide ? 'w-6 bg-primary' : 'w-2.5 bg-slate-300 hover:bg-slate-400'}`}
                      aria-label={`Show featured image ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="mt-5 rounded-2xl bg-slate-900 px-4 py-3 text-sm text-slate-100">
                  Motorized zebra blinds with daylight-balanced layering for a refined, clean look.
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 rounded-2xl bg-white px-4 py-3 shadow-soft ring-1 ring-slate-200">
                <p className="text-xs uppercase tracking-[0.1em] text-slate-500">Average Quote Response</p>
                <p className="font-display text-2xl text-slate-900">&lt; 24 Hours</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
