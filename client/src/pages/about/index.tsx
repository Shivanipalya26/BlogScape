import React from 'react';
import PageLoadingAnimation from '../../styles/animation';
import AboutHeroSection from '../../components/About-hero-section';

const AboutPage: React.FC = () => {
  return (
    <PageLoadingAnimation>
      <AboutHeroSection />
    </PageLoadingAnimation>
  );
};

export default AboutPage;
