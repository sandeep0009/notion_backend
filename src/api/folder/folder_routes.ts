import { Router } from "express";
import { verifyAuth } from "../../middleware/auth";
import { create } from "./folder_controller";

const router=Router();


router.post('/create',verifyAuth,create);

export default router;