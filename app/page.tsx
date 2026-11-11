import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import Image from 'next/image'
import { Education } from '@/components/Education'
import { MailTo } from '@/components/MailTo'
import { StickyNavigation } from '@/components/StickyNavigation'
import { TechnicalSkill } from '@/components/TechnicalSkill'
import { WorkExperience } from '@/components/WorkExperience'
import {
  aboutMe,
  educations,
  experiences,
  header,
  openSource,
  profile,
  technicalDepth,
} from '@/data'

function SectionHeading({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <div className="section-heading print:break-after-avoid">
      <span>{eyebrow}</span>
      <h2>{children}</h2>
    </div>
  )
}

export default function Resume() {
  return (
    <main className="resume-shell">
      <StickyNavigation />
      <div className="resume-frame">
        <header className="hero">
          <div className="hero-topline" aria-hidden="true">
            <span>Production AI engineering</span>
            <span>London · 2026</span>
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="hero-kicker">{header.title}</p>
              <h1>
                {header.name.split(' ')[0]}
                <br />
                <span>{header.name.split(' ').slice(1).join(' ')}</span>
              </h1>
              <p className="hero-summary">{header.summary}</p>
            </div>

            <div className="portrait-wrap">
              <div className="portrait-index">MF / 01</div>
              <div className="portrait">
                <Image
                  src={header.avatarPath}
                  alt={header.name}
                  width={420}
                  height={525}
                  priority
                  sizes="(max-width: 900px) min(70vw, 340px), 340px"
                />
              </div>
            </div>
          </div>

          <nav id="contact-strip" className="contact-strip" aria-label="Contact links">
            <MailTo
              encodedEmail={header.emailBase64}
              className="contact-link"
              prefix={<Mail aria-hidden="true" />}
            />
            <a
              href={`https://github.com/${header.githubHandle}`}
              className="contact-link"
              target="_blank"
              rel="noreferrer"
            >
              <Github aria-hidden="true" />
              GitHub
              <ArrowUpRight className="contact-arrow" aria-hidden="true" />
            </a>
            <a
              href={`https://linkedin.com/in/${header.linkedinHandle}`}
              className="contact-link"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin aria-hidden="true" />
              LinkedIn
              <ArrowUpRight className="contact-arrow" aria-hidden="true" />
            </a>
            <span className="contact-link contact-location">
              <MapPin aria-hidden="true" />
              {header.location}
            </span>
          </nav>
        </header>

        <div className="content-grid">
          <aside id="profile" className="profile-column">
            <SectionHeading eyebrow="01 / Profile">Selected impact</SectionHeading>
            <ol className="impact-list">
              {profile.map((item, index) => (
                <li key={item.heading}>
                  <span className="impact-number">{String(index + 1).padStart(2, '0')}</span>
                  <p>
                    <strong>{item.heading}</strong>
                    {item.content}
                  </p>
                </li>
              ))}
            </ol>
            <p className="print-web-callout hidden print:block">
              For the best experience, view the online CV at{' '}
              <a href="https://cv.fullbrook.me/">cv.fullbrook.me</a>.
            </p>
          </aside>

          <div className="main-column">
            <section id="experience">
              <SectionHeading eyebrow="02 / Career">Experience</SectionHeading>
              <div className="experience-list">
                {experiences.map((experience) => (
                  <WorkExperience
                    key={`${experience.title}-${experience.company ?? 'career'}`}
                    experience={experience}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>

        <section id="technical-depth" className="skills-section full-width-section">
          <SectionHeading eyebrow="03 / Practice">Selected technical experience</SectionHeading>
          <div className="technical-groups">
            {technicalDepth.map((group) => (
              <section className="technical-group" key={group.title}>
                <h3>{group.title}</h3>
                <div className="skill-cloud">
                  {group.skills.map((skill) => (
                    <TechnicalSkill key={skill} name={skill} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section id="open-source" className="skills-section full-width-section">
          <SectionHeading eyebrow="04 / Projects">Personal projects and open source</SectionHeading>
          <div className="technical-groups open-source-groups">
            {openSource.map((project) => (
              <section className="technical-group open-source-item" key={project.name}>
                <h3>
                  {project.href ? (
                    <a href={project.href} target="_blank" rel="noreferrer">
                      {project.name}
                      <ArrowUpRight aria-hidden="true" />
                    </a>
                  ) : (
                    project.name
                  )}
                </h3>
                {project.repo && <p className="open-source-repo">{project.repo}</p>}
                <p className="open-source-description">{project.description}</p>
              </section>
            ))}
          </div>
        </section>

        <section id="education" className="education-section full-width-section">
          <SectionHeading eyebrow="05 / Foundation">Education</SectionHeading>
          {educations.map((education) => (
            <Education key={education.qualification} education={education} />
          ))}
        </section>

        <section id="perspective" className="perspective-section">
          <SectionHeading eyebrow="06 / Perspective">Beyond the job title</SectionHeading>
          <div className="perspective-grid">
            {aboutMe.map((item, index) => (
              <article key={item.headline}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.headline}</h3>
                <p>{item.content}</p>
              </article>
            ))}
          </div>
        </section>

        <footer className="site-footer">
          <p>Mark Fullbrook</p>
          <p>Software engineering and applied AI</p>
          <a href="#top">Back to top ↑</a>
        </footer>
      </div>
    </main>
  )
}
