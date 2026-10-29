import type { FeaturedWebProject } from "../data/projects";
import { useLanguage } from "../hooks/useLanguage";

export default function WebBuildPanel({ project, compact = false, displayIndex = project.featured }: { project: FeaturedWebProject; compact?: boolean; displayIndex?: number }) {
  const { t } = useLanguage();
  const details = project.web;

  return (
    <div className={`instrument-field overflow-hidden ${compact ? "signal-scan p-5" : "p-6 sm:p-8"}`}>
      <div className="relative z-10 flex items-center justify-between border-b border-line pb-3 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">
        <span>{String(displayIndex).padStart(2, "0")} / {t("category.web")}</span>
        <span>{project.year}</span>
      </div>
      <div className="relative z-10 mt-6">
        {details.screenshot ? (
          <img
            src={details.screenshot.src}
            alt={t(details.screenshot.altKey)}
            loading={compact ? "eager" : "lazy"}
            className="aspect-video w-full border border-line object-contain"
          />
        ) : (
          <div className="border border-line bg-field">
            <div className="flex min-h-11 items-center justify-between gap-4 border-b border-line px-4 font-mono text-[0.68rem] uppercase tracking-[0.14em]">
              <span className="truncate text-signal">{project.title}</span>
              <span className="shrink-0 text-muted">{t(`web.status.${details.status}`)}</span>
            </div>
            <div className="divide-y divide-line">
              {details.surfaceKeys.map((surfaceKey, index) => (
                <div key={surfaceKey} className="grid min-h-14 grid-cols-[2.5rem_1fr] items-center gap-3 px-4">
                  <span className="font-mono text-xs text-muted">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-sm text-ink">{t(surfaceKey)}</span>
                </div>
              ))}
            </div>
            <p className="border-t border-line px-4 py-3 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-caution">{t("web.previewPending")}</p>
          </div>
        )}
        <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-muted" aria-label={t("case.tools")}>
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
      </div>
    </div>
  );
}
