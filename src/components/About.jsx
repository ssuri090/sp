import React from 'react'
import { Container } from './common'
import { BUSINESS } from '../business'

const About = () => (
  <section id="about" className="section section--paper about-section">
    <Container className="about-layout">
      <div>
        <p className="eyebrow">About S&amp;P</p>
        <h2>Personal guidance, from selection to installation.</h2>
      </div>
      <div className="about-copy">
        <p>{BUSINESS.name} is based in Middletown, Delaware, and serves selected ZIP codes in Delaware, Pennsylvania and Maryland.</p>
        <p>We help homeowners compare window-treatment options for each room, confirm measurements and selections, prepare a quote, and arrange installation after approval.</p>
        <a className="text-link" href={BUSINESS.phoneHref}>Call to discuss your project <span aria-hidden="true">→</span></a>
      </div>
    </Container>
  </section>
)

export default About