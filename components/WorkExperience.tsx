import { MapPin } from 'lucide-react'
import type { Experience } from '@/data'
import { TechnicalSkill } from './TechnicalSkill'

interface WorkExperienceProps {
  experience: Experience
}

export function WorkExperience({
  experience: { title, company, overview, location, dates, skills, achievements },
}: WorkExperienceProps) {
  return (
    <article className="experience-item print:break-inside-avoid">
      <div className="experience-marker" aria-hidden="true" />
      <div className="experience-meta">
        <p className="experience-date">{dates}</p>
        {location && (
          <p className="experience-location">
            <MapPin aria-hidden="true" />
            {location}
          </p>
        )}
      </div>
      <div className="experience-body">
        <h3>{title}</h3>
        {company && <p className="experience-company">{company}</p>}
        {overview && <p className="experience-overview">{overview}</p>}

        {achievements && achievements.length > 0 && (
          <ul className="achievement-list">
            {achievements.map((achievement, index) =>
              typeof achievement === 'object' ? (
                <li key={index}>
                  {achievement.item}
                  <ul>
                    {achievement.subitems.map((subitem) => (
                      <li key={subitem}>{subitem}</li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={achievement}>{achievement}</li>
              )
            )}
          </ul>
        )}

        {skills && skills.length > 0 && (
          <div className="experience-skills" aria-label="Skills used">
            {skills.map((skill) => (
              <TechnicalSkill key={skill} name={skill} />
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
