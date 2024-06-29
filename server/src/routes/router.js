import {Router} from "express";
import userRouter from "./userRouter.js";
import authRouter from "./authRouter.js";

const router  =  Router();

router.get("/",(req,res)=>{
    res.json({data:"hello api"});
})
router.use("/users",userRouter);
router.use("/",authRouter);


export default router;