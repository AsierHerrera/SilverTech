import {Router} from "express";
import userApiController from "../controllers/Users/userApiController.js";

const router  = Router();

router.post("/register",userApiController.register);
router.post("/login",userApiController.login);
router.post("/logout",userApiController.logout);

export default router;