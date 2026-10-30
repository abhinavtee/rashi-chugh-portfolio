import { useEffect, useState, type Dispatch, type SetStateAction, type FormEvent } from 'react'
import {
  ArrowDown, ArrowDownRight, ArrowUpRight, Asterisk,
  Check, CircleArrowUp, ExternalLink, Mail, Menu, Moon, Palette, Phone, Play,
  Send, Sparkles, Sun, X
} from 'lucide-react'


type Theme = 'light' | 'dark'
type Category = 'All' | 'Branding' | 'Graphic design' | 'Motion & video'

type Project = {
  id: number
  title: string
  category: Exclude<Category, 'All'>
  label: string
  year: string
  description: string
  details: string[]
  preview: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Frykar',
    category: 'Graphic design',
    label: 'Game visuals · Internship',
    year: '2026',
    description: 'Visual assets and a logo created for Frykar, a cooking game project at Spectre Rex.',
    details: ['Designed visual assets for a cooking game project.', 'Created the project logo using Adobe Photoshop and Illustrator.', 'Refined assets through feedback while maintaining visual consistency.'],
    preview: 'frykar',
  },
  {
    id: 2,
    title: 'Client identity work',
    category: 'Branding',
    label: 'Logo design · Freelance',
    year: '2025 — Present',
    description: 'Custom logo design work developed with clients, translating their goals into clear visual identities.',
    details: ['Created custom client logos using Adobe Illustrator and Photoshop.', 'Applied branding principles and colour theory.', 'Worked directly with clients to understand their goals and expectations.'],
    preview: 'identity',
  },
  {
    id: 3,
    title: 'Editorial cover',
    category: 'Graphic design',
    label: 'Magazine cover · Freelance',
    year: '2025 — Present',
    description: 'A magazine cover design focused on typography, layout and a clear visual hierarchy.',
    details: ['Created a magazine cover design.', 'Focused on typography and layout.', 'Applied colour and composition principles to communicate the subject clearly.'],
    preview: 'editorial',
  },
  {
    id: 4,
    title: 'Gaming video edits',
    category: 'Motion & video',
    label: 'Video editing · Freelance',
    year: '2025 — Present',
    description: 'Edited gaming videos for a YouTube gaming channel using Adobe After Effects.',
    details: ['Edited gaming videos for a YouTube gaming channel.', 'Used Adobe After Effects in the editing workflow.', 'Project video previews can be added when the original reel or links are supplied.'],
    preview: 'motion',
  },
]

const skills = [
  'Graphic Design', 'Branding & Visual Identity', 'Content Design', 'Motion Graphics',
  'Video Editing', 'Social Media Creatives', 'Promotional Materials', 'Canva', 'AI Design Tools', 'Typography & Layout',
]

const tools = [
  { name: 'Adobe Photoshop', short: 'Ps', kind: 'ps' },
  { name: 'Adobe Illustrator', short: 'Ai', kind: 'ai' },
  { name: 'Adobe Premiere Pro', short: 'Pr', kind: 'pr' },
  { name: 'Adobe After Effects', short: 'Ae', kind: 'ae' },
  { name: 'Adobe Audition', short: 'Au', kind: 'au' },
  { name: 'Canva', short: 'Ca', kind: 'ca' },
]

function useInitialTheme(): [Theme, Dispatch<SetStateAction<Theme>>] {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem('rashi-portfolio-theme')
      if (saved === 'light' || saved === 'dark') return saved
    } catch { /* localStorage may be unavailable */ }
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#1b1223' : '#fff5f8')
  }, [theme])
  return [theme, setTheme]
}

function ThreeAccent() {
  return (
    <div className="three-accent-css" aria-hidden="true">
      <div className="accent-sphere"><span /><i /></div>
      <div className="accent-orbit accent-orbit-one" />
      <div className="accent-orbit accent-orbit-two" />
      <span className="accent-spark accent-spark-one" />
      <span className="accent-spark accent-spark-two" />
    </div>
  )
}

function ThemeToggle({ theme, onToggle }: { theme: Theme; onToggle: () => void }) {
  return (
    <button className="theme-toggle" onClick={onToggle} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`} title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}>
      <span className={`theme-toggle-icon ${theme === 'light' ? 'active' : ''}`}><Sun size={15} /></span>
      <span className={`theme-toggle-icon ${theme === 'dark' ? 'active' : ''}`}><Moon size={15} /></span>
    </button>
  )
}

function ProjectArtwork({ type }: { type: string }) {
  return (
    <div className={`artwork artwork-${type}`} aria-label="Decorative project preview placeholder">
      <div className="artwork-noise" />
      {type === 'frykar' && <>
        <span className="artwork-index">01 / GAME VISUALS</span>
        <div className="frykar-plate"><span className="plate-ring" /><span className="plate-center">Artwork<br />preview</span></div>
        <span className="frykar-sticker">FRYKAR<br /><small>PROJECT</small></span>
        <span className="artwork-placeholder">Replace with original project assets</span>
      </>}
      {type === 'identity' && <>
        <span className="artwork-index">02 / BRAND IDENTITY</span>
        <div className="identity-mark">Aa<span>®</span></div>
        <div className="identity-lines"><i /><i /><i /></div>
        <span className="identity-swatch swatch-one" /><span className="identity-swatch swatch-two" /><span className="identity-swatch swatch-three" />
        <span className="artwork-placeholder">Replace with client logo work</span>
      </>}
      {type === 'editorial' && <>
        <span className="artwork-index">03 / EDITORIAL</span>
        <div className="editorial-sheet"><small>AN EXERCISE IN</small><strong>TYPE<br /><em>&</em><br />LAYOUT</strong><span>MAGAZINE COVER</span></div>
        <span className="editorial-orbit" />
        <span className="artwork-placeholder">Replace with magazine cover</span>
      </>}
      {type === 'motion' && <>
        <span className="artwork-index">04 / MOTION & VIDEO</span>
        <div className="motion-frame"><div className="motion-play"><Play size={22} fill="currentColor" /></div><span>SHOWREEL<br />PREVIEW</span></div>
        <div className="motion-wave"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
        <span className="artwork-placeholder">Add an original video or reel</span>
      </>}
    </div>
  )
}

function App() {
  const [theme, setTheme] = useInitialTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [category, setCategory] = useState<Category>('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [showTop, setShowTop] = useState(false)
  const email = 'rashichugh610@gmail.com'
  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(nextTheme)
    try { localStorage.setItem('rashi-portfolio-theme', nextTheme) } catch { /* ignore */ }
  }

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let scrollFrame = 0
    const scrollProgress = document.getElementById('scroll-progress')

    // A single observer handles all reveal-on-scroll elements without creating
    // dozens of independent animation timelines or scroll listeners.
    let revealObserver: IntersectionObserver | null = null
    if ('IntersectionObserver' in window) {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            revealObserver?.unobserve(entry.target)
          }
        })
      }, { threshold: 0.08, rootMargin: '0px 0px -36px 0px' })
    }

    const observeReveal = (element: Element) => {
      if (!element.classList.contains('reveal-observed')) {
        element.classList.add('reveal-observed')
        if (prefersReducedMotion || !revealObserver) element.classList.add('is-visible')
        else {
          element.classList.add('reveal-ready')
          revealObserver.observe(element)
        }
      }
    }

    document.querySelectorAll('.reveal').forEach(observeReveal)

    // Re-observe newly rendered project cards when the gallery filter changes.
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return
          if (node.matches('.reveal')) observeReveal(node)
          node.querySelectorAll('.reveal').forEach(observeReveal)
        })
      })
    })
    mutationObserver.observe(document.getElementById('root') || document.body, { childList: true, subtree: true })

    // Fail open if an older browser's observer stops delivering entries.
    const revealFallback = window.setTimeout(() => {
      document.querySelectorAll('.reveal-ready:not(.is-visible)').forEach((element) => element.classList.add('is-visible'))
    }, 1800)
    const heroVisual = document.querySelector<HTMLElement>('.hero-visual')

    let isTopVisible = false
    const onScroll = () => {
      if (scrollFrame) return
      scrollFrame = window.requestAnimationFrame(() => {
        scrollFrame = 0
        if (scrollProgress) {
          const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
          const progress = scrollableHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollableHeight)) : 0
          scrollProgress.style.transform = `scaleX(${progress})`
        }
        if (heroVisual && !prefersReducedMotion && window.innerWidth > 760 && !window.matchMedia('(pointer: coarse)').matches) {
          const parallaxY = Math.min(42, Math.max(0, window.scrollY * 0.045))
          heroVisual.style.transform = `translate3d(0, ${parallaxY}px, 0)`
        }
        const next = window.scrollY > 650
        if (next !== isTopVisible) {
          isTopVisible = next
          setShowTop(next)
        }
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      revealObserver?.disconnect()
      mutationObserver.disconnect()
      window.clearTimeout(revealFallback)
      window.removeEventListener('scroll', onScroll)
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame)
    }
  }, [])

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        setSelectedProject(null)
      }
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  useEffect(() => {
    document.body.style.overflow = selectedProject || menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selectedProject, menuOpen])

  const visibleProjects = category === 'All' ? projects : projects.filter((project) => project.category === category)
  const goTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') || '').trim()
    const sender = String(formData.get('senderEmail') || '').trim()
    const message = String(formData.get('message') || '').trim()
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`)
    const body = encodeURIComponent(`Hi Rashi,\n\n${message}\n\nFrom: ${name}\nEmail: ${sender}`)
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopiedEmail(true)
      window.setTimeout(() => setCopiedEmail(false), 1800)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <div className="site-shell" data-theme={theme}>
      <div id="scroll-progress" className="scroll-progress" aria-hidden="true" />
      <div className="top-note"><span className="status-dot" /> A CREATIVE PORTFOLIO <span className="top-note-divider">/</span> GRAPHIC DESIGN · VIDEO · MOTION</div>
      <header className="site-header">
        <a className="brand" href="#home" onClick={(event) => { event.preventDefault(); goTo('home') }} aria-label="Rashi Chugh, home">
          <span className="brand-mark">R<span>.</span></span>
          <span className="brand-name">Rashi Chugh<small>Independent creative</small></span>
        </a>
        <nav className={`desktop-nav ${menuOpen ? 'mobile-open' : ''}`} aria-label="Main navigation">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Selected work</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills & tools</a>
          <a href="#journey" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <div className="header-actions">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <a className="header-cta" href="mailto:rashichugh610@gmail.com">Let's talk <ArrowUpRight size={14} /></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main>
        <section className="hero section-pad" id="home">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-line" /> GRAPHIC DESIGNER & VISUAL STORYTELLER</div>
              <h1>Making ideas<br />feel <em>seen.</em></h1>
              <p className="hero-intro">I'm <strong>Rashi Chugh</strong> — a Graphic Designer, Video Editor and Motion Graphic Designer pursuing a B.Voc. I have hands-on experience creating social media creatives, promotional materials and visual content through freelance projects and a game-design internship. My workflow brings together Adobe Creative Suite, Canva and AI-assisted design tools.</p>
              <div className="hero-actions">
                <button className="button button-primary" onClick={() => goTo('work')}>Explore selected work <ArrowDownRight size={16} /></button>
                <button className="button button-quiet" onClick={() => goTo('contact')}>Get in touch <ArrowUpRight size={16} /></button>
              </div>
              <div className="hero-meta">
                <div><span className="meta-label">FOCUS</span><span>Brand · Graphic · Motion</span></div>
                <div><span className="meta-label">CURRENT FOCUS</span><span>Design & motion</span></div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-backdrop" />
              <div className="portrait-wrap">
                <div className="portrait-outline" />
                <img src="/assets/rashi-chugh-portrait.jpg" alt="Portrait of Rashi Chugh" className="portrait-image" loading="eager" fetchPriority="high" decoding="async" />
                <div className="portrait-caption"><span>THE PERSON<br />BEHIND THE PIXELS</span><span className="caption-star"><Asterisk size={23} /></span></div>
              </div>
              <div className="floating-note note-top"><Sparkles size={13} /> IDEAS INTO VISUALS</div>
              <div className="floating-note note-bottom">DESIGN / EDIT / REPEAT <span>✳</span></div>
              <div className="orb-holder"><ThreeAccent /></div>
              <div className="hero-side-index">RC — 2026</div>
            </div>
          </div>
          <div className="hero-scroll"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></div>
        </section>

        <div className="ticker" aria-label="Areas of creative practice">
          <div className="ticker-track"><span>GRAPHIC DESIGN</span><Asterisk /><span>VISUAL IDENTITY</span><Asterisk /><span>MOTION GRAPHICS</span><Asterisk /><span>VIDEO EDITING</span><Asterisk /><span>GRAPHIC DESIGN</span><Asterisk /><span>VISUAL IDENTITY</span><Asterisk /><span>MOTION GRAPHICS</span><Asterisk /><span>VIDEO EDITING</span><Asterisk /></div>
        </div>

        <section className="intro-section section-pad" id="about">
          <div className="section-kicker reveal"><span>01</span><span> A LITTLE ABOUT ME</span><i /></div>
          <div className="intro-layout">
            <div className="intro-side">
              <h2 className="intro-heading reveal">Curious by nature.<br /><em>Creative</em> by choice.</h2>
              <div className="about-visual reveal" aria-hidden="true">
                <div className="about-art-halo" />
                <div className="about-art-orbit about-art-orbit-one" />
                <div className="about-art-orbit about-art-orbit-two" />
                <div className="about-art-card">
                  <small>CREATIVE PRACTICE / 01</small>
                  <span className="about-art-monogram">R<span>.</span></span>
                  <i />
                  <strong>IDEAS INTO<br />IMAGES</strong>
                </div>
                <div className="about-art-orb"><span /></div>
                <span className="about-art-caption">COLOUR · FORM · STORY</span>
              </div>
            </div>
            <div className="intro-copy reveal">
              <p>I'm a Graphic Designer pursuing a <strong>Bachelor of Vocation (B.Voc)</strong>, with hands-on experience in graphic design, video editing and motion graphics. I work with Adobe Creative Suite, Canva and AI-assisted design workflows.</p>
              <p>My experience includes creating visual assets and a logo for Frykar, a cooking game project at Spectre Rex; designing custom client logos and a magazine cover through freelance work; and editing gaming videos for a YouTube channel. I enjoy bringing ideas to life through colour, typography, composition and movement.</p>
              <p>I also create social media creatives, promotional materials and other visual content, with attention to consistency, detail and the goals of each brief.</p>
              <a className="text-link" href="https://www.behance.net/rashichugh" target="_blank" rel="noreferrer">Explore my Behance <ArrowUpRight size={15} /></a>
            </div>
          </div>
          <div className="about-detail-grid reveal">
            <div className="about-detail about-detail-feature"><span className="detail-mark"><Palette size={20} /></span><div><small>MY CREATIVE LENS</small><strong>Colour, composition<br />& clear communication.</strong></div></div>
            <div className="about-detail"><small>WHAT I DO</small><strong>Graphic design<br />Video editing<br />Motion graphics</strong></div>
            <div className="about-detail"><small>HOW I WORK</small><strong>Curious, collaborative<br />and detail-oriented.</strong></div>
          </div>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="section-kicker reveal"><span>02</span><span> SELECTED WORK & PRACTICE</span><i /></div>
          <div className="section-heading-row reveal">
            <div><h2>Ideas in <em>progress.</em></h2><p>A selection of design and editing work described in my CV. Original artwork previews can be added as the project files are collected.</p></div>
            <span className="work-count">0{visibleProjects.length} / 04<br /><small>PROJECTS</small></span>
          </div>
          <div className="filter-row reveal" role="group" aria-label="Filter projects">
            {(['All', 'Branding', 'Graphic design', 'Motion & video'] as Category[]).map((item) => (
              <button key={item} className={`filter-chip ${category === item ? 'selected' : ''}`} onClick={() => setCategory(item)}>{item}<span>{item === 'All' ? '04' : item === 'Branding' ? '01' : item === 'Graphic design' ? '02' : '01'}</span></button>
            ))}
          </div>
          <div className="project-grid">
            {visibleProjects.map((project) => (
              <button key={project.id} className={`project-card project-card-${project.id} reveal`} onClick={() => setSelectedProject(project)}>
                <div className="project-art-wrap"><ProjectArtwork type={project.preview} /><span className="project-open"><ArrowUpRight size={18} /></span></div>
                <div className="project-info"><div><span className="project-label">{project.label}</span><h3>{project.title}</h3></div><span className="project-year">{project.year}</span></div>
              </button>
            ))}
          </div>
          <div className="work-note reveal"><span className="note-icon"><Asterisk size={18} /></span><p><strong>Artwork note</strong> — The graphic panels above are intentional placeholders, not representations of completed client artwork. Replace them with Rashi's original project files before publishing.</p></div>
        </section>

        <section className="skills-section section-pad" id="skills">
          <div className="section-kicker reveal"><span>03</span><span> TOOLS & EXPERTISE</span><i /></div>
          <div className="skills-layout">
            <div className="skills-lead reveal"><h2>Tools for the<br /><em>imagination.</em></h2><p>A mix of design craft, digital tools and an experimental mindset.</p></div>
            <div className="skills-content reveal">
              <div className="skill-tags">{skills.map((skill) => <span className="skill-tag" key={skill}>{skill}<ArrowUpRight size={12} /></span>)}</div>
              <div className="tools-heading"><span>CREATIVE TOOLKIT</span><i /></div>
              <div className="tool-list">{tools.map((tool) => <div className="tool-item" key={tool.name}><span className={`tool-icon tool-${tool.kind}`}>{tool.short}</span><span>{tool.name}</span><span className="tool-arrow"><ArrowUpRight size={14} /></span></div>)}</div>
            </div>
          </div>
        </section>

        <section className="journey-section section-pad" id="journey">
          <div className="section-kicker reveal"><span>04</span><span> EXPERIENCE & EDUCATION</span><i /></div>
          <div className="journey-layout">
            <div className="journey-heading reveal"><h2>Learning.<br /><em>Making.</em><br />Evolving.</h2><p>Each project is another opportunity to turn curiosity into craft.</p></div>
            <div className="timeline">
              <article className="timeline-item reveal"><div className="timeline-date">JULY 2026 — PRESENT <span className="timeline-dot current" /></div><div className="timeline-body"><span className="timeline-type">INTERNSHIP</span><h3>Graphic Design Intern</h3><p className="timeline-place">Spectre Rex</p><ul><li>Designed visual assets for Frykar, a cooking game project, using Adobe Photoshop and Adobe Illustrator.</li><li>Created the logo for the Frykar game project.</li><li>Created game assets with attention to style consistency, detail and visual quality.</li><li>Revised and refined assets based on feedback to meet project requirements.</li><li>Managed time effectively to deliver design work within internship deadlines.</li></ul></div></article>
              <article className="timeline-item reveal"><div className="timeline-date">2025 — PRESENT <span className="timeline-dot" /></div><div className="timeline-body"><span className="timeline-type">FREELANCE</span><h3>Freelance Graphic Designer & Video Editor</h3><p className="timeline-place">Independent projects</p><ul><li>Designed custom logos for clients using Adobe Illustrator and Photoshop.</li><li>Created a magazine cover design with a strong focus on typography and layout.</li><li>Applied branding, colour theory and design principles to create effective visuals.</li><li>Communicated directly with clients to understand project goals and expectations.</li><li>Edited gaming videos for a YouTube gaming channel using Adobe After Effects.</li></ul></div></article>
              <article id="education" className="timeline-item education-item reveal"><div className="timeline-date">2025 — PRESENT <span className="timeline-dot" /></div><div className="timeline-body"><span className="timeline-type">HIGHER EDUCATION · IN PROGRESS</span><h3>Bachelor of Vocation (B.Voc)</h3><p className="timeline-place">Jagannath University & Arena Animation</p><p className="timeline-description">2025 – Present · Currently pursuing</p></div></article>
              <article className="timeline-item education-item reveal"><div className="timeline-date">2024 — 2025 <span className="timeline-dot" /></div><div className="timeline-body"><span className="timeline-type">SCHOOL EDUCATION</span><h3>CBSE Board · Class XII</h3><p className="timeline-place">2024–2025</p></div></article>
              <article className="timeline-item education-item reveal"><div className="timeline-date">2022 — 2023 <span className="timeline-dot" /></div><div className="timeline-body"><span className="timeline-type">SCHOOL EDUCATION</span><h3>CBSE Board · Class X</h3><p className="timeline-place">2022–2023</p></div></article>
            </div>
          </div>
        </section>

        <section className="language-strip section-pad reveal"><div><span>LANGUAGES</span><strong>English <i /> Hindi</strong></div><span className="language-note">GOOD DESIGN SPEAKS IN EVERY LANGUAGE.</span></section>

        <section className="contact-section section-pad" id="contact">
          <div className="contact-kicker reveal"><span>05 / SAY HELLO</span><Sparkles size={16} /></div>
          <div className="contact-main reveal"><h2>Have a good<br /><em>idea?</em> Let's make it.</h2><a href={`mailto:${email}`} className="contact-round-link" aria-label="Email Rashi"><ArrowUpRight size={32} /></a></div>
          <div className="contact-bottom reveal">
            <p>For creative collaborations, freelance projects or just a conversation about design — I'd love to hear from you.</p>
            <div className="contact-side">
              <div className="contact-links">
                <a href={`mailto:${email}`}><Mail size={15} /> {email} <ArrowUpRight size={13} /></a>
                <a href="tel:+919728326661"><Phone size={15} /> 97283-26661 <ArrowUpRight size={13} /></a>
                <a href="https://www.behance.net/rashichugh" target="_blank" rel="noreferrer"><ExternalLink size={15} /> Behance portfolio <ArrowUpRight size={13} /></a>
              </div>
              <form className="contact-form" onSubmit={submitContact}>
                <div className="contact-form-row">
                  <label>Your name<input name="name" autoComplete="name" placeholder="Name" required /></label>
                  <label>Your email<input name="senderEmail" type="email" autoComplete="email" placeholder="Email address" required /></label>
                </div>
                <label>Your message<textarea name="message" rows={3} placeholder="Tell me a little about your idea..." required /></label>
                <button className="button button-primary contact-submit" type="submit">Prepare email <Send size={14} /></button>
                <p className="form-note">This opens your default email app. No message is stored on this website.</p>
              </form>
            </div>
          </div>
          <div className="contact-copy-row"><button onClick={copyEmail} className="copy-email">{copiedEmail ? <Check size={14} /> : <Mail size={14} />}{copiedEmail ? 'Email copied' : 'Copy email address'}</button><a className="download-cv" href="/assets/rashi-chugh-cv.pdf" download>Download CV <ArrowDown size={14} /></a></div>
        </section>
      </main>

      <footer className="site-footer"><a className="footer-brand" href="#home" onClick={(event) => { event.preventDefault(); goTo('home') }}>R<span>.</span></a><span>DESIGNED WITH INTENTION · RASHI CHUGH © 2026</span><button onClick={() => goTo('home')}>BACK TO TOP <ArrowUpRight size={13} /></button></footer>

      <div className={`mobile-menu-backdrop ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen} onClick={() => setMenuOpen(false)}>
        <nav className="mobile-menu-panel" aria-label="Mobile navigation" inert={!menuOpen} onClick={(event) => event.stopPropagation()}>
          <div className="mobile-menu-heading"><span>EXPLORE THE PORTFOLIO</span><button className="mobile-menu-close" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X size={20} /></button></div>
          {[
            ['01', 'About', 'about'], ['02', 'Selected work', 'work'], ['03', 'Skills & tools', 'skills'],
            ['04', 'Experience', 'journey'], ['05', 'Education', 'education'], ['06', 'Contact', 'contact'],
          ].map(([number, label, id]) => (
            <a href={`#${id}`} key={id} onClick={(event) => { event.preventDefault(); goTo(id) }}>
              <span className="mobile-menu-link-label"><small>{number}</small>{label}</span><ArrowUpRight size={19} />
            </a>
          ))}
          <div className="mobile-menu-footer"><span>RASHI CHUGH</span><span>DESIGN · MOTION · STORY</span></div>
        </nav>
      </div>

      {selectedProject && <div className="modal-backdrop modal-enter" onClick={() => setSelectedProject(null)}>
        <div className="project-modal modal-card-enter" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(event) => event.stopPropagation()}>
          <button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close project details"><X size={19} /></button>
          <div className="modal-art"><ProjectArtwork type={selectedProject.preview} /></div>
          <div className="modal-copy"><span className="project-label">{selectedProject.label} · {selectedProject.year}</span><h2 id="modal-title">{selectedProject.title}</h2><p>{selectedProject.description}</p><ul>{selectedProject.details.map((detail) => <li key={detail}>{detail}</li>)}</ul><div className="modal-warning">Original project images and final artwork are not included in the supplied CV. Add approved project files here before publishing.</div></div>
        </div>
      </div>}

      {showTop && <button className="back-top back-top-enter" onClick={() => goTo('home')} aria-label="Back to top"><CircleArrowUp size={19} /></button>}
    </div>
  )
}

export default App
