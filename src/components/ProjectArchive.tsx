import { archivedProjects } from "../data/projects";
import { useLanguage } from "../hooks/useLanguage";

export default function ProjectArchive() {
  const { t } = useLanguage();

  return (
    <div className="border-t border-line">
      {archivedProjects.map((project, index) => (
        <article key={project.id} className="grid gap-3 border-b border-line py-5 md:grid-cols-[3rem_1fr_5rem_7rem_1.2fr] md:items-center">
          <span className="font-mono text-xs text-muted">{String(index + 3).padStart(2, "0")}</span>
          <h4 className="font-semibold text-ink">{project.title}</h4>
          <span className="font-mono text-xs uppercase text-signal">{project.year}</span>
          <span className="font-mono text-xs uppercase text-muted">{t(`category.${project.category}`)}</span>
          <p className="text-sm leading-6 text-muted">{t(`projects.${project.id}.summary`)}</p>
        </article>
      ))}
    </div>
  );
}
