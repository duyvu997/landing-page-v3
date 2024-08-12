import HeroAwards from '@/components/portfolio/HeroAwards';
import HeroDescription from '@/components/portfolio/HeroDescription';
import HeroSection from '@/components/portfolio/HeroSection';
import IndustryExpertise from '@/components/portfolio/IndustryExpertise';

export default function Portfolio() {
  return (
    <>
      <HeroSection />
      <HeroDescription />
      <HeroAwards />
      <IndustryExpertise />
    </>
  );
}
