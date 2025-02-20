import React from 'react';
import { Link } from 'react-router-dom';
import * as T from '../../styles/typography';
import MDEditor from '@uiw/react-md-editor';
import { DateIcon, LocationIcon } from '../../styles/icons';

type BlogCardProps = {
  blog: {
    id?: string;
    title?: string;
    author?: string | { name: string };
    excerpt?: string;
    content?: string;
    date?: string;
    location?: string;
    path?: string;
    image?: string;
  };
};

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <li className="px-4 py-5 duration-150 hover:border-white hover:rounded-xl hover:bg-gray-100">
      <Link
        to={blog.path || `/blog/${blog.id}`}
        className="space-y-3 flex justify-between items-center"
      >
        <div className="flex-1">
          <div className="flex items-center">
            <div>
              <T.H5>
                <span className="block text-teal-600 font-medium">
                  {blog.title}
                </span>
              </T.H5>
              <T.H6 className="text-base text-gray-800 font-semibold mt-1">
                {typeof blog.author === 'object'
                  ? blog.author.name
                  : blog.author || 'Unknown'}
              </T.H6>
            </div>
          </div>

          <T.P className="text-gray-600 sm:text-sm pt-2">{blog.excerpt}</T.P>

          <div className="prose max-w-full text-gray-800">
            <T.P className="text-gray-600 sm:text-sm pt-2">
              <MDEditor.Markdown
                source={blog.content}
                style={{ backgroundColor: 'transparent', color: 'inherit' }}
              />
            </T.P>
          </div>

          <div className="text-sm text-gray-600 flex items-center gap-6 mt-6">
            <span className="flex items-center gap-2">
              <DateIcon />
              {blog.date}
            </span>

            <span className="flex items-center gap-2">
              <LocationIcon />
              {blog.location}
            </span>
          </div>
        </div>

        {blog.image && (
          <div className="w-32 h-24 flex-shrink-0">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        )}
      </Link>
    </li>
  );
};

export default BlogCard;
