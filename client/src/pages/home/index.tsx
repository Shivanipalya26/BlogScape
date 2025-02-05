import FaqSection from '../../components/Faqs';
import HomeHeroSection from '../../components/home-hero-section';
import PageLoadingAnimation from '../../styles/animation';

const HomePage = () => {
  return (
    <PageLoadingAnimation>
      <HomeHeroSection />
      <FaqSection />
    </PageLoadingAnimation>
  );
};

export default HomePage;
