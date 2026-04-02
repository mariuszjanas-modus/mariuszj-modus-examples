import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'light',
  toggleTheme: () => {},
});

/**
 * Reads the initial theme from localStorage, falling back to the OS preference.
 * @returns 'dark' or 'light'
 */
function getInitialTheme(): Theme {
  const saved = localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * Provides the current theme and a toggle function to the component tree.
 * Persists the choice to localStorage and keeps the html[data-theme] attribute in sync.
 * @param children - Child components that can consume the theme context
 * @returns A context provider wrapping the given children
 */
function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  /**
   * Toggles between the light and dark theme
   */
  const toggleTheme = () => setTheme((current) => (current === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Returns the current theme and toggle function from the nearest ThemeProvider.
 * @returns ThemeContextValue with theme and toggleTheme
 */
function useTheme(): ThemeContextValue {
  return useContext(ThemeContext);
}

export { ThemeProvider, useTheme };
export type { Theme };
