import BlogHeroSection from '../../components/Blog-hero-section';
import PageLoadingAnimation from '../../styles/animation';

const BlogPage = () => {
  return (
    <PageLoadingAnimation>
      <BlogHeroSection />
    </PageLoadingAnimation>
  );
};

export default BlogPage;
