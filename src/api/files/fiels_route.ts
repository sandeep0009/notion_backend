import { Router } from "express";
import { create, find, findById, remove } from "./files_controller";
import { verifyAuth } from "../../middleware/auth";

const router=Router();

router.post('/create-file',verifyAuth,create);
router.get('/get-files',verifyAuth,find);
router.get('/:id',verifyAuth,findById);
router.delete('/:id',verifyAuth,remove);


export default router;