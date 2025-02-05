import Layout from '../../styles/template/Layout';
import BlogCard from '../BlogCard';
import * as T from '../../styles/typography';

const mockBlogs = [
  {
    id: 1,
    title: 'The Future of AI in Web Development',
    excerpt: 'How AI is changing the way we build websites and applications.',
    image: 'https://source.unsplash.com/400x300/?technology,AI',
    author: 'John Doe',
    date: 'Feb 10, 2025',
    location: 'Banglore',
  },
  {
    id: 2,
    title: '10 Tips for Writing Engaging Blog Content',
    excerpt: "Learn how to write blogs that capture your readers' attention.",
    image: 'https://source.unsplash.com/400x300/?writing,content',
    author: 'Jane Smith',
    date: 'Jan 25, 2025',
    location: 'Pune',
  },
  {
    id: 3,
    title: 'Understanding React Performance Optimization',
    excerpt:
      'Best practices for improving the speed of your React applications.',
    image:
      'https://unsplash.com/photos/a-black-and-white-photo-of-a-tree-and-mountains-djqxj8G96ek',
    author: 'Alice Johnson',
    date: 'March 5, 2025',
    location: 'San Francisco',
  },
];

const BlogHeroSection = () => {
  return (
    <section className="h-full bg-[#ede8e8] ">
      <Layout>
        <div className="text-gray-800 py-16 px-6 md:px-20 transition-colors duration-300">
          <T.H2 className="text-gray-800 px-3">Latest Blogs</T.H2>
          <ul className="mt-4 divide-y space-y-3">
            {mockBlogs.map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </ul>
        </div>
      </Layout>
    </section>
  );
};

export default BlogHeroSection;
