import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Gets list of available screenshot filenames
 * Scans the screenshots directory and returns available files
 */
export const getScreenshots = async (req: Request, res: Response) => {
  try {
    // Path to screenshots directory (relative to backend root)
    const screenshotsPath = path.join(__dirname, '../../../shared/resources/screenshots/1080');
    
    // Read directory contents
    const files = fs.readdirSync(screenshotsPath);
    
    // Filter to only include PNG files and sort them
    const screenshots = files
      .filter(file => file.endsWith('.png'))
      .sort();
    
    res.json({ screenshots });
  } catch (error) {
    console.error('Error reading screenshots:', error);
    res.status(500).json({ error: 'Failed to load screenshots' });
  }
};
