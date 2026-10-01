import React from 'react'
import { Container } from './common'

const Highlights = () => {
  const steps = [
    ['01', 'Talk through your space', 'Share what matters in each room, from light and privacy to style and budget.'],
    ['02', 'Explore suitable options', 'Compare collections, fabrics and control choices for your windows.'],
    ['03', 'Confirm the details', 'Measurements and product configuration are confirmed before your quote is finalized.'],
    ['04', 'Plan installation', 'Once you approve the quote, arrange the installation details with the team.'],
  ]

  return (
    <section id="process" className="section section--stone">
      <Container>
        <div className="process-heading">
          <p className="eyebrow">How it works</p>
          <h2>Good decisions, made one window at a time.</h2>
          <p>Clear steps from the first conversation to a finished installation.</p>
        </div>
        <div className="process-grid">
          {steps.map(([number, title, description]) => (
            <article className="process-step" key={number}>
              <span className="process-step__number">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Highlights
