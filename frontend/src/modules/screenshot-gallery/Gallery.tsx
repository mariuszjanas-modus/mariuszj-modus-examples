import { useEffect, useState } from 'react';
import { getScreenshots } from '../../services/api';
import './Gallery.css';

/**
 * Represents available image sizes for the gallery
 */
type ImageSize = 480 | 720 | 1080;

/**
 * Lists the supported screenshot sizes for preview and download links
 */
const imageSizes: ImageSize[] = [480, 720, 1080];

/**
 * Maps image size values to human-readable labels
 * @param size - The image size in pixels
 * @returns User-friendly label for the size
 */
function getSizeLabel(size: ImageSize): string {
  switch (size) {
    case 480:
      return 'small';
    case 720:
      return 'medium';
    case 1080:
      return 'large';
  }
}

/**
 * Returns the API path for a screenshot at the requested size
 * @param screenshot - The screenshot file name
 * @param size - The desired width variant
 * @returns Image URL for the requested screenshot size
 */
function getScreenshotUrl(screenshot: string, size: ImageSize): string {
  return `/api/screenshots/files/${size}/${screenshot}`;
}

/**
 * Derives a readable alt text label from a screenshot filename
 * @param screenshot - The screenshot filename (e.g. "screenshot-08.png")
 * @returns Human-readable label (e.g. "Screenshot 08")
 */
function getAltText(screenshot: string): string {
  return screenshot
    .replace(/\.png$/i, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

/**
 * Gallery component that displays screenshot thumbnails with size-specific open actions
 */
function Gallery() {
  const [screenshots, setScreenshots] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Fetches available screenshots from the API on component mount
   */
  useEffect(() => {
    const fetchScreenshots = async () => {
      try {
        setLoading(true);
        const screenshotList = await getScreenshots();
        setScreenshots(screenshotList);
        setError(null);
      } catch (err) {
        console.error('Failed to load screenshots:', err);
        setError('Failed to load screenshots');
      } finally {
        setLoading(false);
      }
    };

    fetchScreenshots();
  }, []);

  return (
    <div className="gallery-container">
      {loading && <p>Loading screenshots...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && screenshots.length === 0 && (
        <p>No screenshots available</p>
      )}

      {!loading && !error && screenshots.length > 0 && (
        <div className="gallery-grid">
          {screenshots.map((screenshot) => (
            <article key={screenshot} className="gallery-item">
              <figure className="gallery-figure">
                <img
                  src={getScreenshotUrl(screenshot, 480)}
                  alt={getAltText(screenshot)}
                  loading="lazy"
                />
                <figcaption className="gallery-overlay">
                  <span className="gallery-overlay-label">Open size</span>
                  <div className="gallery-size-links">
                    {imageSizes.map((size) => (
                      <a
                        key={size}
                        className="gallery-size-link"
                        href={getScreenshotUrl(screenshot, size)}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {getSizeLabel(size)}
                      </a>
                    ))}
                  </div>
                </figcaption>
              </figure>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

export default Gallery;
