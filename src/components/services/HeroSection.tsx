export default function HeroSection() {
  return (
    <div className='relative h-[70vh] px-4 sm:px-8 lg:px-[20%] flex flex-col justify-center bg-[url(/assets/images/hero-service.png)] bg-cover bg-no-repeat'>
      <div className='text-center'>
        <span className="text-white text-[32px] font-semibold font-['Poppins'] leading-[48px]">
          WATA TECH specializes in creating custom software solutions for{' '}
        </span>
        <span className="text-[#38b6ff] text-[32px] font-semibold font-['Poppins'] leading-[48px]">
          various industries
        </span>
        <span className="text-white text-[32px] font-semibold font-['Poppins'] leading-[48px]">
          {' '}
          - spanning different{' '}
        </span>
        <span className="text-[#38b6ff] text-[32px] font-semibold font-['Poppins'] leading-[48px]">
          levels and requirements.
        </span>
      </div>
    </div>
  );
}
