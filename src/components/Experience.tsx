import { motion } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage";
import { experiences } from "../data/experiences";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-text-primary mb-12"
        >
          {t("experience.title")}
        </motion.h2>

        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-accent/30" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.title}-${exp.institution}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12 md:pl-20"
              >
                <div className="absolute left-2.5 md:left-6.5 top-1.5 w-3 h-3 bg-accent rounded-full ring-4 ring-bg-primary" />

                <div className="bg-bg-surface border border-border rounded-xl p-5">
                  <h3 className="text-lg font-semibold text-text-primary">{exp.title}</h3>
                  <div className="flex items-center gap-2 mt-1 mb-3">
                    <span className="text-sm text-accent font-medium">{exp.institution}</span>
                    <span className="text-text-secondary text-sm">•</span>
                    <span className="text-sm text-text-secondary">{exp.role}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                        <span className="text-accent mt-1.5 text-xs">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
