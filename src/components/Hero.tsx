import { Mail } from "lucide-react";
import { cvUrl } from "../data/links";
import { featuredProjects } from "../data/projects";
import { useLanguage } from "../hooks/useLanguage";
import EvidencePanel from "./EvidencePanel";

export default function Hero() {
  const { t } = useLanguage();
  const project = featuredProjects[0];

  return (
    <section id="top" className="mx-auto grid min-h-[min(calc(100svh-4.5rem),56rem)] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
      <div>
        <h1 className="max-w-3xl break-words text-5xl font-extrabold leading-[0.94] tracking-[-0.04em] sm:text-6xl xl:text-7xl">{t("hero.title")}</h1>
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-signal"><span className="text-ink">Mohammad Izzan Putra Maulana</span> / {t("hero.label")}</p>
        <p className="mt-4 max-w-xl text-base leading-7 text-muted sm:text-lg">{t("hero.body")}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href={cvUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center bg-signal px-5 font-semibold text-field">{t("nav.cv")}</a>
          <a href="#contact" className="inline-flex min-h-11 items-center gap-2 border border-line px-5 text-ink hover:border-signal"><Mail size={18} />{t("hero.contact")}</a>
        </div>
      </div>
      <div>
        <p className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">01 / {project.title}</p>
        <EvidencePanel project={project} compact />
      </div>
    </section>
  );
}
