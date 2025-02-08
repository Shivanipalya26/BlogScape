import { Request, Response } from 'express';
import { UserModel } from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/config';

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

    const newUser = await UserModel.create({
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

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        res.status(400).json({
          msg: 'All fields are required',
        });
        return;
      }
  
      const user = await UserModel.findOne({ email })
  
      if(!user) {
          res.status(401).json({
              msg: "User do not exists, kindly Register!!"
          });
          return;
      }
  
      const validPassword = await bcrypt.compare(password, user.password)
  
      if(validPassword) {
          const token = jwt.sign({
              id: user._id,
          }, JWT_SECRET as string, { expiresIn: "1h" })
  
          res.cookie("token", token, {
              httpOnly: true,
              secure: true,
              sameSite: "strict",
              maxAge: 60 * 60* 60 * 1000,
          })
  
          res.status(200).json({
              msg: "Logged IN!!",
              user,
              token
          })
      }
    } catch (error) {
      res.status(500).json({
          msg: "Server error",
          err: error
      })
    }
  };
  
  export const logout = async (req: Request, res: Response): Promise<void> => {
      res.clearCookie("token", {httpOnly: true, secure: true, sameSite: "strict"})
      res.status(200).json({msg: "Logged out!!"})
  };
