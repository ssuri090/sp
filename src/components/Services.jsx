import React from 'react'
import { Container } from './common'
import { getWhatsAppCatalogUrl } from '../business'
import { COLLECTIONS, SITE_IMAGES } from '../assets/siteImages'

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
            const photo = SITE_IMAGES[collection.id]

            return (
              <article className={`collection-item collection-item--${index + 1}`} key={collection.id}>
                <a
                  className="collection-image-link"
                  href={getWhatsAppCatalogUrl(collection.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ask about ${collection.name} on WhatsApp`}
                >
                  <img
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
                <div className="collection-copy">
                  <h3>{collection.name}</h3>
                  <p>{collection.benefit}</p>
                  <a
                    className="text-link"
                    href={getWhatsAppCatalogUrl(collection.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ask about this collection <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            )
          })}
        </div>
        <p className="collection-note">Fabrics, light control and motorization options vary by collection. Ask us about a specific window or room.</p>
      </Container>
    </section>
  )
}

export default Services
