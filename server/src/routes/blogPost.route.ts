import { Router } from 'express';
import {
  createPost,
  deletePost,
  getAllPosts,
  getPost,
  getPostsByUser,
  searchPosts,
  updatePost,
} from '../controllers/blogPost.controller';

const blogPostRouter = Router();

blogPostRouter.get('/posts', getAllPosts);
blogPostRouter.get('posts/:id', getPost);
blogPostRouter.get('/posts/user/:userId', getPostsByUser);
blogPostRouter.get('/posts/search', searchPosts);
blogPostRouter.post('/post', createPost);
blogPostRouter.put('/post/:id', updatePost);
blogPostRouter.delete('/post/:id', deletePost);

export { blogPostRouter };
