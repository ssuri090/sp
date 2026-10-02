import React from 'react'
import { Container } from './common'
import { BUSINESS } from '../business'

const FeaturedProject = () => {
  return (
    <section id="motorization" className="section section--stone motorization-section">
      <Container className="motorization-layout">
        <div className="motorization-copy">
          <p className="eyebrow">A considered extra</p>
          <h2>Motorized shades, made to fit your routine.</h2>
          <p>Motorized options can make everyday adjustments easier. Available controls and compatibility depend on the shade collection and selected product.</p>
          <p>Tell us which windows you have in mind and we'll confirm what options are available for them.</p>
          <a className="text-link" href={BUSINESS.phoneHref}>
            Call about motorization <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="motorization-image">
          <p>Motorized options vary by collection and product. Call to confirm what is available for your windows.</p>
          <a className="button button--primary button--md" href={BUSINESS.phoneHref}>Call {BUSINESS.phoneDisplay}</a>
        </div>
      </Container>
    </section>
  )
}

export default FeaturedProject
