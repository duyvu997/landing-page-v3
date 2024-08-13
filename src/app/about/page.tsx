import AwardSection from "@/components/home/AwardSection";
import HeroSection from "@/components/about/HeroSection";
import KeyMemberSection from "@/components/about/KeyMemberSection";
import ManagementTeamSection from "@/components/about/ManagementTeamSection";
import MissionSection from "@/components/about/MissionSection";
import USPSection from "@/components/about/USPSection";

export default function About() {
  return (
    <div className="bg-black-200">
      <HeroSection />
      <USPSection />
      <MissionSection />
      <AwardSection />
      <ManagementTeamSection />
      <KeyMemberSection />
    </div>
  );
}
