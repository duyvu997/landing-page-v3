export default function HeroSection() {
  return (
    <div className='relative h-[70vh] px-4 sm:px-8 lg:px-[20%] flex flex-col justify-center bg-[url(/assets/images/hero-work.png)] bg-cover bg-no-repeat'>
      <div className='text-center'>
        <span className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold font-['Poppins'] leading-[32px] sm:leading-[40px] lg:leading-[48px]">
          We provide a{' '}
        </span>
        <span className="text-[#38b6ff] text-2xl sm:text-3xl lg:text-4xl font-semibold font-['Poppins'] leading-[32px] sm:leading-[40px] lg:leading-[48px]">
          flexible
        </span>
        <span className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold font-['Poppins'] leading-[32px] sm:leading-[40px] lg:leading-[48px]">
          {' '}
          and{' '}
        </span>
        <span className="text-[#38b6ff] text-2xl sm:text-3xl lg:text-4xl font-semibold font-['Poppins'] leading-[32px] sm:leading-[40px] lg:leading-[48px]">
          cost-effective
        </span>
        <span className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold font-['Poppins'] leading-[32px] sm:leading-[40px] lg:leading-[48px]">
          {' '}
          solution for businesses to manage their IT needs, allowing them to
          focus on their core competencies
        </span>
      </div>
    </div>
  );
}
