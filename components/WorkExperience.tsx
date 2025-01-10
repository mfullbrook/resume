import { MapPin } from 'lucide-react';
import { TechnicalSkill } from './TechnicalSkill';

interface WorkExperienceProps {
  title: string;
  company: string;
  location: string;
  dates: string;
  skills: string[];
  achievements: string[];
}

export function WorkExperience({
  title,
  company,
  location,
  dates,
  skills,
  achievements,
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
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            {location}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill) => (
          <TechnicalSkill key={skill} name={skill} />
        ))}
      </div>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
        {achievements.map((achievement) => (
          <li key={achievement}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
}