import { Request, Response } from 'express';
import { UserModel } from '../models/user.model';
import bcrypt from 'bcrypt';

interface AuthRequest extends Request {
  user?: {
    id: string;
    role: string;
  };
}

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.findById(req.params.id).select('-password');
    if (!user) {
      res.status(404).json({ msg: 'User not found' });
      return;
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error, ', error });
    return;
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const authReq = req as AuthRequest;

    const { id } = req.params;
    const { name, email, password } = req.body;

    const userExists = await UserModel.findById(id);

    if (!userExists) {
      res.status(404).json({ msg: 'User not found' });
      return;
    }

    if (authReq.user?.id !== userExists._id.toString()) {
      res
        .status(403)
        .json({ msg: 'Unauthorized: You can only update your own profile' });
      return;
    }

    if (name) userExists.name = name;
    if (email) userExists.email = email;

    if (password) {
      const salt = await bcrypt.genSalt(10);
      userExists.password = await bcrypt.hash(password, salt);
    }

    await userExists.save();

    res.status(200).json({ msg: 'User Updated Successfully!!' });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error, ', error });
    return;
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const authReq = req as AuthRequest;
    const { id } = req.params;

    const userExists = await UserModel.findById(id);

    if (!userExists) {
      res.status(404).json({ msg: 'User not found' });
      return;
    }

    if (authReq.user?.id !== id) {
      res
        .status(403)
        .json({ msg: 'Unauthorized you can only delete your own account' });
      return;
    }

    await UserModel.deleteOne({ _id: id });

    res.status(200).json({ msg: 'User Deleted Successfully' });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error, ', error });
    return;
  }
};
