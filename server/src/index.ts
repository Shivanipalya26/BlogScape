import express from 'express';
import { adminRouter } from './routes/admin.route';
import { userRouter } from './routes/user.route';
import mongoose from 'mongoose';
import { authRouter } from './routes/auth.routes';
import { blogRouter } from './routes/blogPost.route';
import cors from 'cors';
import { DB_URL, FRONTEND_URL, PORT } from './config/config';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: FRONTEND_URL || 'http://localhost:5173',
  }),
);

const port = PORT || 3000;
const DB_URI = DB_URL as string;

if (!DB_URI) {
  throw new Error('DB_URI not defined...');
}

// Routes

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/blog', blogRouter);

//DB Connection

async function main(): Promise<void> {
  try {
    await mongoose.connect(DB_URI);
    console.log('Successfully connected to database');

    app.listen(port, () => {
      console.log(`Listening on port: ${port}`);
    });
  } catch (error) {
    console.log('Error connecting to database, ', error);
  }
}

main();
