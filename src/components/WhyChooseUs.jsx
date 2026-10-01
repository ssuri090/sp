import React from 'react'
import { Container } from './common'
import { BUSINESS } from '../business'

const WhyChooseUs = () => {
  return (
    <section id="faq" className="section section--paper">
      <Container>
        <div className="service-area-block">
          <div>
            <p className="eyebrow">Service area</p>
            <h2>Serving select ZIP codes across three states.</h2>
          </div>
          <div className="service-area-copy">
            <p>Based in Middletown, Delaware, we serve the ZIP codes below.</p>
            <p>If your ZIP code isn't listed, contact us to ask about your location.</p>
          </div>
          <div className="service-area-groups">
            {BUSINESS.serviceAreas.map((area) => (
              <div className="service-area-group" key={area.abbreviation}>
                <h3>{area.state}</h3>
                <p>{area.zipCodes.join(', ')}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="local-services">
          <div className="local-services__heading">
            <p className="eyebrow">Local service</p>
            <h2>Window treatments for your area.</h2>
          </div>
          <div className="local-service-grid">
            {BUSINESS.localServiceAreas.map((area) => (
              <article className="local-service-item" key={`${area.city}-${area.state}`}>
                <h3>{area.city}, {area.state}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
          <div className="project-type-grid">
            <article>
              <h3>Blinds for new construction homes</h3>
              <p>Planning a new build? Share the window schedule and room plans so product options can be discussed before final measurements are confirmed.</p>
            </article>
            <article>
              <h3>Whole house window treatments</h3>
              <p>Coordinate a look throughout the home while choosing light control and privacy to suit each room.</p>
            </article>
          </div>
        </div>

        <div className="faq-layout">
          <div className="faq-intro">
            <p className="eyebrow">Good to know</p>
            <h2>Questions, before you choose.</h2>
          </div>
          <div className="faq-list">
            <details>
              <summary>How do measurements and estimates work?</summary>
              <p>We'll discuss your windows and preferences, then confirm measurements and product configuration before the quote is finalized.</p>
            </details>
            <details>
              <summary>Can I choose between light filtering and room darkening?</summary>
              <p>Light control depends on the collection and fabric. Tell us how you use the room and we'll help you compare available options.</p>
            </details>
            <details>
              <summary>Can I add motorization?</summary>
              <p>Motorized options are available for some products. Controls and compatibility vary, so ask us to confirm for the collection you're considering.</p>
            </details>
            <details>
              <summary>What about patio doors or custom printed shades?</summary>
              <p>Patio applications and custom photo printing depend on product compatibility. Share a photo or describe the opening and we'll discuss possible options.</p>
            </details>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default WhyChooseUs
