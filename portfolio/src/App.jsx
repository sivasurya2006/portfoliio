import { useMemo, useState } from 'react'
import { projects } from './data/projects'
import profilePhoto from './assets/surya.jpg'
import './App.css'

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact']

const frontendSkills = [
  'HTML5',
  'CSS3',
  'JavaScript (ES6+)',
  'React.js',
  'Responsive UI',
  'Component-Based Architecture',
  'React Hooks (useState, useEffect, useMemo)',
  'Fetch API',
]

const toolsSkills = [
  'VS Code (Visual Studio Code)',
  'Git',
  'GitHub',
  'Vite',
]

const programmingSkills = [
  'JavaScript (ES6+)',
  'Python',
  'HTML5 & CSS3',
  'C Basics',
  'C++ Basics',
]

const learningSkills = [
  'Django (Basics)',
  'Backend Fundamentals',
  'Database Management (SQL)',
]

const educationTimeline = [
  {
    period: 'Fourth Year (2026 - 2027)',
    title: 'Full-Stack Expansion & Backend Basics',
    detail:
      'Currently studying Python backend fundamentals, Django basics, and database concepts to advance towards full-stack development.',
  },
  {
    period: 'Third Year (2025 - 2026)',
    title: 'Front-End Specialization & React Projects',
    detail:
      'Focused on practical frontend engineering with React.js, JavaScript, and Fetch API. Built real-world projects including NewsHub and Movie Search App.',
  },
  {
    period: 'Second Year (2024 - 2025)',
    title: 'Core Web Technologies & OOP Principles',
    detail:
      'Learned Object-Oriented Programming (OOP) concepts, algorithms, and built responsive web layouts using HTML5, CSS3, and JavaScript.',
  },
  {
    period: 'First Year (2023 - 2024)',
    title: 'Programming Logic & Computer Science Fundamentals',
    detail:
      'Started computer science engineering with core logic, problem solving, and basic programming in Python and C.',
  },
]

const socialLinks = {
  github: 'https://github.com/sivasurya2006?tab=repositories',
  linkedin:
    'https://www.linkedin.com/in/siva-suriya-b-990438381?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  email: 'mailto:sivasurya.21@gmail.com',
  rawEmail: 'sivasurya.21@gmail.com',
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
    setFormStatus('Thank you! Your message has been received.')
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
          <a className="nav-resume" href="/Siva-Suriya-B-Resume.pdf" target="_blank" rel="noreferrer" onClick={closeMenu}>
            Resume
          </a>
        </nav>
      </header>

      <main>
        <section className="hero-section section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Front-End & Aspiring Full Stack Developer</p>
            <h1>Siva Suriya.B</h1>
            <h2>Full Stack Developer</h2>
            <p className="hero-intro">
              Final-year Computer Science student at PRIST University College, Thanjavur.
              Passionate about building responsive, modern user interfaces with React.js,
              JavaScript, HTML5, CSS3, and Fetch API, while actively expanding into backend development with Python and Django.
            </p>

            <div className="hero-actions">
              <a className="btn primary" href="#projects">
                View Projects
              </a>
              <a className="btn secondary" href="/Siva-Suriya-B-Resume.pdf" download="Siva-Suriya-B-Resume.pdf">
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

          <div className="profile-panel" aria-label="Siva Suriya Profile Photo">
            <div className="profile-frame">
              <img
                src={profilePhoto}
                alt="Siva Suriya B - Full Stack Developer"
                className="profile-img"
              />
            </div>
            <div className="profile-caption">
              <h3>Siva Suriya.B</h3>
              <p>Full Stack Developer</p>
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>Clean interfaces, responsive design, and practical software development.</h2>
          </div>
          <div className="about-grid">
            <article>
              <h3>Professional Introduction</h3>
              <p>
                I am Siva Suriya, a final-year B.Tech Computer Science student and aspiring
                Developer. I specialize in front-end development using HTML5, CSS3,
                JavaScript (ES6+), and React.js to build modern web applications.
              </p>
            </article>
            <article>
              <h3>Development Interests</h3>
              <p>
                My focus includes responsive web design, React component architecture,
                API integration using Fetch API, Python programming, and backend fundamentals.
              </p>
            </article>
            <article>
              <h3>Career Objective</h3>
              <p>
                To secure a Front-End or Full-Stack Developer position where I can apply
                my technical skills, build practical web applications, and grow with the team.
              </p>
            </article>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>Technologies and tools I use to build responsive web applications.</h2>
          </div>
          <div className="skills-layout">
            <SkillGroup title="Frontend Technologies" skills={frontendSkills} />
            <SkillGroup title="Development Tools" skills={toolsSkills} />
            <SkillGroup title="Programming Languages" skills={programmingSkills} />
            <SkillGroup title="Currently Learning" skills={learningSkills} />
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading projects-heading">
            <div>
              <p className="eyebrow">Projects</p>
              <h2>Hands-on projects built with React.js, JavaScript, and Fetch API.</h2>
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
                  ) : null}
                  {project.repositoryUrl ? (
                    <a href={project.repositoryUrl} target="_blank" rel="noreferrer">
                      Source Code (GitHub)
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section education-section" id="education">
          <div className="section-heading">
            <p className="eyebrow">Education</p>
            <h2>B.Tech in Computer Science and Engineering</h2>
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
            <p className="eyebrow">Continuous Learning</p>
            <h2>Focused on practical coding and steady skill improvement.</h2>
          </div>
          <div className="journey-panel">
            <p>
              I build web projects with React.js and modern JavaScript to hone my frontend skills,
              while expanding my knowledge into backend fundamentals with Python and databases.
            </p>
          </div>
        </section>

        <section className="section resume-section">
          <div>
            <p className="eyebrow">Resume</p>
            <h2>Professional Resume</h2>
            <p>
              View or download my updated resume featuring technical skills, projects, and education.
            </p>
          </div>
          <div className="resume-actions">
            <a className="btn primary" href="/Siva-Suriya-B-Resume.pdf" target="_blank" rel="noreferrer">
              View Resume
            </a>
            <a className="btn secondary" href="/Siva-Suriya-B-Resume.pdf" download="Siva-Suriya-B-Resume.pdf">
              Download Resume (PDF)
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
              <a href={socialLinks.email} className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>{socialLinks.rawEmail}</span>
              </a>
              <a href={socialLinks.github} target="_blank" rel="noreferrer" className="contact-item">
                <span className="contact-icon">💻</span>
                <span>GitHub Profile (sivasurya2006)</span>
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="contact-item">
                <span className="contact-icon">🔗</span>
                <span>LinkedIn Profile (Siva Suriya.B)</span>
              </a>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Thanjavur, Tamil Nadu, India</span>
              </div>
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
        <p>© 2026 Siva Suriya.B. All rights reserved.</p>
        <div>
          <a href={socialLinks.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={socialLinks.email}>
            Email
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
