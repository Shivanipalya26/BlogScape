import { Router } from 'express';
import {
  deleteUser,
  getAllUsers,
  getDashboardStats,
} from '../controllers/admin.controller';
import { verifyAdmin, verifyToken } from '../middlewares/auth.middleware';

const adminRouter = Router();

adminRouter.use(verifyToken, verifyAdmin);
adminRouter.get('/users', getAllUsers);
adminRouter.get('/dashboard', getDashboardStats);
adminRouter.delete('/users/:id', deleteUser);

export { adminRouter };
