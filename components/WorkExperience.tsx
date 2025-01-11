import { MapPin } from 'lucide-react'
import { TechnicalSkill } from './TechnicalSkill'
import type { Experience } from '@/data'

interface WorkExperienceProps {
  experience: Experience
}

export function WorkExperience({
  experience: { title, company, overview, location, dates, skills, achievements },
}: WorkExperienceProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <div className="mb-4 flex flex-wrap justify-between gap-4">
        <div>
          <h4 className="text-xl font-semibold">{title}</h4>
          <p className="font-medium text-violet-500 dark:text-violet-400">{company}</p>
        </div>
        <div className="text-right text-sm">
          <div className="text-muted-foreground">{dates}</div>
          <div className="flex items-center justify-end gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            {location}
          </div>
        </div>
      </div>
      <p className="-mt-2 mb-2 text-sm text-muted-foreground">{overview}</p>

      {skills && skills.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <TechnicalSkill key={`skill-${idx}`} name={skill} />
          ))}
        </div>
      )}

      {achievements && achievements.length > 0 && (
        <ul className="ml-2 list-outside list-disc space-y-2 text-muted-foreground pl-5">
          {achievements.map((achievement, idx) => (
            typeof achievement === 'object' ? (
              <li key={`achievement-${idx}`}>
                {achievement.item}
                <ul className="ml-2 list-outside list-disc space-y-2 text-muted-foreground pl-5">
                  {achievement.subitems.map((subitem, subIdx) => (
                    <li key={`subachievement-${idx}-${subIdx}`}>{subitem}</li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={`achievement-${idx}`}>{achievement}</li>
            )
          ))}
        </ul>
      )}
    </div>
  )
}
