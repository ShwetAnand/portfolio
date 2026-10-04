import { Download } from 'lucide-react'
import { profile } from '../data/portfolioData.js'
import SocialLinks from './SocialLinks.jsx'

const code = [
  ['k', '@RestController'],
  ['k', '@RequestMapping', '("/api/jobs")'],
  ['', 'public class JobController {'],
  ['', ''],
  ['k', '  @GetMapping'],
  ['', '  public List<Job> all() {'],
  ['', '    return jobService.findAll();'],
  ['', '  }'],
  ['', '}'],
]

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hello">Hi, I'm</p>
          <h1>{profile.name}</h1>
          <p className="headline">{profile.headline}</p>
          <p className="lead">{profile.intro}</p>
          <div className="actions">
            <a className="btn btn-primary" href="#projects">View My Projects</a>
            <a className="btn btn-ghost" href={profile.resumePath} download>
              <Download size={16} aria-hidden="true" /> Download Resume
            </a>
          </div>
          <SocialLinks />
        </div>
        <div className="editor" aria-hidden="true">
          <div className="editor-bar"><i /><i /><i /><span>JobController.java</span></div>
          <pre>
            {code.map(([cls, a, b], i) => (
              <div key={i}><span className="ln">{i + 1}</span><span className={cls}>{a}</span>{b}</div>
            ))}
          </pre>
          <div className="editor-foot">
            <span>Spring Boot</span><span>React</span><span>PostgreSQL</span>
          </div>
        </div>
      </div>
    </section>
  )
}
