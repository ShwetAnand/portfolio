import { useEffect, useState } from 'react'
import { Menu, X, Download } from 'lucide-react'
import { navLinks, profile } from '../data/portfolioData.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>SA<span>.</span></a>
        <nav id="site-nav" className={`nav-links ${open ? 'open' : ''}`} aria-label="Primary">
          {navLinks.map(({ id, label }) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}
               className={active === id ? 'active' : ''}
               aria-current={active === id ? 'true' : undefined}>
              {label}
            </a>
          ))}
          <a className="btn btn-primary nav-cta" href={profile.resumePath} download>
            <Download size={16} aria-hidden="true" /> Download Resume
          </a>
        </nav>
        <button className="menu-btn" onClick={() => setOpen(!open)}
                aria-expanded={open} aria-controls="site-nav"
                aria-label={open ? 'Close menu' : 'Open menu'}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}
