import { Request, Response } from 'express';
import { UserModel } from '../models/user.model';

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.find().select('-password');

    res.status(200).json({ msg: 'All users retrieved successfully', users });
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error });
  }
};

export const getDashboardStats = async (req: Request, res: Response) => {};

export const deleteUser = async (req: Request, res: Response) => {};
