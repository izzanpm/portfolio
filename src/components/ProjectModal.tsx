import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Project } from "../data/projects";
import { useLanguage } from "../hooks/useLanguage";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { t } = useLanguage();

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto bg-bg-surface border border-border rounded-2xl p-6 sm:p-8"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-accent font-medium">{project.year}</span>
                  <span className="text-text-secondary text-sm">•</span>
                  <span className="text-sm text-text-secondary capitalize">{project.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-text-primary">{project.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-2">{t("projects.modal.overview")}</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">{project.detail.overview}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-2">{t("projects.modal.methodology")}</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">{project.detail.methodology}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-2">{t("projects.modal.tools")}</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.detail.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 text-xs font-medium text-text-primary bg-bg-primary border border-border rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-2">{t("projects.modal.results")}</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">{project.detail.results}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
