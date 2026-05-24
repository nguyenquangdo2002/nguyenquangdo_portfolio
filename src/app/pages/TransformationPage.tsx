import { Link } from "react-router-dom";
import { ThemeToggle } from "../components/ThemeToggle";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { useTheme } from "../useTheme";
import { useLocale } from "../useLocale";

const beforeImage = "/images/transformation-2020.jpg";
const afterImage = "/images/transformation-2024.jpg";

export default function TransformationPage() {
  const { theme, toggleTheme } = useTheme();
  const { locale, setLocale, t } = useLocale();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/15 px-4 py-2 text-sm font-semibold text-foreground transition hover:border-foreground hover:bg-foreground/10"
            >
              {t.transformation.back}
            </Link>
            <div className="flex items-center gap-3">
              <LanguageSwitcher locale={locale} setLocale={setLocale} />
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>
          </div>

          <div className="mt-10 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">{t.transformation.pageLabel}</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
              {t.transformation.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {t.transformation.description}
            </p>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-[0.95fr_0.85fr]">
            <div className="rounded-[32px] border border-border bg-card p-8">
              <div className="space-y-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">{t.transformation.storyLabel}</p>
                  <h2 className="mt-4 text-3xl font-semibold text-foreground">{t.transformation.periodLabel}</h2>
                </div>

                <div className="space-y-5 rounded-[28px] border border-border bg-background/80 p-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{t.transformation.stages[0].title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{t.transformation.stages[0].text}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{t.transformation.stages[1].title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{t.transformation.stages[1].text}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{t.transformation.stages[2].title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{t.transformation.stages[2].text}</p>
                  </div>
                </div>

                <div className="rounded-[28px] border border-border bg-background/80 p-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">{t.transformation.detailsLabel}</p>
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
                    {t.transformation.detailItems.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-foreground" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[32px] border border-border bg-card p-8">
                <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">{t.transformation.photoLabel}</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="space-y-3 rounded-[28px] border border-border bg-card/15 p-4">
                    <img src={beforeImage} alt="Transformation 2020" className="w-full rounded-3xl border border-border object-cover" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">2020</p>
                      <p className="mt-2 text-sm text-muted-foreground">{t.transformation.stages[0].text}</p>
                    </div>
                  </div>
                  <div className="space-y-3 rounded-[28px] border border-border bg-card/15 p-4">
                    <img src={afterImage} alt="Transformation 2024" className="w-full rounded-3xl border border-border object-cover" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">2024</p>
                      <p className="mt-2 text-sm text-muted-foreground">{t.transformation.stages[2].text}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[32px] border border-border bg-card p-8">
                <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">{t.transformation.notesTitle}</p>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {t.transformation.notesText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
