import {Router} from 'express';
import { getUsers, getUser, createUser, updateUser, deleteUser, insertUser, deleteUser2, updateUser2 } from "../controller/user.controller";

const router = Router();

router.get('/user', getUsers);
router.get('/user/:id', getUser);
// router.post('/user', createUser);
router.post('/user', insertUser);
// router.put('/user/:id', updateUser);
router.put('/user/:id', updateUser2);
// router.delete('/user/:id', deleteUser);
router.delete('/user/:id', deleteUser2); 


export default router 
