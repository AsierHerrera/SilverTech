import { Router } from "express";
import subforumApiController from "../controllers/Subforum/subforumApiController.js";
import { isAuthenticated, isAdmin } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/", subforumApiController.getAll);
router.get("/:id", subforumApiController.getById);
router.post("/", isAuthenticated, subforumApiController.create);
router.put("/:id", isAuthenticated, subforumApiController.update);
router.delete("/:id", isAdmin, subforumApiController.remove);

export default router;
