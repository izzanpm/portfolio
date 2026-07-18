import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { useLanguage } from "../hooks/useLanguage";

const sectionIds = ["about", "skills", "projects", "experience", "certificates"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(sectionIds);
  const { locale, setLocale, t } = useLanguage();

  const navItems = [
    { id: "about", label: t("nav.about") },
    { id: "skills", label: t("nav.skills") },
    { id: "projects", label: t("nav.projects") },
    { id: "experience", label: t("nav.experience") },
    { id: "certificates", label: t("nav.contact") },
  ];

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => scrollTo("hero")} className="text-accent font-bold text-xl tracking-tight cursor-pointer">
            IZN
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-sm font-medium transition-colors cursor-pointer ${
                  activeId === item.id ? "text-accent" : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setLocale(locale === "en" ? "id" : "en")}
              className="text-sm font-medium text-text-secondary hover:text-text-primary px-2 py-1 rounded border border-border transition-colors cursor-pointer"
            >
              {locale === "en" ? "ID" : "EN"}
            </button>
            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              <Download size={14} />
              {t("nav.downloadCv")}
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-text-primary cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-surface border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`block w-full text-left text-sm font-medium transition-colors cursor-pointer ${
                    activeId === item.id ? "text-accent" : "text-text-secondary"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <button
                  onClick={() => setLocale(locale === "en" ? "id" : "en")}
                  className="text-sm font-medium text-text-secondary px-2 py-1 rounded border border-border cursor-pointer"
                >
                  {locale === "en" ? "ID" : "EN"}
                </button>
                <a
                  href="/cv.pdf"
                  download
                  className="flex items-center gap-2 bg-accent text-white text-sm font-medium px-4 py-2 rounded-lg"
                >
                  <Download size={14} />
                  {t("nav.downloadCv")}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
