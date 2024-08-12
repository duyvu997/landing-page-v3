// src/app/pages/index.tsx
// "use client";

import AboutSection from '@/components/home/AboutSection';
import AwardSection from '@/components/home/AwardSection';
import HeroSection from '@/components/home/HeroSection';
import PartnerSection from '@/components/home/PartnerSection';
import ServicesSection from '@/components/home/ServicesSection';
import TrustSection from '@/components/home/TrustSection';
import USPSection from '@/components/home/USPSection';
import WorkSection from '@/components/home/WorkSection';

export default function Home() {
  return (
    <div className='overflow-x-hidden bg-black text-white'>
      <HeroSection />
      <TrustSection />
      <AboutSection />
      <USPSection />
      <WorkSection />
      <ServicesSection />
      <AwardSection />
      <PartnerSection />
    </div>
  );
}
