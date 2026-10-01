import React from 'react'
import { Container } from './common'
import { getWhatsAppCatalogUrl } from '../business'
import { SITE_IMAGES } from '../assets/siteImages'

const FeaturedProject = () => {
  return (
    <section id="motorization" className="section section--stone motorization-section">
      <Container className="motorization-layout">
        <div className="motorization-copy">
          <p className="eyebrow">A considered extra</p>
          <h2>Motorized shades, made to fit your routine.</h2>
          <p>Motorized options can make everyday adjustments easier. Available controls and compatibility depend on the shade collection and selected product.</p>
          <p>Tell us which windows you have in mind and we'll confirm what options are available for them.</p>
          <a className="text-link" href={getWhatsAppCatalogUrl('motorized options')} target="_blank" rel="noopener noreferrer">
            Ask about motorization <span aria-hidden="true">↗</span>
          </a>
        </div>
        <figure className="motorization-image">
          <img src={SITE_IMAGES.motorization.publicPath} srcSet={SITE_IMAGES.motorization.srcSet} sizes={SITE_IMAGES.motorization.sizes} alt={SITE_IMAGES.motorization.alt} width={SITE_IMAGES.motorization.width} height={SITE_IMAGES.motorization.height} loading="lazy" />
          <figcaption>Product and control options vary by collection.</figcaption>
        </figure>
      </Container>
    </section>
  )
}

export default FeaturedProject
