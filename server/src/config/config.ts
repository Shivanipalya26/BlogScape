import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT;
export const DB_URL = process.env.DB_URL;
export const FRONTEND_URL = process.env.FRONTEND_URL;
export const JWT_SECRET = process.env.JWT_SECRET;
