import { Github, Linkedin, Mail } from 'lucide-react'
import { socials } from '../data/portfolioData.js'

export default function SocialLinks({ className = '' }) {
  const items = [
    { label: 'GitHub', Icon: Github, href: socials.github },
    { label: 'LinkedIn', Icon: Linkedin, href: socials.linkedin },
    { label: 'Email', Icon: Mail, href: socials.email ? `mailto:${socials.email}` : '' },
  ]
  return (
    <ul className={`social ${className}`}>
      {items.map(({ label, Icon, href }) => (
        <li key={label}>
          {href ? (
            <a href={href} aria-label={label} title={label}
               target={label === 'Email' ? undefined : '_blank'} rel="noopener noreferrer">
              <Icon size={18} aria-hidden="true" />
            </a>
          ) : (
            <span aria-disabled="true" title={`${label} link not set yet`} aria-label={`${label} (not set)`}>
              <Icon size={18} aria-hidden="true" />
            </span>
          )}
        </li>
      ))}
    </ul>
  )
}
