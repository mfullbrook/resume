interface TechnicalSkillProps {
  name: string
}

export function TechnicalSkill({ name }: TechnicalSkillProps) {
  return <span className="skill-tag">{name}</span>
}
