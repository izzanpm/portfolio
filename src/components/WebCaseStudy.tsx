import type { FeaturedWebProject } from "../data/projects";
import { useLanguage } from "../hooks/useLanguage";
import WebBuildPanel from "./WebBuildPanel";

export default function WebCaseStudy({ project, reverse, displayIndex = project.featured }: { project: FeaturedWebProject; reverse: boolean; displayIndex?: number }) {
  const { t } = useLanguage();
  const details = project.web;
  const setupFields = [
    ["web.problem", details.problemKey],
    ["web.role", details.roleKey],
    ["web.features", details.featuresKey],
  ];
  const detailColumn = reverse ? "lg:col-start-1" : "lg:col-start-2";
  const buildColumn = reverse ? "lg:col-start-2" : "lg:col-start-1";

  return (
    <article id={project.id} className="scroll-mt-20 border-t border-line py-20">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
        <div>
          <h3 className="max-w-3xl text-3xl font-bold tracking-[-0.035em] sm:text-5xl">{project.title}</h3>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-signal">
            {project.origin === "independent" ? t("work.independent") : t("category.web")} {String(displayIndex).padStart(2, "0")} / {project.year}
          </p>
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
        <div className={`mt-10 lg:row-span-3 lg:row-start-1 lg:mt-0 ${buildColumn}`}>
          <WebBuildPanel project={project} displayIndex={displayIndex} />
        </div>
        <dl className={`mt-10 border-t border-line lg:row-start-2 lg:mt-0 lg:border-t-0 ${detailColumn}`}>
          <div className="grid gap-2 border-b border-line py-5 sm:grid-cols-[9rem_1fr]">
            <dt className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">{t("web.status")}</dt>
            <dd className="m-0 text-ink">{t(`web.status.${details.status}`)}</dd>
          </div>
          <div className="grid gap-2 border-b border-line py-5 sm:grid-cols-[9rem_1fr]">
            <dt className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">{t("web.demo")}</dt>
            <dd className="m-0">
              {details.liveDemo ? (
                <a href={details.liveDemo} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center text-signal underline-offset-4 hover:underline">{t("web.demo")}</a>
              ) : (
                <span className="text-caution">{t("web.demoPending")}</span>
              )}
            </dd>
          </div>
          <div className="grid gap-2 border-b border-line py-5 sm:grid-cols-[9rem_1fr]">
            <dt className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">{t("web.source")}</dt>
            <dd className="m-0">
              {details.repository ? (
                <a href={details.repository} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center text-signal underline-offset-4 hover:underline">{t("web.source")}</a>
              ) : (
                <span className="text-caution">{t("web.sourcePending")}</span>
              )}
            </dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
