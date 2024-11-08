import { Router } from "express";
import { verifyAuth } from "../../middleware/auth";
import { create, remove } from "./collabrator_controller";

const router=Router();

router.post('/create-collabrator',verifyAuth,create);
router.post('/:id',verifyAuth,remove)


export default router;