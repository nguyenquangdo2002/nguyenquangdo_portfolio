import type { Locale } from "../useLocale";

const localeLabels: Record<Locale, string> = {
  en: "English",
  vi: "Tiếng Việt",
  es: "Español",
};

export function LanguageSwitcher({
  locale,
  setLocale,
}: {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}) {
  return (
    <label className="inline-flex items-center gap-2 rounded-full border border-border bg-card/15 px-3 py-2 text-sm text-foreground transition hover:bg-card/30">
      <span className="sr-only">Language</span>
      <select
        aria-label="Select language"
        value={locale}
        onChange={(event) => setLocale(event.target.value as Locale)}
        className="bg-transparent text-foreground outline-none"
      >
        {Object.entries(localeLabels).map(([key, label]) => (
          <option key={key} value={key}>
            {label}
          </option>
        ))}
      </select>
    </label>
  );
}
