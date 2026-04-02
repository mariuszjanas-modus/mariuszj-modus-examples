import { Router } from 'express';
import { exampleController } from '../controllers/example.controller.js';

const router = Router();

router.get('/', exampleController.getAll);
router.get('/:id', exampleController.getById);
router.post('/', exampleController.create);
router.put('/:id', exampleController.update);
router.delete('/:id', exampleController.remove);

export default router;
