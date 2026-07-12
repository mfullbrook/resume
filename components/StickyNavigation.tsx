'use client'

import { useEffect, useState } from 'react'

const sections = [
  { id: 'profile', label: 'Impact' },
  { id: 'experience', label: 'Experience' },
  { id: 'technical-depth', label: 'Technical' },
  { id: 'education', label: 'Education' },
  { id: 'perspective', label: 'Perspective' },
]

export function StickyNavigation() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState('profile')

  useEffect(() => {
    const contactStrip = document.querySelector('#contact-strip')
    if (!contactStrip) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(!entry.isIntersecting && entry.boundingClientRect.bottom < 0)
    })

    observer.observe(contactStrip)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let frame = 0

    const updateActiveSection = () => {
      frame = 0
      const profile = document.querySelector('#profile')
      const profileBounds = profile?.getBoundingClientRect()

      if (profileBounds && profileBounds.top <= 112 && profileBounds.bottom > 112) {
        setActiveSection('profile')
        return
      }

      let current = 'experience'
      for (const section of sections.slice(1)) {
        const element = document.getElementById(section.id)
        if (element && element.getBoundingClientRect().top <= 112) current = section.id
      }
      setActiveSection(current)
    }

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  const closeMobileMenu = () => {
    document.querySelector<HTMLDetailsElement>('.sticky-mobile-menu')?.removeAttribute('open')
  }

  return (
    <header className={`sticky-header ${isVisible ? 'is-visible' : ''}`} aria-hidden={!isVisible}>
      <a className="sticky-brand" href="#top" tabIndex={isVisible ? 0 : -1}>
        <span>MF</span>
        <strong>Mark Fullbrook</strong>
      </a>

      <nav className="sticky-desktop-nav" aria-label="Résumé sections">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            aria-current={activeSection === section.id ? 'location' : undefined}
            tabIndex={isVisible ? 0 : -1}
          >
            {section.label}
          </a>
        ))}
      </nav>

      <details className="sticky-mobile-menu">
        <summary tabIndex={isVisible ? 0 : -1}>Sections</summary>
        <nav aria-label="Résumé sections">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-current={activeSection === section.id ? 'location' : undefined}
              onClick={closeMobileMenu}
            >
              {section.label}
            </a>
          ))}
        </nav>
      </details>
    </header>
  )
}
