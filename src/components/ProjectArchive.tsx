import { archivedProjects, type Project, type WebProject } from "../data/projects";
import { useLanguage } from "../hooks/useLanguage";

function WebArchiveRow({ project, index, startIndex, t }: { project: WebProject; index: number; startIndex: number; t: (key: string) => string }) {
  const details = project.web;

  return (
    <article className="border-b border-line py-6">
      <div className="grid gap-5 lg:grid-cols-[3rem_minmax(0,1.15fr)_minmax(12rem,0.85fr)_minmax(12rem,0.85fr)] lg:items-start">
        <span className="font-mono text-xs text-muted">{String(index + startIndex + 1).padStart(2, "0")}</span>
        <div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <h4 className="font-semibold text-ink">{project.title}</h4>
            <span className="font-mono text-xs uppercase text-signal">{project.year}</span>
            <span className="font-mono text-xs uppercase text-signal">{t(`web.status.${details.status}`)}</span>
          </div>
          <p className="mt-3 text-sm leading-6 text-muted">{t(`projects.${project.id}.summary`)}</p>
        </div>
        <div>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">{t("web.problem")}</p>
          <p className="mt-2 text-sm leading-6 text-ink">{t(details.problemKey)}</p>
        </div>
        <div>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">{t("web.role")}</p>
          <p className="mt-2 text-sm leading-6 text-ink">{t(details.roleKey)}</p>
        </div>
      </div>
      <div className="mt-5 grid gap-5 border-t border-line pt-5 sm:grid-cols-2 lg:grid-cols-[3rem_minmax(0,1fr)_minmax(0,1fr)_minmax(13rem,0.7fr)]">
        <span className="font-mono text-xs uppercase text-muted">{t("category.web")}</span>
        <div>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">{t("web.features")}</p>
          <p className="mt-2 text-sm leading-6 text-ink">{t(details.featuresKey)}</p>
        </div>
        <div>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">{t("case.tools")}</p>
          <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted" aria-label={t("case.tools")}>
            {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
        </div>
        <div className="font-mono text-xs uppercase tracking-[0.12em]">
          <p className="text-muted">{t("web.preview")}</p>
          {details.screenshot ? (
            <img src={details.screenshot.src} alt={t(details.screenshot.altKey)} loading="lazy" className="mt-3 aspect-video w-full border border-line object-contain" />
          ) : (
            <p className="mt-3 text-caution">{t("web.previewPending")}</p>
          )}
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
            {details.liveDemo ? (
              <a href={details.liveDemo} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center text-signal underline-offset-4 hover:underline">{t("web.demo")}</a>
            ) : (
              <span className="text-caution">{t("web.demoPending")}</span>
            )}
            {details.repository ? (
              <a href={details.repository} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center text-signal underline-offset-4 hover:underline">{t("web.source")}</a>
            ) : (
              <span className="text-caution">{t("web.sourcePending")}</span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ProjectArchive({ projects = archivedProjects, startIndex = 0 }: { projects?: readonly Project[]; startIndex?: number }) {
  const { t } = useLanguage();

  if (projects.length === 0) return <p className="border-t border-line py-5 text-muted">{t("work.empty")}</p>;

  return (
    <div className="border-t border-line">
      {projects.map((project, index) => (
        project.type === "web" ? (
          <WebArchiveRow key={project.id} project={project} index={index} startIndex={startIndex} t={t} />
        ) : (
          <article key={project.id} className="grid gap-3 border-b border-line py-5 md:grid-cols-[3rem_1fr_5rem_7rem_1.2fr] md:items-center">
            <span className="font-mono text-xs text-muted">{String(index + startIndex + 1).padStart(2, "0")}</span>
            <h4 className="font-semibold text-ink">{project.title}</h4>
            <span className="font-mono text-xs uppercase text-signal">{project.year}</span>
            <span className="font-mono text-xs uppercase text-muted">{t(`category.${project.category}`)}</span>
            <p className="text-sm leading-6 text-muted">{t(`projects.${project.id}.summary`)}</p>
          </article>
        )
      ))}
    </div>
  );
}
