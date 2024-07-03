import { Router } from 'express';
import companyApiController from '../controllers/Company/companyApiController.js';
import { isAuthenticated, isAdmin } from '../middlewares/authMiddleware.js';

const router = Router();

router.get('/', isAuthenticated, companyApiController.getAll);
router.get('/:id', isAuthenticated, companyApiController.getById);
router.post('/', isAuthenticated, isAdmin, companyApiController.create);
router.put('/:id', isAuthenticated, isAdmin, companyApiController.update);
router.delete('/:id', isAuthenticated, isAdmin, companyApiController.remove);

export default router;
