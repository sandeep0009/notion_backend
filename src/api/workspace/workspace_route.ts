import { Router } from "express";
import { create, find, remove, update} from "./workspace_controller";
import { verifyAuth } from "../../middleware/auth";

const router=Router();



router.post('/create',verifyAuth,create);
router.get('/get-workspace',verifyAuth,find);
router.delete('/:id',verifyAuth,remove);
router.patch('/:id',verifyAuth,update)

export default router;