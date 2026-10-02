import React, { useEffect, useState } from 'react'
import { Container } from './common'
import { BUSINESS } from '../business'
import { SITE_IMAGES } from '../assets/siteImages'

const PicturizedSlideshow = () => {
  const slides = [SITE_IMAGES.customPrintBeach, SITE_IMAGES.customPrintFloral]
  const [activeSlide, setActiveSlide] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const photo = slides[activeSlide]

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handlePreferenceChange = (event) => setReduceMotion(event.matches)
    preference.addEventListener('change', handlePreferenceChange)
    return () => preference.removeEventListener('change', handlePreferenceChange)
  }, [])

  useEffect(() => {
    if (reduceMotion) return undefined
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % slides.length), 7000)
    return () => window.clearInterval(timer)
  }, [reduceMotion, slides.length])

  return (
    <figure className="picturized-slideshow">
      <img key={photo.id} src={photo.publicPath} srcSet={photo.srcSet} sizes="(max-width: 767px) 100vw, 50vw" alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" />
      <figcaption>{photo.alt}</figcaption>
    </figure>
  )
}

const SpecialtySolutions = () => (
  <section id="special-applications" className="section section--stone specialty-section">
    <Container>
      <div className="section-heading">
        <p className="eyebrow">Special applications</p>
        <h2>Solutions for doors and personal prints.</h2>
        <p>Ask us to confirm which options are available for your opening and chosen shade.</p>
      </div>
      <div className="specialty-grid">
        <article className="specialty-item">
          <figure>
            <img src={SITE_IMAGES.patioEntry.publicPath} srcSet={SITE_IMAGES.patioEntry.srcSet} sizes="(max-width: 767px) 100vw, 50vw" alt={SITE_IMAGES.patioEntry.alt} width={SITE_IMAGES.patioEntry.width} height={SITE_IMAGES.patioEntry.height} loading="lazy" />
          </figure>
          <div>
            <p className="eyebrow">Patio and entry doors</p>
            <h3>Shade for glazed doors and sidelights.</h3>
            <p>Door hardware, clearance and shade construction affect what will fit. Share a photo of the opening so we can discuss suitable options.</p>
            <a className="text-link" href={BUSINESS.phoneHref}>Call about patio solutions <span aria-hidden="true">→</span></a>
          </div>
        </article>
        <article className="specialty-item specialty-item--reverse">
          <PicturizedSlideshow />
          <div>
            <p className="eyebrow">Picturized blinds</p>
            <h3>Make a favorite image part of the room.</h3>
            <p>This approved example shows a beach photo printed on a zebra-style shade. Image rights, print quality and product compatibility need to be confirmed for each project.</p>
            <a className="text-link" href="/?collection=picturized-blinds#contact">Request a Picturized Blinds consultation <span aria-hidden="true">→</span></a>
          </div>
        </article>
      </div>
    </Container>
  </section>
)

export default SpecialtySolutions