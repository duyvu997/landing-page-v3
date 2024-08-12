import IndustryExpertiseSlider from './IndustryExpertiseSlider';
import IndustryExpertiseTag from './IndustryExpertiseTag';
import WorkItem from './WorkItem';

export default function IndustryExpertise() {
  const industryExpertiseItems = [
    { name: 'All Industries', icon: '', isActive: true },
    { name: 'Ecommerce', icon: '/assets/svgs/ecom.svg' },
    { name: 'Healthcare', icon: '/assets/svgs/healthcare.svg' },
    { name: 'Insurance', icon: '/assets/svgs/insurance.svg' },
    { name: 'Real Estate', icon: '/assets/svgs/real_estate.svg' },
    {
      name: 'Business Process Management',
      icon: '/assets/svgs/management.svg',
    },
    { name: 'Custom ERP', icon: '/assets/svgs/esp.svg' },
    { name: 'Web Content Management', icon: '/assets/svgs/content.svg' },
    { name: 'AR / VR', icon: '/assets/svgs/vr.svg' },
    {
      name: 'Logistics & Supply Chain Management',
      icon: '/assets/svgs/logistic.svg',
    },
  ];

  return (
    <>
      <div className='text-center pt-10 md:pt-[5%]'>
        <span className="text-white text-3xl md:text-5xl font-bold font-['Poppins'] capitalize leading-[36px] md:leading-[57.60px]">
          Industry{' '}
        </span>
        <span className="text-[#38b6ff] text-3xl md:text-5xl font-bold font-['Poppins'] capitalize leading-[36px] md:leading-[57.60px]">
          Expertise
        </span>
      </div>
      <div className='flex flex-row px-6 md:px-[15%] py-6 md:py-[5%] justify-center items-start content-start gap-4 md:gap-6 md:flex-row flex-wrap'>
        {industryExpertiseItems.map((item) => (
          <IndustryExpertiseTag
            key={item.name}
            svgPath={item.icon}
            text={item.name}
            isActive={item.isActive}
          />
        ))}
      </div>
      <IndustryExpertiseSlider />
    </>
  );
}
