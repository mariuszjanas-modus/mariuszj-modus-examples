import { Router } from 'express';
import exampleRoutes from './example.routes.js';
import screenshotsRoutes from './screenshots.routes.js';

const router = Router();

router.use('/example', exampleRoutes);
router.use('/screenshots', screenshotsRoutes);

export default router;
