
import Router from "express";
import { create, login } from "./users_controller";


const router=Router();


router.post('/signin',create);
router.post('/login',login);


export default router;