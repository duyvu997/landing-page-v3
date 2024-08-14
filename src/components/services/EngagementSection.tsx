import Image from 'next/image';

export default function EngagementSection() {
  return (
    <>
      <div className=' lg:h-[1216px] md:px-[15%]  lg:py-[100px] px-6 py-14 rounded-[7px] flex-col justify-start items-start gap-20 inline-flex'>
        <div className='self-stretch'>
          <span className="text-white text-5xl font-bold font-['Poppins'] capitalize leading-[57.60px]">
            Engagement{' '}
          </span>
          <span className="text-[#38b6ff] text-5xl font-bold font-['Poppins'] capitalize leading-[57.60px]">
            Models
          </span>
        </div>
        <div className='self-stretch lg:h-[420px] flex-col justify-start items-center gap-14 flex'>
          <div className='lg:h-[148px] flex-col justify-start items-center gap-4 flex'>
            <div className="self-stretch text-center text-[#38b6ff] text-[32px] font-semibold font-['Poppins'] leading-[48px]">
              Project-Based Delivery
            </div>
            <div className="opacity-70 text-center text-white text-sm font-normal font-['Poppins'] leading-[21px] lg:w-1/2 w-4/5">
              Provides the dedicated resources to carry the software development
              process to completion based on the requirements of the clientThe
              cost of the whole project is calculated by the total number of
              man-hours required to complete the project
            </div>

            <Image
              src='/assets/images/services/project_base.png'
              alt=''
              width={1000}
              height={1000}
              className='w-full h-[200px] md:hidden lg:block hidden'
            />
            <Image
              src='/assets/images/services/v_project_base.png'
              alt=''
              width={1000}
              height={1000}
              className='w-full md:hidden block lg:hidden'
            />
          </div>
        </div>
        <div className='self-stretch lg:h-[420px] flex-col justify-start items-center gap-14 flex'>
          <div className='lg:h-[148px] flex-col justify-start items-center gap-4 flex'>
            <div className="self-stretch text-center text-[#38b6ff] text-[32px] font-semibold font-['Poppins'] leading-[48px]">
              Offshore Development Center
            </div>
            <div className="opacity-70 text-center text-white text-sm font-normal font-['Poppins'] leading-[21px] lg:w-1/2 w-4/5">
              Provides the implementation solutions and timeline to complete the
              project based on the requirements of the client. The cost of whole
              project is fix
            </div>

            <Image
              src='/assets/images/services/offshore.png'
              alt=''
              width={1000}
              height={1000}
              className='w-full h-[200px] hidden lg:block'
            />

            <Image
              src='/assets/images/services/v_offshore.png'
              alt=''
              width={1000}
              height={1000}
              className='w-full lg:hidden block'
            />
          </div>
        </div>
      </div>
    </>
  );
}
