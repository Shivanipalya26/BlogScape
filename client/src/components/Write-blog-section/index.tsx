import React, { useState } from 'react';
import MarkdownEditor from '../Markdown-editor/index';
import * as T from '../../styles/typography/index';
import * as B from '../../styles/button/index';
import Layout from '../../styles/template/Layout';
import axios from 'axios';
import {
  blogPostFailedToast,
  blogPostSuccessToast,
} from '../../services/toast';

const CreateBlogSection = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [image, setImage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post(
        'http://localhost:3000/api/v1/blog/',
        { title, content, image },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      blogPostSuccessToast();
    } catch (error) {
      console.error('Error posting blog:', error);
      blogPostFailedToast();
    }
  };

  return (
    <section className="h-full md:h-[100vh] bg-[#eae3dd]">
      <Layout>
        <div className="text-gray-800 py-16 px-6 md:px-22 transition-colors duration-300">
          <T.H2>Create Blog</T.H2>
          <div className="mt-4">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <MarkdownEditor onChange={setContent} />
              <div className="flex flex-col items-center m-4">
                <B.Button htmlFor="submit">Post</B.Button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default CreateBlogSection;
