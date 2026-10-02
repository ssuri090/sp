import React from 'react'
import { Container } from './common'
import { BUSINESS, getWhatsAppCatalogUrl } from '../business'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const homePath = window.location.pathname.startsWith('/collections/') ? '/' : ''

  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-grid">
          <div>
            <div className="brand-mark brand-mark--footer">
              <span className="brand-mark__name">S&amp;P <span>Elegant Blinds</span></span>
              <span className="brand-mark__descriptor">Custom window treatments</span>
            </div>
            <p className="footer-description">Thoughtful window treatments, with personal service from selection to installation.</p>
          </div>

          <div>
            <h2 className="footer-heading">Explore</h2>
            <ul className="footer-links">
              <li><a href={`${homePath}#collections`}>Collections</a></li>
              <li><a href={`${homePath}#work`}>Selected installations</a></li>
              <li><a href={`${homePath}#motorization`}>Motorization</a></li>
              <li><a href={`${homePath}#about`}>About S&amp;P</a></li>
              <li><a href={`${homePath}#special-applications`}>Patio and custom-print shades</a></li>
              <li><a href={`${homePath}#process`}>How it works</a></li>
              <li><a href={`${homePath}#faq`}>Questions</a></li>
            </ul>
          </div>

          <div>
            <h2 className="footer-heading">Service area</h2>
            <p>Middletown, Delaware</p>
            <p className="footer-muted">Serving selected ZIP codes in DE, MD and PA.</p>
            <p><a href={`${homePath}#faq`}>See service areas</a></p>
          </div>

          <div>
            <h2 className="footer-heading">Contact</h2>
            <ul className="footer-links">
              <li><a href={BUSINESS.phoneHref}>{BUSINESS.phoneDisplay}</a></li>
              <li><a href={getWhatsAppCatalogUrl()} target="_blank" rel="noopener noreferrer">WhatsApp catalog</a></li>
              <li><a href={BUSINESS.instagramHref} target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} {BUSINESS.name}</p>
          <a href={`${homePath}#top`}>Back to top ↑</a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
