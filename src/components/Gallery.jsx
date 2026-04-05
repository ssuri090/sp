import React, { useEffect, useRef } from 'react'
import { Container, SectionTitle, Button } from './common'
import { galleryItems, galleryVideos } from '../assets/galleryImages'

const Gallery = () => {
  const videoRefs = useRef({})

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target

          if (entry.isIntersecting) {
            const playPromise = video.play()
            if (playPromise && typeof playPromise.catch === 'function') {
              playPromise.catch(() => {})
            }
            return
          }

          video.pause()
        })
      },
      {
        threshold: 0.65,
      },
    )

    Object.values(videoRefs.current).forEach((video) => {
      if (video) {
        observer.observe(video)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section id="gallery" className="bg-slate-950 py-20 text-white md:py-28">
      <Container>
        <SectionTitle
          title="Installation Gallery"
          subtitle="Real photos and videos from completed projects to show finish quality, fit, and operation."
          eyebrow="Gallery"
          className="text-white [&_h2]:text-white [&_p]:text-slate-300"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div key={item.id} className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950">
                <img
                  src={item.image}
                  alt={`${item.title} installation`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading={index < 2 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-200">
                  Project {index + 1}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                {item.location ? <p className="mt-1 text-sm text-slate-300">{item.location}</p> : null}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">Video Highlights</p>
          <p className="mb-6 text-sm text-slate-400">Videos automatically play when in view and pause when you scroll past them.</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {galleryVideos.map((item, index) => (
              <div key={item.id} className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 p-3 shadow-soft">
                <video
                  ref={(node) => {
                    if (node) {
                      videoRefs.current[item.id] = node
                    }
                  }}
                  src={item.src}
                  poster={item.poster}
                  className="aspect-video w-full rounded-xl object-cover"
                  muted
                  loop
                  playsInline
                  controls
                  preload={index === 0 ? 'metadata' : 'none'}
                />
                <p className="mt-3 text-sm font-medium text-slate-200">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="mb-6 text-slate-300">Want to see the best options for your home style and lighting?</p>
          <Button variant="primary" size="md" href="#contact">
            Schedule Your Free Consultation
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default Gallery
