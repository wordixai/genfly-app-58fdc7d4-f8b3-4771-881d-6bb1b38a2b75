import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import IntroSection from '../components/IntroSection';
import CTASection from '../components/CTASection';
import NavigationMenu from '../components/NavigationMenu';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <IntroSection />
      <CTASection />
      <NavigationMenu />
      <Footer />
    </div>
  );
};

export default Index;