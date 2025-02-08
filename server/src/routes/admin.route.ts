import { Router } from 'express';
import {
  deleteUser,
  getAllUsers,
  getDashboardStats,
} from '../controllers/admin.controller';
import { verifyAdmin, verifyToken } from '../middlewares/auth.middleware';

const adminRouter = Router();

adminRouter.get('/users', verifyToken, verifyAdmin, getAllUsers);
adminRouter.get('/dashboard', verifyToken, verifyAdmin, getDashboardStats);
adminRouter.delete('/users/:id', verifyToken, verifyAdmin, deleteUser);

export { adminRouter };
