import Image from 'next/image';
interface ServiceCardProps {
  title: string;
  items: string[];
  icon: any;
}
export default function ServiceCard({ title, items, icon }: ServiceCardProps) {
  return (
    <div
      key={title}
      className='lg:h-[376px] bg-[#051219] rounded-xl shadow justify-start items-center lg:flex-row flex flex-col-reverse h-full'>
      <div className='grow shrink basis-0 self-stretch px-6 py-10 bg-[#051219] rounded-xl flex-col justify-start items-start gap-4 inline-flex'>
        <div className="self-stretch text-white text-[32px] font-semibold font-['Poppins'] leading-[48px]">
          {title}
        </div>
        <div className='self-stretch h-24 flex-col justify-start items-start flex'>
          {items.map((item) => (
            <div
              key={item}
              className='self-stretch h-6 justify-start items-center gap-4 inline-flex'>
              <div className='w-2 h-2 bg-[#38b6ff] rounded-full' />
              <div className="grow shrink basis-0 text-white text-base font-normal font-['Poppins'] leading-normal">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='self-stretch lg:p-12 p-4 justify-center items-center gap-2 flex'>
        <div className='relative'>
          <Image
            src={icon}
            alt=''
            width={154}
            height={154}
            className='lg:w-36 lg:h-36 h-24 w-24 md:hidden lg:block'
          />
        </div>
      </div>
    </div>
  );
}
