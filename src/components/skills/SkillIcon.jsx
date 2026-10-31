import { siDocker, siDjango, siFlutter, siGithub, siJavascript, siLaravel, siMysql, siNginx, siOpenapiinitiative, siReact, siSpringboot } from "simple-icons";
import { skillIcons } from "../../data/portfolio.js";

export default function SkillIcon({ name }) {
  const icon = skillIcons[name];
  if (!icon) {
    return <svg viewBox="0 0 32 32" role="img" aria-label="AWS icon" className="h-6 w-6 fill-none stroke-current stroke-[1.8]">
      <text x="16" y="20" textAnchor="middle" className="fill-current stroke-none text-[12px] font-bold">aws</text>
      <path d="M7 24c6 4 13 4 19 0" />
    </svg>;
  }
  return <svg viewBox="0 0 24 24" role="img" aria-label={`${name} icon`} className="h-6 w-6 fill-current">
    <path d={icon.path} />
  </svg>;
}
