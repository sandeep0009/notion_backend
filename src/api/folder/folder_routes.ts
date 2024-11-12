import { Router } from "express";
import { verifyAuth } from "../../middleware/auth";
import { create,find, findById,remove,update} from "./folder_controller";

const router=Router();


router.post('/create',verifyAuth,create);
router.get('/all-folders',verifyAuth,find);
router.get('/:id',verifyAuth,findById);
router.delete('/:id',verifyAuth,remove);
router.patch('/:id',verifyAuth,update);


export default router;