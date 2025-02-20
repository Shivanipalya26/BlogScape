import { Request, Response } from 'express';
import { UserModel } from '../models/user.model';
import { BlogPostModel } from '../models/blogPost.model';

interface AuthRequest extends Request {
  user?: {
    id: string;
    role: string;
  };
}

export const getAllUsers = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const users = await UserModel.find().select('-password');

    res.status(200).json({ msg: 'All users retrieved successfully', users });
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error });
  }
};

export const getDashboardStats = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const totalUsers = await UserModel.countDocuments({ role: 'user' });

    const totalAdmins = await UserModel.countDocuments({ role: 'admin' });

    const totalBlogs = await BlogPostModel.countDocuments();

    res.status(200).json({
      TotalUsers: totalUsers,
      TotalAdmins: totalAdmins,
      TotalBlogs: totalBlogs,
    });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error, ', error });
    return;
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const authReq = req as AuthRequest;
    const { id } = req.params;

    const userExists = await UserModel.findById(id);
    if (!userExists) {
      res.status(404).json({ msg: 'User not found' });
      return;
    }

    if (authReq.user?.id === userExists._id.toString()) {
      res.status(403).json({ msg: 'Admins cannot delete themselves' });
      return;
    }

    await UserModel.deleteOne({ _id: id });

    res.status(200).json({ msg: 'User deleted successfully by admin ' });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error, ', error });
    return;
  }
};
