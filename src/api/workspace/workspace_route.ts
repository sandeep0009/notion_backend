import { Router } from "express";
import { create } from "./workspace_controller";
import { verifyAuth } from "../../middleware/auth";

const router=Router();



router.post('/create',verifyAuth,create);

export default router;