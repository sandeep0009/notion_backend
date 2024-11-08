import { Router } from "express";
import { verifyAuth } from "../../middleware/auth";
import { create,find, findById,remove} from "./folder_controller";

const router=Router();


router.post('/create',verifyAuth,create);
router.get('/all-folders',verifyAuth,find);
router.get('/:id',verifyAuth,findById);
router.delete('/:id',verifyAuth,remove);


export default router;