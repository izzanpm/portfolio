import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

export default function Hero() {
  const { t } = useLanguage();

  function scrollToProjects() {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-accent bg-accent/10 rounded-full border border-accent/20">
            {t("hero.badge")}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-tight tracking-tight"
        >
          Mohammad Izzan
          <br />
          Putra Maulana
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto"
        >
          {t("hero.tagline")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={scrollToProjects}
            className="px-8 py-3 bg-accent hover:bg-accent-hover text-white font-medium rounded-lg transition-colors cursor-pointer"
          >
            {t("hero.cta.projects")}
          </button>
          <a
            href="/cv.pdf"
            download
            className="px-8 py-3 border border-border text-text-primary hover:bg-bg-surface font-medium rounded-lg transition-colors"
          >
            {t("hero.cta.cv")}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex items-center justify-center gap-5"
        >
          <a
            href="https://linkedin.com/in/izzanpm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:izzan.pm@gmail.com"
            className="text-text-secondary hover:text-accent transition-colors"
            aria-label="Gmail"
          >
            <Mail size={22} />
          </a>
          <a
            href="mailto:izzan.pm@outlook.com"
            className="text-text-secondary hover:text-accent transition-colors"
            aria-label="Outlook"
          >
            <Mail size={22} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
