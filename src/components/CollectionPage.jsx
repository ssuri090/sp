import React, { useEffect, useState } from 'react'
import { Container } from './common'
import { BUSINESS } from '../business'
import { SITE_IMAGES } from '../assets/siteImages'

const CollectionPage = ({ collection }) => {
  const slides = (collection.imageIds || (collection.imageId ? [collection.imageId] : []))
    .map((imageId) => SITE_IMAGES[imageId])
    .filter(Boolean)
  const [activeSlide, setActiveSlide] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const primaryPhoto = slides[0] || null
  const photo = slides[activeSlide] || primaryPhoto

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handlePreferenceChange = (event) => setReduceMotion(event.matches)
    preference.addEventListener('change', handlePreferenceChange)
    return () => preference.removeEventListener('change', handlePreferenceChange)
  }, [])

  useEffect(() => {
    if (reduceMotion || slides.length < 2) return undefined
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, 7000)
    return () => window.clearInterval(timer)
  }, [reduceMotion, slides.length])

  useEffect(() => {
    const pageUrl = `${BUSINESS.website}collections/${collection.slug}/`
    const title = `${collection.name} | Custom Blinds and Shades | ${BUSINESS.name}`
    const description = `${collection.benefit} Call ${BUSINESS.phoneDisplay} to ask about ${collection.name.toLowerCase()} options in our service area.`
    const meta = [
      ['meta[name="description"]', 'content', description],
      ['meta[property="og:title"]', 'content', title],
      ['meta[property="og:description"]', 'content', description],
      ['meta[property="og:url"]', 'content', pageUrl],
      ['meta[property="og:image"]', 'content', primaryPhoto ? `${BUSINESS.website.slice(0, -1)}${primaryPhoto.publicPath}` : `${BUSINESS.website}images/site/hero-room.webp`],
      ['meta[property="og:image:alt"]', 'content', primaryPhoto ? primaryPhoto.alt : 'Custom blinds and shades collection'],
      ['meta[name="twitter:title"]', 'content', title],
      ['meta[name="twitter:description"]', 'content', description],
      ['link[rel="canonical"]', 'href', pageUrl],
    ].map(([selector, attribute, value]) => {
      const element = document.querySelector(selector)
      const previous = element?.getAttribute(attribute)
      element?.setAttribute(attribute, value)
      return { element, attribute, previous }
    })
    const previousTitle = document.title
    document.title = title

    const schema = document.querySelector('script[type="application/ld+json"]')
    const previousSchema = schema?.textContent
    if (schema && previousSchema) {
      const data = JSON.parse(previousSchema)
      const page = data['@graph']?.find((item) => item['@type'] === 'WebPage')
      if (page) {
        page['@id'] = `${pageUrl}#webpage`
        page.url = pageUrl
        page.name = title
        page.description = description
        page.primaryImageOfPage.url = primaryPhoto ? `${BUSINESS.website.slice(0, -1)}${primaryPhoto.publicPath}` : `${BUSINESS.website}images/site/hero-room.webp`
      }
      schema.textContent = JSON.stringify(data)
    }

    return () => {
      document.title = previousTitle
      meta.forEach(({ element, attribute, previous }) => {
        if (previous === null) element?.removeAttribute(attribute)
        else element?.setAttribute(attribute, previous)
      })
      if (schema && previousSchema) schema.textContent = previousSchema
    }
  }, [collection, primaryPhoto])

  return (
    <section className="collection-detail section section--paper">
      <Container>
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <a href="/">Home</a><span aria-hidden="true">/</span><a href="/#collections">Collections</a><span aria-hidden="true">/</span><span>{collection.name}</span>
        </nav>
        <div className="collection-detail-layout">
          <div className="collection-detail-copy">
            <p className="eyebrow">Custom window treatments</p>
            <h1>{collection.name}</h1>
            <p className="collection-detail-benefit">{collection.benefit}</p>
            <p>Share the rooms and windows you have in mind. We’ll confirm current fabrics, light-control choices, measurements and product compatibility before your quote is finalized.</p>
            <a className="button button--primary button--lg" href={`/?collection=${encodeURIComponent(collection.name)}#contact`}>Request a Consultation</a>
            <a className="collection-phone-link" href={BUSINESS.phoneHref}>Prefer to call? {BUSINESS.phoneDisplay}</a>
            {!photo && <p className="collection-photo-note collection-photo-note--detail">We’re preparing product-matched photos for this collection. Call to ask about current samples and options.</p>}
          </div>
          {photo && (
            <figure className="collection-detail-image">
              <img key={photo.id} src={photo.publicPath} srcSet={photo.srcSet} sizes="(max-width: 767px) 100vw, 55vw" alt={photo.alt} width={photo.width} height={photo.height} />
              <figcaption>{photo.alt}</figcaption>
            </figure>
          )}
        </div>
        <div className="collection-detail-bottom">
          <p>Serving selected ZIP codes in Delaware, Maryland and Pennsylvania. Based in Middletown, Delaware.</p>
          <a className="text-link" href="/#collections">Browse all collections <span aria-hidden="true">→</span></a>
        </div>
      </Container>
    </section>
  )
}

export default CollectionPage