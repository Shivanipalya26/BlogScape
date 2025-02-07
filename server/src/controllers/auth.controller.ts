import { Request, Response } from 'express';
import { UserModel } from '../models/user.model';
import bcrypt from 'bcrypt';

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400).json({
        msg: 'All fields are required',
      });
      return;
    }

    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      res.status(400).json({
        msg: 'Email already registered',
      });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    res.status(200).json({
      msg: 'Registered Successfully',
    });
  } catch (error) {
    res.status(500).json({
        msg: "Server Error",
        err: error
    })
  }
};

export const login = async (req: Request, res: Response) => {};

export const logout = async (req: Request, res: Response) => {};
