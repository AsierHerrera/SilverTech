import { Router } from "express";
import resourceApiController from "../controllers/Resources/resourceApiController.js";
import { isAuthenticated, isAdmin } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/", resourceApiController.getAll);
router.get("/:id", resourceApiController.getById);
router.get("/user/:userId", isAuthenticated, resourceApiController.getByUser); // Nueva ruta
router.post("/", isAuthenticated, resourceApiController.create);
router.put("/:id", isAuthenticated, resourceApiController.update);
router.delete("/:id", isAdmin, resourceApiController.remove);

export default router;
