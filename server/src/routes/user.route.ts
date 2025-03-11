import { Router } from 'express';
import {
  deleteUser,
  getUser,
  updateUser,
} from '../controllers/user.controller';
import { verifyToken } from '../middlewares/auth.middleware';

const userRouter = Router();

userRouter.get('/me', verifyToken, getUser);
userRouter.put('/me', verifyToken, updateUser);
userRouter.delete('/me', verifyToken, deleteUser);

export { userRouter };
