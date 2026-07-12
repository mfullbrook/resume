import type { Education as EducationType } from '@/data'

interface EducationProps {
  education: EducationType
}

export function Education({ education: { qualification, institution, dates } }: EducationProps) {
  return (
    <article className="education-item print:break-inside-avoid">
      <p>{dates}</p>
      <div>
        <h3>{qualification}</h3>
        <p>{institution}</p>
      </div>
    </article>
  )
}
