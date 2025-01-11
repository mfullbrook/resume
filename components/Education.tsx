import type { Education as EducationType } from '@/data';

interface EducationProps {
  education: EducationType;
}

export function Education({
  education: { qualification, institution, dates },
}: EducationProps) {
  return (
    <div className="rounded-xl bg-card p-6 shadow-sm border border-border">
      <div className="flex flex-wrap justify-between gap-4">
        <div>
          <h4 className="text-xl font-semibold">{qualification}</h4>
          <p className="text-violet-500 dark:text-violet-400 font-medium">{institution}</p>
        </div>
        <div className="text-right">
          <div className="text-muted-foreground">{dates}</div>
        </div>
      </div>
    </div>
  );
}
