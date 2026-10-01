import React, { useEffect, useRef, useState } from 'react'
import { Container } from './common'
import { INSTALLATIONS } from '../assets/siteImages'

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const activeIndexRef = useRef(activeIndex)
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)
  const triggerRef = useRef(null)
  activeIndexRef.current = activeIndex

  useEffect(() => {
    if (activeIndex === null) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      const current = activeIndexRef.current
      if (event.key === 'Escape') setActiveIndex(null)
      if (event.key === 'ArrowLeft') setActiveIndex((current - 1 + INSTALLATIONS.length) % INSTALLATIONS.length)
      if (event.key === 'ArrowRight') setActiveIndex((current + 1) % INSTALLATIONS.length)
      if (event.key === 'Tab') {
        const buttons = dialogRef.current?.querySelectorAll('button:not([disabled])')
        if (!buttons?.length) return
        const first = buttons[0]
        const last = buttons[buttons.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      if (activeIndexRef.current === null) triggerRef.current?.focus()
    }
  }, [activeIndex !== null])

  return (
    <section id="work" className="section section--ink">
      <Container>
        <div className="section-heading section-heading--light">
          <p className="eyebrow">Selected installations</p>
          <h2>Made for real rooms and real routines.</h2>
          <p>A selection of custom window treatments in homes, photographed as installed.</p>
        </div>
        <div className="work-grid">
          {INSTALLATIONS.map((item, index) => (
            <button
              className="work-image-button"
              key={item.id}
              type="button"
              onClick={(event) => {
                triggerRef.current = event.currentTarget
                setActiveIndex(index)
              }}
              aria-label={`View installation ${index + 1}: ${item.alt}`}
            >
              <img src={item.publicPath} srcSet={item.srcSet} sizes={item.sizes} alt={item.alt} width={item.width} height={item.height} loading="lazy" />
              <span className="work-image-zoom" aria-hidden="true">View image</span>
            </button>
          ))}
        </div>
      </Container>

      {activeIndex !== null && (
        <div
          className="lightbox-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveIndex(null)
          }}
        >
          <div className="lightbox-dialog" role="dialog" aria-modal="true" aria-label="Installation image" ref={dialogRef}>
            <button className="lightbox-close" type="button" onClick={() => setActiveIndex(null)} ref={closeButtonRef} aria-label="Close image">×</button>
            <button className="lightbox-arrow lightbox-arrow--previous" type="button" onClick={() => setActiveIndex((activeIndex - 1 + INSTALLATIONS.length) % INSTALLATIONS.length)} aria-label="Previous image">‹</button>
            <figure className="lightbox-figure">
              <img src={INSTALLATIONS[activeIndex].publicPath} alt={INSTALLATIONS[activeIndex].alt} width={INSTALLATIONS[activeIndex].width} height={INSTALLATIONS[activeIndex].height} />
              <figcaption>{INSTALLATIONS[activeIndex].alt}</figcaption>
            </figure>
            <button className="lightbox-arrow lightbox-arrow--next" type="button" onClick={() => setActiveIndex((activeIndex + 1) % INSTALLATIONS.length)} aria-label="Next image">›</button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
