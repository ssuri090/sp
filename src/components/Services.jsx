import React, { useEffect, useState } from 'react'
import { Container } from './common'
import { getWhatsAppCatalogUrl } from '../business'
import { COLLECTIONS, SITE_IMAGES } from '../assets/siteImages'

const CollectionSlideshow = ({ collection }) => {
  const slides = (collection.imageIds || [collection.imageId])
    .map((imageId) => SITE_IMAGES[imageId])
    .filter(Boolean)
  const [activeSlide, setActiveSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const photo = slides[activeSlide]

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handlePreferenceChange = (event) => setIsPlaying(!event.matches)
    preference.addEventListener('change', handlePreferenceChange)
    return () => preference.removeEventListener('change', handlePreferenceChange)
  }, [])

  useEffect(() => {
    if (!isPlaying || slides.length < 2) return undefined
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, 7000)
    return () => window.clearInterval(timer)
  }, [isPlaying, slides.length])

  if (!photo) return null

  return (
    <div className="collection-card-media">
      <a className="collection-image-link" href={`/collections/${collection.slug}`} aria-label={`View ${collection.name} collection`}>
        <img
          key={photo.id}
          src={photo.publicPath}
          srcSet={photo.srcSet}
          sizes={photo.sizes}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          loading="lazy"
          style={{ objectPosition: photo.objectPosition }}
        />
      </a>
    </div>
  )
}

const Services = () => {
  return (
    <section id="collections" className="section section--paper">
      <Container>
        <div className="section-heading">
          <p className="eyebrow">Find your fit</p>
          <h2>Collections for the way you live</h2>
          <p>Explore different ways to shape daylight, privacy and the feeling of a room.</p>
        </div>

        <div className="collection-grid">
          {COLLECTIONS.map((collection, index) => {
            return (
              <article className={`collection-item collection-item--${index + 1}`} key={collection.id}>
                {collection.imageIds?.length ? (
                  <CollectionSlideshow collection={collection} />
                ) : (
                  <a className="collection-image-link collection-image-link--missing" href={`/collections/${collection.slug}`} aria-label={`View ${collection.name} collection`}>
                    <span className="collection-photo-note">Product-matched photography is being prepared</span>
                  </a>
                )}
                <div className="collection-copy">
                  <h3>{collection.name}</h3>
                  <p>{collection.benefit}</p>
                  <a className="text-link" href={`/collections/${collection.slug}`}>
                    View Collection <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            )
          })}
        </div>
        <p className="collection-note">Fabrics, light control and motorization options vary by collection. Ask us about a specific window or room.</p>
        <div className="catalog-request">
          <div>
            <p className="eyebrow">Browse at your own pace</p>
            <h3>Would you like to see the catalog?</h3>
            <p>Request available styles and options on WhatsApp, or send a website inquiry and choose “Catalog request.”</p>
          </div>
          <div className="catalog-request__actions">
            <a className="button button--whatsapp" href={getWhatsAppCatalogUrl()} target="_blank" rel="noopener noreferrer">
              Request the Catalog on WhatsApp
            </a>
            <a className="button button--secondary" href="/?collection=catalog-request#contact">
              Request by Website Message
            </a>
          </div>
          <p className="catalog-request__note">WhatsApp opens a prepared message. Press Send to ask us for the catalog.</p>
        </div>
      </Container>
    </section>
  )
}

export default Services
