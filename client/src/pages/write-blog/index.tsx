import CreateBlogSection from '../../components/Write-blog-section';
import PageLoadingAnimation from '../../styles/animation';

const WriteBlogPage: React.FC = () => {
  return (
    <PageLoadingAnimation>
      <CreateBlogSection />
    </PageLoadingAnimation>
  );
};

export default WriteBlogPage;
