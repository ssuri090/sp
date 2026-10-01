import React, { useRef, useState } from 'react'
import { Container, Button } from './common'
import { BUSINESS } from '../business'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)

  const navItems = [
    { label: 'Collections', href: '#collections' },
    { label: 'Motorization', href: '#motorization' },
    { label: 'Our Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <div className="flex items-center justify-between">
          <a href="#top" className="brand-mark">
            <span className="brand-mark__name">S&amp;P <span>Elegant Blinds</span></span>
            <span className="brand-mark__descriptor">Custom window treatments</span>
          </a>

          <nav className="site-nav hidden md:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="site-nav__link"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <a href={BUSINESS.phoneHref} className="header-phone">
              {BUSINESS.phoneDisplay}
            </a>
            <Button variant="primary" size="sm" href="#contact">
              Request a Quote
            </Button>
          </div>

          <button
            className="menu-toggle md:hidden"
            ref={menuButtonRef}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <div className="flex flex-col gap-1.5">
              <div className={`h-0.5 w-5 bg-slate-800 transition-all ${mobileMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <div className={`h-0.5 w-5 bg-slate-800 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <div className={`h-0.5 w-5 bg-slate-800 transition-all ${mobileMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </div>
          </button>
        </div>

        {mobileMenuOpen && (
          <nav
            id="mobile-navigation"
            className="mobile-nav md:hidden"
            aria-label="Mobile navigation"
            onKeyDown={(event) => {
              if (event.key === 'Escape') {
                setMobileMenuOpen(false)
                menuButtonRef.current?.focus()
              }
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="mobile-nav__link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button variant="primary" size="sm" href="#contact" className="mt-2 w-full">
              Request a Quote
            </Button>
          </nav>
        )}
      </Container>
    </header>
  )
}

export default Header
