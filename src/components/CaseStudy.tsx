import type { FeaturedDataProject } from "../data/projects";
import { useLanguage } from "../hooks/useLanguage";
import EvidencePanel from "./EvidencePanel";

export default function CaseStudy({ project, reverse, displayIndex = project.featured }: { project: FeaturedDataProject; reverse: boolean; displayIndex?: number }) {
  const { t } = useLanguage();
  const setupFields = [
    ["case.question", `projects.${project.id}.question`],
    ["case.role", `projects.${project.id}.role`],
    ["case.method", `projects.${project.id}.method`],
  ];
  const detailColumn = reverse ? "lg:col-start-1" : "lg:col-start-2";
  const evidenceColumn = reverse ? "lg:col-start-2" : "lg:col-start-1";

  return (
    <article id={project.id} className="scroll-mt-20 border-t border-line py-20">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
        <div>
          <h3 className="max-w-3xl text-3xl font-bold tracking-[-0.035em] sm:text-5xl">{project.title}</h3>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-signal">{t("case.label")} {String(displayIndex).padStart(2, "0")} / {project.year}</p>
        </div>
        <p className="max-w-lg text-base leading-7 text-muted">{t(`projects.${project.id}.summary`)}</p>
      </div>
      <div className="grid gap-x-10 lg:grid-cols-2 lg:items-start">
        <dl className={`border-t border-line ${detailColumn} lg:row-start-1`}>
          {setupFields.map(([labelKey, valueKey]) => (
            <div key={labelKey} className="grid gap-2 border-b border-line py-5 sm:grid-cols-[9rem_1fr]">
              <dt className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">{t(labelKey)}</dt>
              <dd className="m-0 leading-7 text-ink">{t(valueKey)}</dd>
            </div>
          ))}
        </dl>
        <div className={`mt-10 lg:row-span-3 lg:row-start-1 lg:mt-0 ${evidenceColumn}`}>
          <EvidencePanel project={project} displayIndex={displayIndex} />
        </div>
        <dl className={`mt-10 border-t border-line lg:row-start-2 lg:mt-0 lg:border-t-0 ${detailColumn}`}>
          <div className="grid gap-2 border-b border-line py-5 sm:grid-cols-[9rem_1fr]">
            <dt className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">{t("case.result")}</dt>
            <dd className="m-0 leading-7 text-ink">{t(`projects.${project.id}.result`)}</dd>
          </div>
          <div className="grid gap-2 border-b border-line py-5 sm:grid-cols-[9rem_1fr]">
            <dt className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">{t("case.limitation")}</dt>
            <dd className={project.evidence.limitationKey ? "m-0" : "m-0 text-caution"}>{project.evidence.limitationKey ? t(project.evidence.limitationKey) : t("case.limitationPending")}</dd>
          </div>
          <div className="grid gap-2 border-b border-line py-5 sm:grid-cols-[9rem_1fr]">
            <dt className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">{t("case.source")}</dt>
            <dd className="m-0">
              {project.evidence.repository ? (
                <a href={project.evidence.repository} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center text-signal underline-offset-4 hover:underline">{t("case.source")}</a>
              ) : (
                <span className="text-caution">{t("case.sourcePending")}</span>
              )}
            </dd>
          </div>
        </dl>
        <ul className={`mt-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-muted lg:row-start-3 ${detailColumn}`} aria-label={t("case.tools")}>
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
      </div>
    </article>
  );
}
