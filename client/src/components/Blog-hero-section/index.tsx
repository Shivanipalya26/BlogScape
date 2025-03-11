import Layout from '../../styles/template/Layout';
import BlogCard from '../BlogCard';
import * as T from '../../styles/typography';
import { useEffect, useState } from 'react';
import axios from 'axios';

const mockBlogs = [
  {
    id: '1',
    title: 'The Future of AI in Web Development',
    excerpt: 'How AI is changing the way we build websites and applications.',
    image: 'https://source.unsplash.com/400x300/?technology,AI',
    author: 'John Doe',
    date: 'Feb 10, 2025',
    location: 'Bangalore',
  },
  {
    id: '2',
    title: '10 Tips for Writing Engaging Blog Content',
    excerpt: "Learn how to write blogs that capture your readers' attention.",
    image: 'https://source.unsplash.com/400x300/?writing,content',
    author: 'Jane Smith',
    date: 'Jan 25, 2025',
    location: 'Pune',
  },
  {
    id: '3',
    title: 'Understanding React Performance Optimization',
    excerpt:
      'Best practices for improving the speed of your React applications.',
    image: 'https://source.unsplash.com/400x300/?performance,optimization',
    author: 'Alice Johnson',
    date: 'March 5, 2025',
    location: 'San Francisco',
  },
];

type BlogPost = {
  id: string;
  title?: string;
  excerpt?: string;
  image?: string;
  author?: string;
  date?: string;
  location?: string;
  tags?: string[];
};

const BlogHeroSection = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/blog/');
        console.log('API Response:', response.data);

        if (Array.isArray(response.data.posts)) {
          setBlogs([...mockBlogs, ...response.data.posts]);
        } else {
          console.error('Unexpected API response format', response.data);
          setBlogs(mockBlogs);
        }
      } catch (err) {
        console.error('Error fetching blogs:', err);
        // setError("Failed to load blogs");
        setBlogs(mockBlogs);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="h-full bg-[#eae3dd]">
      <Layout>
        <div className="text-gray-800 py-16 px-6 md:px-20 transition-colors duration-300">
          <T.H2 className="text-gray-800 px-3">Latest Blogs</T.H2>

          {loading && <T.P className="text-center">Loading blogs...</T.P>}

          {error && <T.P className="text-center text-red-500">{error}</T.P>}

          {!loading && !error && blogs.length > 0 && (
            <ul className="mt-4 divide-y space-y-3">
              {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </ul>
          )}

          {!loading && !error && blogs.length === 0 && (
            <T.P className="text-center">No blogs available.</T.P>
          )}
        </div>
      </Layout>
    </section>
  );
};

export default BlogHeroSection;
