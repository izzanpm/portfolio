import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { certificates } from "../data/certificates";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

export default function Certificates() {
  const { t } = useLanguage();

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-text-primary mb-12"
        >
          {t("certificates.title")}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {certificates.map((cert) => (
            <motion.div
              key={`${cert.name}-${cert.issuer}`}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="p-5 bg-bg-surface border border-border rounded-xl transition-colors hover:border-accent/40"
            >
              <div className="flex items-start gap-3">
                <Award size={20} className="text-accent mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-sm font-semibold text-text-primary">{cert.name}</h3>
                  <p className="text-xs text-text-secondary mt-1">{cert.issuer}</p>
                  <p className="text-xs text-accent mt-1">{cert.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
