import { Router } from "express";
import * as userController from '../controller/controller.js'

const router = Router();

router.get('/user', userController.getAllUserInfo);
router.post('/user',userController.addUser )
router.delete('/user',userController.deleteUser)
router.put('/user',userController.updateUser)

export default router;