import { useState } from "react";
import { archivedProjects, featuredProjects, filterProjects, getDisplayProjects, type ProjectFilter } from "../data/projects";
import { useLanguage } from "../hooks/useLanguage";
import CaseStudy from "./CaseStudy";
import ProjectArchive from "./ProjectArchive";
import WebCaseStudy from "./WebCaseStudy";

const filters: { value: ProjectFilter; labelKey: string }[] = [
  { value: "all", labelKey: "work.filterAll" },
  { value: "data", labelKey: "work.filterData" },
  { value: "web", labelKey: "work.filterWeb" },
];

export default function Projects() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<ProjectFilter>("all");
  const visibleFeaturedProjects = getDisplayProjects(featuredProjects, filter);
  const visibleArchivedProjects = filterProjects(archivedProjects, filter);

  return (
    <section id="work" className="scroll-mt-20 px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="max-w-4xl text-4xl font-bold tracking-[-0.04em] sm:text-6xl">{t("work.title")}</h2>
        <p className="mt-5 font-mono text-xs uppercase tracking-[0.18em] text-signal">{t("work.label")}</p>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-y border-line py-3">
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{t("work.filterLabel")}</span>
          <div className="flex flex-wrap gap-2" role="group" aria-label={t("work.filterLabel")}>
            {filters.map((item) => {
              const active = filter === item.value;
              return (
                <button
                  key={item.value}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(item.value)}
                  className={`min-h-11 border px-4 font-mono text-xs uppercase tracking-[0.14em] transition-colors ${active ? "border-signal bg-signal text-field" : "border-line text-muted hover:border-signal hover:text-ink"}`}
                >
                  {t(item.labelKey)}
                </button>
              );
            })}
          </div>
        </div>
        <div className="mt-16">
          {visibleFeaturedProjects.map(({ project, displayIndex }, index) => project.type === "web"
            ? <WebCaseStudy key={project.id} project={project} displayIndex={displayIndex} reverse={index % 2 === 1} />
            : <CaseStudy key={project.id} project={project} displayIndex={displayIndex} reverse={index % 2 === 1} />)}
          {visibleFeaturedProjects.length === 0 && visibleArchivedProjects.length === 0 && (
            <p className="border-t border-line py-5 text-muted">{t("work.empty")}</p>
          )}
        </div>
        <div className="mt-20">
          <h3 className="mb-7 font-mono text-xs uppercase tracking-[0.18em] text-signal">{t("work.archive")}</h3>
          <ProjectArchive projects={visibleArchivedProjects} startIndex={visibleFeaturedProjects.length} />
        </div>
      </div>
    </section>
  );
}
