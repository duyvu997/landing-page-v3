export default function HeroDescription() {
  return (
    <div className='h-[27%] px-4 sm:px-8 md:px-[15%] py-12 sm:py-[80px] flex flex-col justify-start items-start gap-8 sm:gap-[8%]'>
      <div className='w-full h-auto flex flex-col justify-start items-start gap-6 sm:gap-[8%]'>
        <div className='w-full'>
          <span className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold font-['Poppins'] leading-[32px] sm:leading-[40px] md:leading-[48px]">
            From{' '}
          </span>
          <span className="text-[#38b6ff] text-2xl sm:text-3xl md:text-4xl font-semibold font-['Poppins'] leading-[32px] sm:leading-[40px] md:leading-[48px]">
            established IT businesses
          </span>
          <span className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold font-['Poppins'] leading-[32px] sm:leading-[40px] md:leading-[48px]">
            {' '}
            to{' '}
          </span>
          <span className="text-[#38b6ff] text-2xl sm:text-3xl md:text-4xl font-semibold font-['Poppins'] leading-[32px] sm:leading-[40px] md:leading-[48px]">
            resource-limited startups,
          </span>

          <span className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold font-['Poppins'] leading-[32px] sm:leading-[40px] md:leading-[48px]">
            {' '}
            we help you achieve your tech vision with solutions that offer a
            unique competitive edge for your customers and stakeholders.
          </span>
        </div>
        <div className="w-full text-white text-2xl sm:text-3xl md:text-4xl font-semibold font-['Poppins'] leading-[32px] sm:leading-[40px] md:leading-[48px] pt-4">
          Let our IT expertise be your catalyst for success, empowering you to
          achieve your strategic objectives and develop further in the future.
        </div>
      </div>
    </div>
  );
}
