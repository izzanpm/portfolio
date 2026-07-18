import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage";
import { projects, type Project } from "../data/projects";
import ProjectModal from "./ProjectModal";

type FilterCategory = "all" | "classification" | "eda" | "deployment" | "normalization";

const filterKeys: FilterCategory[] = ["all", "classification", "eda", "deployment", "normalization"];

export default function Projects() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const latestProject = filtered.find((p) => p.isLatest);
  const otherProjects = filtered.filter((p) => !p.isLatest);

  const handleClose = useCallback(() => setSelectedProject(null), []);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-text-primary mb-8"
        >
          {t("projects.title")}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {filterKeys.map((key) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                activeFilter === key
                  ? "bg-accent text-white"
                  : "bg-bg-surface text-text-secondary border border-border hover:text-text-primary"
              }`}
            >
              {t(`projects.filter.${key}`)}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {latestProject && (
              <motion.div
                whileHover={{ scale: 1.01 }}
                onClick={() => setSelectedProject(latestProject)}
                className="mb-8 p-6 sm:p-8 bg-gradient-to-br from-accent/10 to-bg-surface border border-accent/20 rounded-2xl cursor-pointer transition-shadow hover:shadow-lg hover:shadow-accent/5"
              >
                <span className="inline-block px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full mb-4">
                  {t("projects.latest")}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-2">
                  {latestProject.title}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-accent">{latestProject.year}</span>
                  <span className="text-text-secondary text-sm">•</span>
                  <span className="text-sm text-text-secondary capitalize">{latestProject.category}</span>
                </div>
                <p className="text-text-secondary">{latestProject.summary}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {latestProject.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {otherProjects.map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedProject(project)}
                  className="p-5 bg-bg-surface border border-border rounded-xl cursor-pointer transition-shadow hover:shadow-lg hover:border-accent/30"
                >
                  <h3 className="text-lg font-semibold text-text-primary mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-accent">{project.year}</span>
                    <span className="text-text-secondary text-sm">•</span>
                    <span className="text-sm text-text-secondary capitalize">{project.category}</span>
                  </div>
                  <p className="text-sm text-text-secondary mb-3">{project.summary}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-xs text-text-secondary bg-bg-primary border border-border rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <ProjectModal project={selectedProject} onClose={handleClose} />
    </section>
  );
}
