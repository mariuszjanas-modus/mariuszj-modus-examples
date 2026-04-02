import { Router, Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { getScreenshots } from '../controllers/screenshots.controller.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

/** Allowlist of valid size folder names */
const VALID_SIZES = new Set(['480', '720', '1080']);

/** Filename pattern matching the project convention: screenshot-NN.png */
const VALID_FILENAME = /^screenshot-\d{2}\.png$/;

/** Base directory for all screenshot assets */
const screenshotsBase = path.resolve(__dirname, '../../../shared/resources/screenshots');

/**
 * GET /api/screenshots - Returns list of available screenshot filenames
 */
router.get('/', getScreenshots);

/**
 * GET /api/screenshots/files/:size/:file
 * Serves a single screenshot file after validating size and filename.
 * Rejects requests that don't match the expected shape — no path traversal possible.
 * @param size - Must be one of 480, 720, 1080
 * @param file - Must match screenshot-NN.png pattern
 */
router.get('/files/:size/:file', (req: Request, res: Response) => {
  const { size, file } = req.params;

  if (!VALID_SIZES.has(size)) {
    res.status(400).json({ error: 'Invalid size. Must be 480, 720, or 1080.' });
    return;
  }

  if (!VALID_FILENAME.test(file)) {
    res.status(400).json({ error: 'Invalid filename.' });
    return;
  }

  const filePath = path.join(screenshotsBase, size, file);

  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).json({ error: 'Screenshot not found.' });
    }
  });
});

export default router;
