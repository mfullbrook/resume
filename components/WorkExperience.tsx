import { MapPin } from 'lucide-react';
import { TechnicalSkill } from './TechnicalSkill';
import type { Experience } from '@/data';
import { warnOptionHasBeenMovedOutOfExperimental } from 'next/dist/server/config';

interface WorkExperienceProps {
  experience: Experience;
}

export function WorkExperience({
  experience: { title, company, overview, location, dates, skills, achievements },
}: WorkExperienceProps) {
  return (
    <div className="rounded-xl bg-card p-6 shadow-sm border border-border">
      <div className="flex flex-wrap justify-between gap-4 mb-4">
        <div>
          <h4 className="text-xl font-semibold">{title}</h4>
          <p className="text-violet-500 dark:text-violet-400 font-medium">{company}</p>
        </div>
        <div className="text-right">
          <div className="text-muted-foreground">{dates}</div>
          <div className="flex justify-end items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            {location}
          </div>
        </div>
        <p className="text-muted-foreground text-sm -mt-2 mb-2">{overview}</p>
      </div>

      {skills && skills.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill, idx) => (
            <TechnicalSkill key={`skill-${idx}`} name={skill} />
          ))}
        </div>
      )}

      {achievements && achievements.length > 0 && (
        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
          {achievements.map((achievement, idx) => (
            <li key={`achievement-${idx}`}>{achievement}</li>
          ))}
        </ul>
      )}
    </div>
  );
}