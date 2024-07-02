import {Router} from "express";
import userRouter from "./userRouter.js";
import authRouter from "./authRouter.js";
import commentRouter from "./commentRouter.js"
import resourceRouter from "./resourceRouter.js"
import subforumRouter from "./subforumRouter.js"


const router  =  Router();

router.get("/",(req,res)=>{
    res.json({data:"hello api"});
})
router.use("/",authRouter);
router.use("/users",userRouter);
router.use("/comments",commentRouter);
router.use("/resources",resourceRouter);
router.use("/subforum",subforumRouter);




export default router;