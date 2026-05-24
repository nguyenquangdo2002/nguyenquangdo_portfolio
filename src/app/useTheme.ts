import { useEffect, useState } from "react";

type Theme = "dark" | "light";
const STORAGE_KEY = "theme";

function getStoredTheme(): Theme | null {
  if (typeof window === "undefined") {
    return null;
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "dark" || stored === "light") {
    return stored;
  }

  return null;
}

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") {
    return "dark";
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getPreferredTheme);

  useEffect(() => {
    const stored = getStoredTheme();
    if (stored) {
      setTheme(stored);
      return;
    }

    setTheme(getPreferredTheme());
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("light", theme === "light");
    root.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => setTheme((current) => (current === "dark" ? "light" : "dark"));

  return { theme, toggleTheme };
}
