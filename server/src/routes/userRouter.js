import { Router } from "express";
import userApiController from "../controllers/Users/userApiController.js";
import { isAuthenticated, isAdmin } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/", userApiController.getAll);
router.get("/byproperty", isAdmin, userApiController.getByProperty);
router.get("/:id", isAdmin, userApiController.getById);
router.get("/resource/:resourceId", isAdmin, userApiController.getByResource); // Nueva ruta
router.post("/", userApiController.create);
router.put("/:id", userApiController.update);
router.delete("/:id", isAdmin, userApiController.remove);

export default router;
