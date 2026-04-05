import React, { useState } from 'react'
import { Container, Button } from './common'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <Container className="py-3">
        <div className="flex items-center justify-between">
          <a href="#top" className="group flex flex-col leading-none">
            <span className="font-display text-2xl tracking-tight text-slate-900">S&amp;P Elegant Blinds</span>
            <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">Premium Custom Window Shades</span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold text-slate-600 transition-colors duration-300 hover:text-slate-900"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href="tel:+13025550123" className="text-sm font-semibold text-slate-700 transition-colors hover:text-slate-900">
              (302) 555-0123
            </a>
            <Button variant="primary" size="sm" href="#contact">
              Get Free Quote
            </Button>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <div className={`h-0.5 w-5 bg-slate-800 transition-all ${mobileMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <div className={`h-0.5 w-5 bg-slate-800 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <div className={`h-0.5 w-5 bg-slate-800 transition-all ${mobileMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </div>
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="mt-4 space-y-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-soft md:hidden">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button variant="primary" size="sm" href="#contact" className="mt-2 w-full">
              Get Free Quote
            </Button>
          </nav>
        )}
      </Container>
    </header>
  )
}

export default Header
