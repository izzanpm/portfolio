import { useLanguage } from "../hooks/useLanguage";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-line px-5 py-7 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 font-mono text-xs text-muted sm:flex-row sm:justify-between">
        <p>{t("footer.copyright")}</p>
        <p>{t("footer.note")}</p>
      </div>
    </footer>
  );
}
