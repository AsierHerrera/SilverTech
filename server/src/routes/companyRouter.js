import { Router } from 'express';
import companyApiController from '../controllers/Company/companyApiController.js';
import { isAuthenticated, isAdmin } from '../middlewares/authMiddleware.js';

const router = Router();

router.get('/', isAuthenticated, companyApiController.getAllCompanies);
router.get('/:id', isAuthenticated, companyApiController.getCompanyById);
router.post('/', isAuthenticated, companyApiController.createCompany);
router.put('/:id', isAuthenticated, companyApiController.updateCompany);
router.delete('/:id', isAuthenticated, companyApiController.deleteCompany);
router.get('/user/company', isAuthenticated, companyApiController.getCompanyByUserId);


export default router;
