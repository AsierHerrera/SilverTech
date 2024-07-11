import { Router } from "express";
import resourceApiController from "../controllers/Resources/resourceApiController.js";
import { isAuthenticated, isAdmin } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/", resourceApiController.getAll);
router.get("/:id", resourceApiController.getById);
router.get("/user/resource", isAuthenticated, resourceApiController.getByUser); // Nueva ruta
router.post("/", isAuthenticated, isAdmin, resourceApiController.create);
router.put("/:id", isAuthenticated, resourceApiController.update);
router.delete("/:id", isAdmin, resourceApiController.remove);
router.get("/busqueda/:busquedaData", resourceApiController.barraDeBusqueda)


// Rutas de participación en recursos
router.post("/:resourceId/requestParticipation/:userId", isAuthenticated, resourceApiController.requestParticipation);
router.put("/:resourceId/acceptParticipation/:userId", isAuthenticated, resourceApiController.acceptParticipation);
router.put("/:resourceId/rejectParticipation/:userId", isAuthenticated, resourceApiController.rejectParticipation);

export default router;
