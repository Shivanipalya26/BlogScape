import { Request, Response } from 'express';
import { BlogPostModel } from '../models/blogPost.model';
import mongoose from 'mongoose';

interface AuthRequest extends Request {
  user?: { id: string };
}

export const getAllPosts = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const posts = await BlogPostModel.find().populate('author', 'name email');

    res.status(200).json({ msg: 'All posts', posts });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error, ', error });
    return;
  }
};

export const getPost = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const post = await BlogPostModel.findById(id).populate(
      'author',
      'name email',
    );

    if (!post) {
      res.status(404).json({ msg: 'Post not found' });
      return;
    }

    res.status(200).json({ Post: post });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error, ', error });
    return;
  }
};

export const getPostsByUser = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const authReq = req as AuthRequest;
    // console.log(authReq.user?.id);

    if (!authReq.user?.id) {
      res.status(401).json({ msg: 'Unauthorized: User not logged in' });
      return;
    }

    const userId = new mongoose.Types.ObjectId(authReq.user?.id);
    // console.log(userId);

    const posts = await BlogPostModel.find({ author: userId });

    res.status(200).json({ msg: 'User posts retrieved successfully', posts });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error, ', error });
    return;
  }
};

export const searchPosts = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
  } catch (error) {
    res.status(500).json({ msg: 'Server error, ', error });
    return;
  }
};

export const createPost = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const authReq = req as AuthRequest;
    const { title, content, image, tags } = req.body;

    if (!title || !content) {
      res.status(400).json({ msg: 'Title and contents are required' });
      return;
    }

    const newPost = await BlogPostModel.create({
      title,
      content,
      image: image || null,
      tags: tags,
      author: authReq.user?.id,
    });

    res.status(200).json({ msg: 'Post created successfully!!', post: newPost });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error, ', error });
    return;
  }
};

export const updatePost = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const authReq = req as AuthRequest;

    const { id } = req.params;

    const post = await BlogPostModel.findById(id);

    if (!post) {
      res.status(404).json({ msg: 'Post not found' });
      return;
    }

    if (authReq.user?.id !== post.author.toString()) {
      res
        .status(403)
        .json({ msg: 'Unauthorized, you can only update your post' });
      return;
    }

    const updatedPost = await BlogPostModel.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true, runValidators: true },
    );

    res.status(200).json({ msg: 'Post Updated Successfully', updatedPost });
  } catch (error) {
    res.status(500).json({ msg: 'Server error, ', error });
    return;
  }
};

export const deletePost = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const authReq = req as AuthRequest;
    const { id } = req.params;

    const post = await BlogPostModel.findById(id);

    if (!post) {
      res.status(404).json({ msg: 'Post not found' });
      return;
    }

    if (authReq.user?.id !== post.author.toString()) {
      res
        .status(403)
        .json({ msg: 'Unauthorized, you can only delete your post' });
      return;
    }

    await BlogPostModel.deleteOne({ _id: id });

    res.status(200).json({ msg: 'Deleted post successfully!!' });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error ,', error });
    return;
  }
};
