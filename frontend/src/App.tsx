import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import HomePage from './pages/HomePage';
import ScreenshotGallery from './modules/screenshot-gallery/ScreenshotGallery';

/**
 * Root application component.
 * Wraps the route tree with ThemeProvider and mounts the persistent ThemeToggle button.
 * @returns The BrowserRouter-wrapped route tree with theme support
 */
function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="App">
          <ThemeToggle />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/screenshot-gallery" element={<ScreenshotGallery />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
