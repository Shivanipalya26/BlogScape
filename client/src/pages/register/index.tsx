import RegisterHeroSection from '../../components/Register-hero-section';
import PageLoadingAnimation from '../../styles/animation';

const Register: React.FC = () => (
  <PageLoadingAnimation>
    <RegisterHeroSection />
  </PageLoadingAnimation>
);

export default Register;
