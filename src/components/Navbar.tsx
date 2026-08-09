import { useEffect, useState, type MouseEvent } from "react";
import { Menu } from "lucide-react";
import { cvUrl } from "../data/links";
import { useLanguage } from "../hooks/useLanguage";
import { useScrollSpy } from "../hooks/useScrollSpy";

const navItemIds = ["work", "profile", "contact"];
const observedIds = ["top", ...navItemIds];

function closeMobileNavigation(event: MouseEvent<HTMLAnchorElement>) {
  event.currentTarget.closest("details")?.removeAttribute("open");
}

export default function Navbar() {
  const [hydrated, setHydrated] = useState(false);
  const activeId = useScrollSpy(observedIds);
  const { locale, setLocale, t } = useLanguage();
  const navItems = navItemIds.map((id) => ({ id, label: t(`nav.${id}`) }));

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-line bg-field" aria-label={t("nav.primary")}>
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#top" className="inline-flex min-h-11 items-center font-mono text-sm font-semibold tracking-[0.08em] text-signal">IZZAN://PORTFOLIO</a>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} aria-current={activeId === item.id ? "location" : undefined} className={activeId === item.id ? "inline-flex min-h-11 items-center font-mono text-xs uppercase tracking-[0.12em] text-signal" : "inline-flex min-h-11 items-center font-mono text-xs uppercase tracking-[0.12em] text-muted hover:text-ink"}>
                {item.label}
            </a>
          ))}
        </div>
        <div className="hidden items-center gap-3 md:flex">
          {hydrated && (
            <button type="button" onClick={() => setLocale(locale === "en" ? "id" : "en")} className="min-h-11 border border-line px-3 font-mono text-xs text-muted hover:border-signal hover:text-ink" aria-label={t("nav.localeSwitch")}>
              {locale === "en" ? "ID" : "EN"}
            </button>
          )}
          <a href={cvUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center bg-signal px-4 text-sm font-semibold text-field">{t("nav.cv")}</a>
        </div>
        <details className="md:hidden">
          <summary className="flex min-h-11 min-w-11 cursor-pointer list-none items-center justify-center [&::-webkit-details-marker]:hidden">
            <Menu size={22} aria-hidden="true" />
            <span className="sr-only">{t("nav.menu")}</span>
          </summary>
          <div id="mobile-navigation" className="fixed inset-x-0 top-[4.5rem] border-t border-line bg-field px-5 py-3">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={closeMobileNavigation} aria-current={activeId === item.id ? "location" : undefined} className={activeId === item.id ? "flex min-h-11 items-center border-b border-line font-mono text-xs uppercase tracking-[0.12em] text-signal" : "flex min-h-11 items-center border-b border-line font-mono text-xs uppercase tracking-[0.12em] text-muted"}>
                {item.label}
              </a>
            ))}
            <div className="mt-3 flex gap-3">
              {hydrated && (
                <button type="button" onClick={() => setLocale(locale === "en" ? "id" : "en")} className="min-h-11 min-w-11 border border-line px-3 font-mono text-xs" aria-label={t("nav.localeSwitch")}>{locale === "en" ? "ID" : "EN"}</button>
              )}
              <a href={cvUrl} target="_blank" rel="noreferrer" onClick={closeMobileNavigation} className="inline-flex min-h-11 flex-1 items-center justify-center bg-signal px-4 text-sm font-semibold text-field">{t("nav.cv")}</a>
            </div>
          </div>
        </details>
      </div>
    </nav>
  );
}
