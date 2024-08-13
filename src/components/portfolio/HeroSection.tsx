export default function HeroSection() {
  return (
    <div className='relative h-[70vh] px-4 sm:px-8 lg:px-[20%] flex flex-col justify-center bg-[url(/assets/images/hero-work.png)] bg-cover bg-no-repeat'>
      <div className='text-center'>
        <span className="text-white text-2xl lg:text-[32px] font-semibold font-['Poppins'] ">
          We provide a{' '}
        </span>
        <span className="text-[#38b6ff] text-2xl lg:text-[32px] font-semibold font-['Poppins'] ">
          flexible
        </span>
        <span className="text-white text-2xl lg:text-[32px] font-semibold font-['Poppins'] ">
          {' '}
          and{' '}
        </span>
        <span className="text-[#38b6ff] text-2xl lg:text-[32px] font-semibold font-['Poppins'] ">
          cost-effective
        </span>
        <span className="text-white text-2xl lg:text-[32px] font-semibold font-['Poppins'] ">
          {' '}
          solution for businesses to manage their IT needs, allowing them to
          focus on their core competencies
        </span>
      </div>
    </div>
  );
}
