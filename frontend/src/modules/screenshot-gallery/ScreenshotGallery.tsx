import { Link } from 'react-router-dom';
import Gallery from './Gallery';
import './ScreenshotGallery.css';

/**
 * Page wrapper for the Screenshot Gallery module.
 * Renders the module heading, a back navigation link, and the Gallery component.
 * @returns The full screenshot gallery page
 */
function ScreenshotGallery() {
  return (
    <div className="module-page">
      <header className="module-header">
        <Link to="/" className="module-back-link">← All modules</Link>
        <h1>Screenshot Gallery</h1>
      </header>
      <Gallery />
    </div>
  );
}

export default ScreenshotGallery;
