import React from 'react'
import { Container } from './common'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-300">
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-8 border-b border-slate-800 py-16 md:grid-cols-4">
          <div>
            <div className="mb-4 flex flex-col">
              <span className="font-display text-3xl text-white">S&amp;P Elegant Blinds</span>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Custom Blinds and Window Shades</span>
            </div>
            <p className="text-sm text-slate-400">
              Premium custom window treatments designed to elevate comfort, privacy, and style.
            </p>
            <p className="mt-4 text-xs italic text-slate-500">
              Elegant by design. Precise by installation.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-white">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="transition hover:text-primary">Zebra Blinds</a></li>
              <li><a href="#services" className="transition hover:text-primary">Roller Shades</a></li>
              <li><a href="#services" className="transition hover:text-primary">Roman Blinds</a></li>
              <li><a href="#services" className="transition hover:text-primary">Vertical Blinds</a></li>
              <li><a href="#services" className="transition hover:text-primary">Motorized Blinds</a></li>
              <li><a href="#services" className="transition hover:text-primary">Solar Shades</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-white">Service Areas</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Delaware (DE)</li>
              <li>Pennsylvania (PA)</li>
              <li>Maryland (MD)</li>
              <li>New Jersey (NJ)</li>
            </ul>
            <p className="mt-4 text-xs text-slate-500">
              Serving homeowners throughout the region with local, responsive support.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-white">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+13025550123" className="transition hover:text-primary">
                  (302) 555-0123
                </a>
              </li>
              <li>
                <a href="mailto:info@spelegantblinds.com" className="transition hover:text-primary">
                  info@spelegantblinds.com
                </a>
              </li>
            </ul>
            <p className="mt-4 text-xs text-slate-500">
              Mon-Fri: 9 AM-6 PM<br/>
              Sat–Sun: By appointment
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between py-8 md:flex-row">
          <p className="text-sm text-slate-400">
            {currentYear} S&amp;P Elegant Blinds. All rights reserved.
          </p>
          <div className="mt-4 flex gap-6 text-sm md:mt-0">
            <a href="#" className="text-slate-400 transition hover:text-primary">Privacy Policy</a>
            <a href="#" className="text-slate-400 transition hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
