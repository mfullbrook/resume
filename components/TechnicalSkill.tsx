import { Badge } from "@/components/ui/badge";

interface TechnicalSkillProps {
  name: string;
}

export function TechnicalSkill({ name }: TechnicalSkillProps) {
  return (
    <Badge 
      variant="secondary" 
      className="bg-violet-100 dark:bg-violet-900/30 hover:bg-violet-200 dark:hover:bg-violet-900/40"
    >
      {name}
    </Badge>
  );
}