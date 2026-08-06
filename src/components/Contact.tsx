import { ArrowUpRight, Linkedin, Mail } from "lucide-react";
import { cvUrl, emailUrl, linkedinUrl } from "../data/links";
import { useLanguage } from "../hooks/useLanguage";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="border-t border-line px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <h2 className="max-w-3xl text-4xl font-bold tracking-[-0.04em] sm:text-6xl">{t("contact.title")}</h2>
          <p className="mt-5 font-mono text-xs uppercase tracking-[0.18em] text-signal">{t("contact.label")}</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{t("contact.body")}</p>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-muted">{t("contact.location")}</p>
        </div>
        <div className="grid min-w-64 border-t border-line">
          <a className="flex min-h-14 items-center justify-between border-b border-line hover:text-signal" href={emailUrl}>
            <span>{t("contact.email")}</span>
            <Mail size={18} />
          </a>
          <a className="flex min-h-14 items-center justify-between border-b border-line hover:text-signal" href={linkedinUrl} target="_blank" rel="noreferrer">
            <span>{t("contact.linkedin")}</span>
            <Linkedin size={18} />
          </a>
          <a className="flex min-h-14 items-center justify-between border-b border-line hover:text-signal" href={cvUrl} target="_blank" rel="noreferrer">
            <span>{t("contact.cv")}</span>
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
