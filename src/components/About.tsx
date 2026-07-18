import { motion } from "framer-motion";
import { MapPin, Mail, GraduationCap } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-text-primary mb-12"
        >
          {t("about.title")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center"
          >
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-bg-surface border border-border overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Mohammad Izzan Putra Maulana"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-text-secondary leading-relaxed">
              {t("about.bio")}
            </p>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-text-primary flex items-center gap-2">
                <GraduationCap size={20} className="text-accent" />
                {t("about.education")}
              </h3>
              <div className="bg-bg-surface rounded-lg p-4 border border-border">
                <p className="font-medium text-text-primary">{t("about.university")}</p>
                <p className="text-sm text-text-secondary">{t("about.degree")}</p>
                <p className="text-sm text-accent">{t("about.gpa")}</p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-text-primary">
                {t("about.contact")}
              </h3>
              <div className="space-y-2">
                <a
                  href="mailto:izzan.pm@gmail.com"
                  className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
                >
                  <Mail size={16} />
                  izzan.pm@gmail.com
                </a>
                <div className="flex items-center gap-2 text-text-secondary">
                  <MapPin size={16} />
                  {t("about.location")}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
