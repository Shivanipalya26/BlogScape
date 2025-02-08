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
import { verifyToken } from '../middlewares/auth.middleware';

const blogRouter = Router();

blogRouter.get('/', getAllPosts);
blogRouter.get('/:id', getPost);
blogRouter.get('/search', searchPosts);

blogRouter.use(verifyToken);
blogRouter.get('/my', getPostsByUser);
blogRouter.post('/', createPost);
blogRouter.put('/:id', updatePost);
blogRouter.delete('/:id', deletePost);

export { blogRouter };
