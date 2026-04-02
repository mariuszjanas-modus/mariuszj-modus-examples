import { Link } from 'react-router-dom';
import { modules } from '../modules';
import './HomePage.css';

/**
 * Home page that displays all registered demo modules as selectable cards.
 * Each card links to the module's route.
 * @returns The application home page with a module picker grid
 */
function HomePage() {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Copilot Demo</h1>
        <p className="home-subtitle">Select a module to explore</p>
      </header>

      <main>
        <ul className="module-grid" role="list">
          {modules.map((mod) => (
            <li key={mod.id}>
              <Link to={mod.path} className="module-card">
                {mod.icon && <span className="module-card-icon" aria-hidden="true">{mod.icon}</span>}
                <h2 className="module-card-name">{mod.name}</h2>
                <p className="module-card-description">{mod.description}</p>
                <span className="module-card-cta">Open →</span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default HomePage;
