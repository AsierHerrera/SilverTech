import { Router } from "express";
import commentApiController from "../controllers/Comments/commentApiController.js";
import { isAuthenticated, isAdmin } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/", commentApiController.getAll);
router.get("/:id", commentApiController.getById);
router.get("/subforum/:forumid", commentApiController.getByForumId);
router.post('/comments/:commentId/like', commentApiController.likeComment);
router.post('/comments/:commentId/dislike', commentApiController.dislikeComment);
router.get("/user/:userId", isAuthenticated, commentApiController.getByUser); // Nueva ruta
router.post("/:forumid", isAuthenticated, commentApiController.create);
router.put("/:id", isAuthenticated, commentApiController.update);
router.delete("/:id", isAdmin, commentApiController.remove);

export default router;
