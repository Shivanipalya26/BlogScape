import mongoose from 'mongoose';

const BlogPostSchema = new mongoose.Schema({});

export const BlogPostModel = mongoose.model('BlogPost', BlogPostSchema);
