import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { getImageProps } from 'next/image'
import { Education } from '@/components/Education'
import { MailTo } from '@/components/MailTo'
import { TechnicalSkill } from '@/components/TechnicalSkill'
import { WorkExperience } from '@/components/WorkExperience'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { aboutMe, educations, experiences, header, profile, technicalDepth } from '@/data'

function SectionHeading({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <div className="section-heading print:break-after-avoid">
      <span>{eyebrow}</span>
      <h2>{children}</h2>
    </div>
  )
}

export default function Resume() {
  const avatarProps = getImageProps({
    width: 320,
    height: 320,
    src: header.avatarPath,
    alt: header.name,
  })

  return (
    <main className="resume-shell">
      <div className="resume-frame">
        <header className="hero">
          <div className="hero-topline" aria-hidden="true">
            <span>Technology leadership</span>
            <span>London · 2026</span>
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="hero-kicker">Technology &amp; AI Engineering Leader</p>
              <h1>
                {header.name.split(' ')[0]}
                <br />
                <span>{header.name.split(' ').slice(1).join(' ')}</span>
              </h1>
              <p className="hero-summary">{header.summary}</p>
            </div>

            <div className="portrait-wrap">
              <div className="portrait-index">MF / 01</div>
              <Avatar className="portrait">
                <AvatarImage {...avatarProps.props} />
                <AvatarFallback>
                  {header.name
                    .split(' ')
                    .map((name) => name[0])
                    .join('')}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>

          <nav className="contact-strip" aria-label="Contact links">
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
          <aside className="profile-column">
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

            <section className="skills-section">
              <SectionHeading eyebrow="03 / Practice">Technical depth</SectionHeading>
              <div className="skill-cloud">
                {technicalDepth.map((skill) => (
                  <TechnicalSkill key={skill} name={skill} />
                ))}
              </div>
            </section>

            <section className="education-section">
              <SectionHeading eyebrow="04 / Foundation">Education</SectionHeading>
              {educations.map((education) => (
                <Education key={education.qualification} education={education} />
              ))}
            </section>
          </div>
        </div>

        <section className="perspective-section">
          <SectionHeading eyebrow="05 / Perspective">Beyond the job title</SectionHeading>
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
          <p>Technology, people &amp; useful systems.</p>
          <a href="#top">Back to top ↑</a>
        </footer>
      </div>
    </main>
  )
}
