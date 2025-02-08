import { Request, Response, Router } from 'express';
import {
  deleteUser,
  getAllUsers,
  getDashboardStats,
} from '../controllers/admin.controller';

const adminRouter = Router();

adminRouter.get('/users', getAllUsers);
adminRouter.get('/dashboard', getDashboardStats);
adminRouter.delete('/users/:id', deleteUser);

export { adminRouter };
