import React from 'react'
import { Container } from './common'
import { BUSINESS, getWhatsAppCatalogUrl } from '../business'

const Footer = () => {
  const currentYear = new Date().getFullYear()

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
              <li><a href="#collections">Collections</a></li>
              <li><a href="#work">Selected installations</a></li>
              <li><a href="#motorization">Motorization</a></li>
              <li><a href="#process">How it works</a></li>
              <li><a href="#faq">Questions</a></li>
            </ul>
          </div>

          <div>
            <h2 className="footer-heading">Service area</h2>
            <p>Middletown, Delaware</p>
            <p className="footer-muted">Serving selected ZIP codes in DE, MD and PA.</p>
            <p><a href="#faq">See service ZIP codes</a></p>
          </div>

          <div>
            <h2 className="footer-heading">Contact</h2>
            <ul className="footer-links">
              <li><a href={BUSINESS.phoneHref}>{BUSINESS.phoneDisplay}</a></li>
              <li><a href={getWhatsAppCatalogUrl()} target="_blank" rel="noopener noreferrer">WhatsApp catalog</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} {BUSINESS.name}</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
