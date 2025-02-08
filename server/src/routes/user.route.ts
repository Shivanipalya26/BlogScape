import { Router } from 'express';
import {
  deleteUser,
  getUser,
  updateUser,
} from '../controllers/user.controller';
import { verifyToken } from '../middlewares/auth.middleware';

const userRouter = Router();

userRouter.get('/:id', verifyToken, getUser);
userRouter.put('/:id', verifyToken, updateUser);
userRouter.delete('/:id', verifyToken, deleteUser);

export { userRouter };
