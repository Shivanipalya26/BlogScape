import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { JWT_SECRET } from '../config/config';

interface AuthRequest extends Request {
  user?: JwtPayload;
}

export const verifyToken = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  // console.log('Cookie - ', req.cookies);

  const token = req.cookies.token;
  if (!token) {
    res.clearCookie('token');
    res.status(401).json({
      msg: 'Unauthorized access',
    });
    return;
  }

  try {
    const decodedToken = jwt.verify(token, JWT_SECRET as string) as JwtPayload;
    req.user = decodedToken;
    // console.log('The user is - ', req.user);
    next();
  } catch (error) {
    res.clearCookie('token');
    res.status(403).json({ msg: 'Invalid or expired token', err: error });
  }
};

export const verifyAdmin = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  if (!req.user) {
    res.status(401).json({ msg: 'Unauthorized access' });
    return;
  }

  if (req.user.role != 'admin') {
    res.status(403).json({ msg: 'Access denied, Admins only!' });
    return;
  }

  next();
};
