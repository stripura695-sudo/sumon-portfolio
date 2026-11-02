import {
  ArrowDown,
  ArrowUpRight,
  Briefcase,
  Code2,
  Download,
  GitBranch,
  GraduationCap,
  Mail,
  MapPin,
} from 'lucide-react';
import Image from 'next/image';
import { NAV_LINKS, RESUME_URL, SITE_CONFIG } from '@/data/constants';
import { PROJECTS_DATA } from '@/data/projects';
import { SKILLS_DATA } from '@/data/skills';
import ThemeToggle from '@/components/ui/ThemeToggle';
import MobileNav from '@/components/layout/MobileNav';

const education = [
  {
    period: 'May 2023 — Present',
    qualification: 'Bachelor of Business Administration',
    subject: 'Finance and Banking',
    institution: 'Government College of Commerce · National University',
    status: 'Undergraduate',
  },
  {
    period: '2023',
    qualification: 'Higher Secondary Certificate',
    subject: 'Business Studies · GPA 3.83 / 5.00',
    institution: 'Nizampur Government College',
  },
  {
    period: '2021',
    qualification: 'Secondary School Certificate',
    subject: 'Business Studies · GPA 3.50 / 5.00',
    institution: 'Mirsarai Government Model High School',
  },
];

const experience = {
  period: 'August 2025 — August 2026',
  role: 'Team Member',
  company: 'KFC Bangladesh',
  location: 'Chattogram, Bangladesh',
  responsibilities: [
    'Support daily operations and prepare documentation and reports.',
    'Help coordinate with team members and maintain official records.',
  ],
};

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="section-title">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function ProjectPreview({ kind }) {
  return (
    <div className={`project-preview project-preview-${kind}`} aria-hidden="true">
      <div className="preview-toolbar">
        <span />
        <span />
        <span />
        <div className="preview-address" />
      </div>
      {kind === 'restaurant' ? (
        <div className="restaurant-preview">
          <div className="preview-brand">RESTAURANT WEBSITE</div>
          <div className="preview-hero">
            <span>GOOD FOOD. GOOD MOOD.</span>
            <i />
          </div>
          <div className="preview-menu">
            <i />
            <i />
            <i />
          </div>
        </div>
      ) : (
        <div className="movie-preview">
          <div className="movie-preview-heading">
            <span>DISCOVER SOMETHING TO WATCH</span>
            <i />
          </div>
          <div className="movie-posters">
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="nav-shell">
          <a className="brand" href="#home" aria-label="Sumon Tripura, home">
            <span className="brand-mark">ST</span>
            <span>Sumon Tripura</span>
          </a>
          <nav className="nav-links" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <MobileNav />
          <a className="nav-contact" href="#contact">
            Let&apos;s connect <ArrowUpRight size={15} />
          </a>
          <ThemeToggle />
        </div>
      </header>

      <main id="home">
        <section className="hero-section">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="availability">
                <span className="availability-dot" />
                Open to entry-level opportunities
              </div>
              <p className="hero-intro">Hello, I&apos;m</p>
              <h1>
                Sumon
                <br />
                <span>Tripura.</span>
              </h1>
              <p className="hero-role">
                BBA student <span>·</span> Finance &amp; Banking
              </p>
              <p className="hero-description">
                I&apos;m building a career at the intersection of business,
                finance, and technology. Currently studying Finance and Banking
                while gaining hands-on experience in team operations at KFC
                Bangladesh.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  Explore my projects <ArrowDown size={16} />
                </a>
                <a className="button button-secondary" href={RESUME_URL} download>
                  <Download size={16} /> Download CV
                </a>
              </div>
              <div className="hero-socials">
                <a
                  href={SITE_CONFIG.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                >
                  <GitBranch size={17} /> GitHub
                </a>
                <a
                  href={SITE_CONFIG.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                >
                  in LinkedIn <ArrowUpRight size={14} />
                </a>
                <span>
                  <MapPin size={15} /> Mirsarai, Chattogram
                </span>
              </div>
            </div>

            <aside className="profile-card" aria-label="A quick introduction">
              <div className="profile-card-top">
                <span className="profile-kicker">A LITTLE ABOUT ME</span>
                <span className="profile-stamp">ST.</span>
              </div>
              <div className="profile-photo">
                <Image
                  src="/profile.png"
                  alt="Sumon Tripura"
                  width={768}
                  height={1024}
                  priority
                />
              </div>
              <div className="profile-card-bottom">
                <div>
                  <span className="profile-label">CURRENTLY</span>
                  <strong>Learning. Working. Growing.</strong>
                </div>
                <div className="profile-location">
                  <MapPin size={16} />
                  <span>Chattogram, Bangladesh</span>
                </div>
              </div>
              <span className="profile-decoration" aria-hidden="true">
                ✳
              </span>
            </aside>
          </div>
          <a className="scroll-cue" href="#about">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={14} />
          </a>
        </section>

        <section className="about-section section-wrap" id="about">
          <div className="about-heading">
            <SectionTitle eyebrow="01 / ABOUT" title="Grounded in business." />
          </div>
          <div className="about-content">
            <p className="about-lead">
              I&apos;m a Finance and Banking student who believes good work
              starts with curiosity, responsibility, and a willingness to
              learn.
            </p>
            <p>
              At Government College of Commerce, I&apos;m building a foundation
              in business and finance. At KFC Bangladesh, I put communication,
              coordination, and day-to-day operations into practice. Outside
              the classroom, I explore those interests through practical web
              projects—from a restaurant website to a movie and TV discovery
              app.
            </p>
            <div className="about-note">
              <Code2 size={18} />
              <span>
                Interested in entry-level opportunities where I can contribute,
                learn, and grow.
              </span>
            </div>
          </div>
        </section>

        <section className="experience-section section-wrap" id="experience">
          <SectionTitle
            eyebrow="02 / EXPERIENCE"
            title="Learning by doing."
            description="Practical experience in a fast-paced team environment."
          />
          <article className="experience-card">
            <div className="experience-date">
              <span className="timeline-dot" />
              <span>{experience.period}</span>
            </div>
            <div className="experience-main">
              <div className="experience-heading">
                <div className="experience-icon">
                  <Briefcase size={19} />
                </div>
                <div>
                  <h3>{experience.role}</h3>
                  <p>{experience.company}</p>
                </div>
                <span className="experience-type">CURRENT ROLE</span>
              </div>
              <p className="experience-location">
                <MapPin size={14} /> {experience.location}
              </p>
              <ul>
                {experience.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </article>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-wrap">
            <SectionTitle
              eyebrow="03 / SELECTED PROJECTS"
              title="Ideas made practical."
              description="Independent projects that let me explore web development and build useful experiences."
            />
            <div className="projects-grid">
              {PROJECTS_DATA.map((project, index) => (
                <article className="project-card" key={project.id}>
                  <ProjectPreview kind={project.preview} />
                  <div className="project-content">
                    <div className="project-meta">
                      <span>0{index + 1}</span>
                      <span>{project.category}</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <ul className="tag-list" aria-label="Technologies used">
                      {project.technologies.map((technology) => (
                        <li key={technology}>{technology}</li>
                      ))}
                    </ul>
                    <a
                      className="project-link"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View source on GitHub <ArrowUpRight size={16} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <a
              className="all-projects-link"
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noreferrer"
            >
              See all repositories <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        <section className="skills-section section-wrap" id="skills">
          <SectionTitle
            eyebrow="04 / SKILLS"
            title="What I bring."
            description="A growing mix of business knowledge, practical experience, and digital skills."
          />
          <div className="skills-grid">
            {Object.entries(SKILLS_DATA).map(([category, skills], index) => (
              <article className="skill-card" key={category}>
                <span className="skill-number">0{index + 1}</span>
                <h3>{category}</h3>
                <ul className="tag-list">
                  {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="languages-line">
            <span>LANGUAGES</span>
            <p>
              <strong>Bangla</strong> Native <i /> <strong>English</strong> Good
              working command
            </p>
          </div>
        </section>

        <section className="education-section" id="education">
          <div className="section-wrap">
            <SectionTitle
              eyebrow="05 / EDUCATION"
              title="A foundation for what&apos;s next."
              description="My academic journey in business and finance."
            />
            <div className="education-list">
              {education.map((item, index) => (
                <article className="education-item" key={item.qualification}>
                  <span className="education-index">0{index + 1}</span>
                  <div className="education-icon">
                    <GraduationCap size={20} />
                  </div>
                  <div className="education-copy">
                    <span className="education-period">{item.period}</span>
                    <h3>{item.qualification}</h3>
                    <p className="education-subject">{item.subject}</p>
                    <p className="education-institution">{item.institution}</p>
                  </div>
                  {item.status && (
                    <span className="education-status">{item.status}</span>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-card">
            <div className="contact-copy">
              <p className="eyebrow">06 / CONTACT</p>
              <h2>Let&apos;s start a conversation.</h2>
              <p>
                Interested in working together or have an opportunity to
                discuss? I&apos;d be glad to hear from you.
              </p>
              <a className="button button-light" href={`mailto:${SITE_CONFIG.email}`}>
                <Mail size={17} /> {SITE_CONFIG.email}
              </a>
            </div>
            <div className="contact-details">
              <a href={SITE_CONFIG.linkedin} target="_blank" rel="noreferrer">
                <span>LINKEDIN</span>
                <strong>Connect with me</strong>
                <ArrowUpRight size={17} />
              </a>
              <a href={SITE_CONFIG.github} target="_blank" rel="noreferrer">
                <span>GITHUB</span>
                <strong>Explore my repositories</strong>
                <ArrowUpRight size={17} />
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Mirsarai%2C%20Chattogram%2C%20Bangladesh"
                target="_blank"
                rel="noreferrer"
              >
                <span>LOCATION</span>
                <strong>Mirsarai, Chattogram, Bangladesh</strong>
                <MapPin size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand" href="#home">
          <span className="brand-mark">ST</span>
          <span>Sumon Tripura</span>
        </a>
        <p>Business student. Curious builder. Always learning.</p>
        <a className="back-to-top" href="#home">
          Back to top <ArrowUpRight size={14} />
        </a>
      </footer>
    </>
  );
}
