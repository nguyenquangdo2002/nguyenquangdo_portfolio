import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ theme, toggleTheme }: { theme: "dark" | "light"; toggleTheme: () => void }) {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/15 px-3 py-2 text-sm text-foreground transition hover:bg-card/30"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
      <span className="hidden sm:inline">{theme === "dark" ? "Sáng" : "Tối"}</span>
    </button>
  );
}
