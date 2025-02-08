import LoginHeroSection from '../../components/Login-hero-section';
import PageLoadingAnimation from '../../styles/animation';

const Login: React.FC = () => (
  <PageLoadingAnimation>
    <LoginHeroSection />
  </PageLoadingAnimation>
);

export default Login;
