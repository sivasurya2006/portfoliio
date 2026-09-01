import { useMemo, useState } from 'react'
import { projects } from './data/projects'
import './App.css'

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact']

const frontendSkills = ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Responsive UI']
const toolsSkills = ['Git', 'GitHub', 'Vite', 'REST API Integration']
const programmingSkills = ['Python', 'C Basics', 'C++ Basics']
const learningSkills = ['Django', 'Database Management']

const educationTimeline = [
  {
    period: 'Fourth Year (2026 - 2027)',
    title: 'Back-End Engineering & Database Integration',
    detail:
      'Currently mastering back-end development using Python and Django, while studying database management to grow into a well-rounded full-stack developer.',
  },
  {
    period: 'Third Year (2025 - 2026)',
    title: 'Front-End Specialization & Real-World Projects',
    detail:
      'Focused heavily on practical web development, JavaScript, and React. Built API-driven projects including NewsHub and Movie Search App.',
  },
  {
    period: 'Second Year (2024 - 2025)',
    title: 'Core Web Technologies & Object-Oriented Programming',
    detail:
      'Learned object-oriented programming principles and built a strong foundation in front-end design using HTML and CSS.',
  },
  {
    period: 'First Year (2023 - 2024)',
    title: 'Programming Fundamentals',
    detail:
      'Started the computer science journey by learning programming logic, algorithmic thinking, and core syntax in Python.',
  },
]

const socialLinks = {
  github: 'https://github.com/sivasurya2006?tab=repositories',
  linkedin:
    'https://www.linkedin.com/in/siva-suriya-b-990438381?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  email: 'mailto:sivasurya.b@21@gmail.com',
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('All')
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [formStatus, setFormStatus] = useState('')

  const filters = useMemo(
    () => ['All', ...new Set(projects.map((project) => project.category))],
    [],
  )

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  const closeMenu = () => setMenuOpen(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const hasEmptyField = Object.values(form).some((value) => !value.trim())

    if (hasEmptyField) {
      setFormStatus('Please fill in all fields before sending your message.')
      return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(form.email)) {
      setFormStatus('Please enter a valid email address.')
      return
    }

    setForm({ name: '', email: '', message: '' })
    setFormStatus('Thanks! Your message is ready. Backend integration can be added later.')
  }

  return (
    <div className="site-shell">
      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Siva Suriya home">
          <span className="brand-mark">SS</span>
          <span>Siva Suriya.B</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
              {item}
            </a>
          ))}
          <a className="nav-resume" href="/Siva-Suriya-B-Resume.pdf" download onClick={closeMenu}>
            Resume
          </a>
        </nav>
      </header>

      <main>
        <section className="hero-section section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Aspiring Full Stack Developer</p>
            <h1>Siva Suriya.B</h1>
            <h2>Full Stack Developer</h2>
            <p className="hero-intro">
              Final-year Computer Science student at PRIST University College, Thanjavur,
              focused on building clean, responsive, API-driven web applications with React,
              JavaScript, HTML, and CSS while using Python fundamentals and actively learning
              Django with database management.
            </p>

            <div className="hero-actions">
              <a className="btn primary" href="#projects">
                View Projects
              </a>
              <a className="btn secondary" href="/Siva-Suriya-B-Resume.pdf" download>
                Download Resume
              </a>
              <a className="btn ghost" href={socialLinks.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="btn ghost" href={socialLinks.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="profile-panel" aria-label="Profile image placeholder">
            <div className="profile-frame">
              <div className="profile-placeholder">
                <span>SS</span>
              </div>
            </div>
            <p>Profile photo can be added here later.</p>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>Clean interfaces, practical learning, and steady full-stack growth.</h2>
          </div>
          <div className="about-grid">
            <article>
              <h3>Professional Introduction</h3>
              <p>
                I am Siva Surya, a final-year B.Tech Computer Science student and aspiring
                Full-Stack Developer. I specialize in front-end development using HTML, CSS,
                JavaScript, and React to build responsive web applications.
              </p>
            </article>
            <article>
              <h3>Development Interests</h3>
              <p>
                My interests include front-end engineering, API integration, responsive design,
                Python fundamentals, Django, and database-backed web applications.
              </p>
            </article>
            <article>
              <h3>Career Objective</h3>
              <p>
                To secure an entry-level Front-End or Full-Stack Developer role where I can
                contribute to real-world software projects and continue expanding my backend
                engineering skills.
              </p>
            </article>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>Technologies I work with and skills I am actively improving.</h2>
          </div>
          <div className="skills-layout">
            <SkillGroup title="Frontend" skills={frontendSkills} />
            <SkillGroup title="Tools" skills={toolsSkills} />
            <SkillGroup title="Programming" skills={programmingSkills} />
            <SkillGroup title="Currently Learning" skills={learningSkills} />
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading projects-heading">
            <div>
              <p className="eyebrow">Projects</p>
              <h2>Hands-on work with React, APIs, and responsive UI development.</h2>
            </div>
            <div className="project-filters" aria-label="Project filters">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={activeFilter === filter ? 'active' : ''}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="project-grid">
            {filteredProjects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-topline">
                  <span>{project.category}</span>
                  <span>{project.status}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="project-points">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <div className="tech-list">
                  {project.techStack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="project-actions">
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                  ) : (
                    <span>Deploy link later</span>
                  )}
                  {project.repositoryUrl ? (
                    <a href={project.repositoryUrl} target="_blank" rel="noreferrer">
                      Source Code
                    </a>
                  ) : (
                    <span>Project repo later</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section education-section" id="education">
          <div className="section-heading">
            <p className="eyebrow">Education</p>
            <h2>B.Tech Computer Science and Engineering</h2>
            <p>
              PRIST University College, Thanjavur · 2023 - 2027 · Final Year
            </p>
          </div>

          <div className="timeline">
            {educationTimeline.map((item) => (
              <article className="timeline-item" key={item.title}>
                <span>{item.period}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section journey-section">
          <div className="section-heading">
            <p className="eyebrow">Learning Journey</p>
            <h2>Focused on becoming production-ready through consistent practice.</h2>
          </div>
          <div className="journey-panel">
            <p>
              I am currently improving backend development through Django and database
              management while continuing to build front-end projects with React and REST APIs.
            </p>
          </div>
        </section>

        <section className="section resume-section">
          <div>
            <p className="eyebrow">Resume</p>
            <h2>Resume is available from the public folder.</h2>
            <p>
              A temporary resume file is included now. Replace it with your final resume PDF
              whenever it is ready.
            </p>
          </div>
          <div className="resume-actions">
            <a className="btn primary" href="/Siva-Suriya-B-Resume.pdf" target="_blank" rel="noreferrer">
              View Resume
            </a>
            <a className="btn secondary" href="/Siva-Suriya-B-Resume.pdf" download>
              Download Resume
            </a>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Let us connect for opportunities, projects, and collaboration.</h2>
          </div>

          <div className="contact-grid">
            <div className="contact-details">
              <a href={socialLinks.email}>sivasurya.b@21@gmail.com</a>
              <a href={socialLinks.github} target="_blank" rel="noreferrer">
                GitHub Profile
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
                LinkedIn Profile
              </a>
              <p>Thanjavur, Tamil Nadu</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <label>
                Name
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                />
              </label>
              <label>
                Email
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleInputChange}
                  placeholder="Write your message"
                  rows="5"
                ></textarea>
              </label>
              <button className="btn primary" type="submit">
                Send Message
              </button>
              {formStatus ? <p className="form-status">{formStatus}</p> : null}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Siva Suriya.B. Built with React and Vite.</p>
        <div>
          <a href={socialLinks.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  )
}

function SkillGroup({ title, skills }) {
  return (
    <article className="skill-group">
      <h3>{title}</h3>
      <div className="skill-tags">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </article>
  )
}

export default App
