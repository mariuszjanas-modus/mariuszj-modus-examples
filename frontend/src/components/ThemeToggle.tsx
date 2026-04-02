import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css';

/**
 * Fixed button that toggles between light and dark mode.
 * Renders a sun icon in dark mode and a moon icon in light mode.
 * @returns A button element positioned in the top-right corner of the viewport
 */
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      type="button"
    >
      <span aria-hidden="true">{isDark ? '☀️' : '🌙'}</span>
    </button>
  );
}

export default ThemeToggle;
