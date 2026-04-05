import React, { useEffect, useState } from 'react'
import { Container, SectionTitle, Button, Icon } from './common'
import { featuredProjectImages, featuredShowcaseVideos } from '../assets/galleryImages'

const FeaturedProject = () => {
  const [activeVideo, setActiveVideo] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveVideo((prev) => (prev + 1) % featuredShowcaseVideos.length)
    }, 5500)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <SectionTitle
          title="Featured Project"
          subtitle="A premium living room installation blending modern shade control with timeless interior elegance."
          centered={false}
          eyebrow="Luxury Showcase"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-100 to-sky-50 p-6 shadow-premium">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={featuredProjectImages[0]}
                alt="Featured premium living room blinds setup"
                className="col-span-2 aspect-[16/10] w-full rounded-2xl object-cover ring-1 ring-slate-200"
                loading="lazy"
              />
              <img
                src={featuredProjectImages[1]}
                alt="Detail view of custom blinds installation"
                className="aspect-square w-full rounded-2xl object-cover ring-1 ring-slate-200"
                loading="lazy"
              />
              <img
                src={featuredProjectImages[2]}
                alt="Another angle of the featured window shades"
                className="aspect-square w-full rounded-2xl object-cover ring-1 ring-slate-200"
                loading="lazy"
              />
            </div>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600 shadow-soft">
              <Icon name="window" className="h-4 w-4 text-primary" />
              Premium Living Room Blinds Setup
            </div>
          </div>

          <div>
            <h3 className="font-display text-3xl text-slate-900 sm:text-4xl">Modern Comfort, Elevated by Precision</h3>

            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              This featured home in Wilmington combines motorized roller shades with layered zebra blinds to create soft daylight,
              privacy on demand, and a minimal luxury aesthetic that feels custom in every detail.
            </p>

            <div className="mt-7 space-y-4">
              {[
                'Tailored fitting for oversized living room windows',
                'Quiet motorized operation with remote scheduling',
                'Fabric palette selected to complement warm neutral interiors',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <Icon name="check" className="mt-0.5 h-4 w-4 text-primary" />
                  <p className="text-sm font-medium text-slate-700">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="primary" size="md" href="#gallery">
                View Gallery
              </Button>
              <Button variant="secondary" size="md" href="#contact">
                Start Your Project
              </Button>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 p-3 shadow-soft">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-100">
                <Icon name="spark" className="h-3.5 w-3.5 text-primary" />
                Video Showcase
              </div>
              <video
                key={featuredShowcaseVideos[activeVideo].src}
                src={featuredShowcaseVideos[activeVideo].src}
                poster={featuredShowcaseVideos[activeVideo].poster}
                className="aspect-video w-full rounded-xl object-cover"
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="metadata"
              />
              <div className="mt-3 flex items-center justify-between gap-3">
                <p className="text-sm text-slate-300">{featuredShowcaseVideos[activeVideo].title}</p>
                <div className="flex items-center gap-1.5">
                  {featuredShowcaseVideos.map((item, index) => (
                    <button
                      key={item.src}
                      type="button"
                      onClick={() => setActiveVideo(index)}
                      className={`h-2 rounded-full transition-all ${index === activeVideo ? 'w-5 bg-primary' : 'w-2 bg-slate-500 hover:bg-slate-400'}`}
                      aria-label={`Show video ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FeaturedProject
