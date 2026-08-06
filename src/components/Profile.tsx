import { certificates } from "../data/certificates";
import { experiences } from "../data/experiences";
import { projects } from "../data/projects";
import { useLanguage } from "../hooks/useLanguage";

const capabilities = Array.from(new Set(projects.flatMap((project) => project.tags))).slice(0, 12);
const selectedCertificates = certificates.slice(0, 4);

const roleKeys: Record<string, string> = {
  Volunteer: "profile.role.volunteer",
  Participant: "profile.role.participant",
  "Head of Division": "profile.role.head",
};

export default function Profile() {
  const { t } = useLanguage();

  return (
    <section id="profile" className="scroll-mt-20 border-t border-line px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-4xl font-bold tracking-[-0.04em] sm:text-6xl">{t("profile.title")}</h2>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.18em] text-signal">{t("profile.label")}</p>
          </div>
          <div>
            <p className="max-w-2xl text-lg leading-8 text-muted">{t("profile.bio")}</p>
            <div className="mt-8 border-t border-line py-5">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-signal">{t("profile.education")}</p>
              <p className="mt-3 font-semibold">{t("profile.university")}</p>
              <p className="mt-1 text-sm text-muted">{t("profile.degree")} · {t("profile.gpa")}</p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-signal">{t("profile.capabilities")}</h3>
          <ol className="mt-6 grid border-t border-line sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => (
              <li key={capability} className="flex min-h-14 items-center gap-4 border-b border-line sm:border-r sm:px-4">
                <span className="font-mono text-xs text-muted">{String(index + 1).padStart(2, "0")}</span>
                <span>{capability}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-20 grid gap-16 lg:grid-cols-2">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-signal">{t("profile.experience")}</h3>
            <div className="mt-6 border-t border-line">
              {experiences.map((experience) => (
                <article key={`${experience.title}-${experience.institution}`} className="border-b border-line py-5">
                  <h4 className="font-semibold">{experience.title}</h4>
                  <p className="mt-2 font-mono text-xs text-muted">{experience.institution} / {t(roleKeys[experience.role])}</p>
                </article>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-signal">{t("profile.credentials")}</h3>
            <div className="mt-6 border-t border-line">
              {selectedCertificates.map((certificate) => (
                <article key={`${certificate.name}-${certificate.issuer}`} className="grid grid-cols-[1fr_auto] gap-4 border-b border-line py-5">
                  <div>
                    <h4 className="font-semibold">{certificate.name}</h4>
                    <p className="mt-2 text-sm text-muted">{certificate.issuer}</p>
                  </div>
                  <span className="font-mono text-xs text-signal">{certificate.year}</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
