import type { FeaturedProject } from "../data/projects";
import { useLanguage } from "../hooks/useLanguage";

export default function EvidencePanel({ project, compact = false }: { project: FeaturedProject; compact?: boolean }) {
  const { t } = useLanguage();
  const evidence = project.evidence;

  return (
    <div className={`instrument-field overflow-hidden ${compact ? "signal-scan p-5" : "p-6 sm:p-8"}`}>
      <div className="relative z-10 flex items-center justify-between border-b border-line pb-3 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">
        <span>{String(project.featured).padStart(2, "0")} / {t(`category.${project.category}`)}</span>
        <span>{project.year}</span>
      </div>
      <div className="relative z-10 mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(9rem,16rem)]">
        <div>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-signal">{t("case.models")}</p>
          <div className="mt-3 border-t border-line">
            {evidence.models.map((model) => (
              <div key={model} className="flex min-h-11 items-center justify-between border-b border-line font-mono text-sm">
                <span>{model}</span>
                <span className={model === evidence.selectedModel ? "text-signal" : "text-muted"}>
                  {model === evidence.selectedModel ? t("case.selected") : "—"}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="min-w-0 border-l border-line pl-5 font-mono text-xs text-muted">
          {evidence.metric ? (
            <p><span className="block text-2xl text-ink">{evidence.metric.value}</span>{t(evidence.metric.labelKey)}</p>
          ) : (
            <p>{t("case.metricPending")}</p>
          )}
          {evidence.image ? (
            <img src={evidence.image.src} alt={t(evidence.image.altKey)} loading={compact ? "eager" : "lazy"} className="mt-4 aspect-video w-full max-w-64 border border-line object-contain" />
          ) : (
            <p className="mt-4 text-caution">{t("case.imagePending")}</p>
          )}
        </div>
      </div>
    </div>
  );
}
