import { skills } from '../data/portfolioData.js'

export default function Skills() {
  return (
    <section id="skills" className="section alt">
      <div className="container">
        <h2>Skills</h2>
        <div className="grid skills-grid">
          {skills.map((group) => (
            <div className="card" key={group.title}>
              <h3 className="sub">{group.title}</h3>
              <ul className="chips">
                {group.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
