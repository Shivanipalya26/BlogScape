import { Router } from 'express';
import {
  deleteUser,
  getUser,
  updateUser,
} from '../controllers/user.controller';

const userRouter = Router();

userRouter.get('/:id', getUser);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

export { userRouter };
