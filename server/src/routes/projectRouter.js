import { Router } from 'express';
import projectApiController from '../controllers/Project/projectApiController.js';
import { isAuthenticated } from '../middlewares/authMiddleware.js';

const router = Router();

router.post('/', isAuthenticated, projectApiController.create);
router.get('/', projectApiController.getAll);
router.get('/:id', projectApiController.getById);
router.put('/:id', isAuthenticated, projectApiController.update);
router.delete('/:id', isAuthenticated, projectApiController.remove);
router.post('/:id/addUser', isAuthenticated, projectApiController.addUserToProject);
router.post('/:id/removeUser', isAuthenticated, projectApiController.removeUserFromProject);
router.get('/user/project', isAuthenticated, projectApiController.getProjectByUserId);


// Nuevas rutas para gestionar invitaciones
router.post('/:id/invite', isAuthenticated, projectApiController.inviteUserToProject);
router.post('/:id/respondInvitation', isAuthenticated, projectApiController.respondToInvitation);
router.get('/user/invitations', isAuthenticated, projectApiController.getUserInvitations);


export default router;
