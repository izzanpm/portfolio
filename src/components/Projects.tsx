import { featuredProjects } from "../data/projects";
import { useLanguage } from "../hooks/useLanguage";
import CaseStudy from "./CaseStudy";
import ProjectArchive from "./ProjectArchive";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="work" className="scroll-mt-20 px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="max-w-4xl text-4xl font-bold tracking-[-0.04em] sm:text-6xl">{t("work.title")}</h2>
        <p className="mt-5 font-mono text-xs uppercase tracking-[0.18em] text-signal">{t("work.label")}</p>
        <div className="mt-16">
          {featuredProjects.map((project, index) => <CaseStudy key={project.id} project={project} reverse={index % 2 === 1} />)}
        </div>
        <div className="mt-20">
          <h3 className="mb-7 font-mono text-xs uppercase tracking-[0.18em] text-signal">{t("work.archive")}</h3>
          <ProjectArchive />
        </div>
      </div>
    </section>
  );
}
