import { Router } from "express";
import userRouter from "../api/users/user_route"

const router=Router();

router.use('/user',userRouter);


export default router;