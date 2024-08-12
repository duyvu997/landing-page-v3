'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import SocialIcon from '@/components/common/social-icons';

const addresses = [
  {
    name: 'Headquater',
    detail: '50 Cuu Long Street',
    address: 'Ward 2, Tan Binh Dist, HCMC, Vietnam',
    phone: 'Phone: +84 936932127',
    hotline: 'Hotline: +84 908679389',
    flag: '/assets/images/countries/vietnam.svg',
  },
  {
    name: 'Delivery Center',
    detail: '75 Nguyen Thi Minh Khai Street',
    address: 'Vinh City, Nghe An Province, Vietnam',
    phone: 'Phone: +84 936932127',
    hotline: 'Hotline: +84 908679389',
    flag: '/assets/images/countries/vietnam.svg',
  },
  {
    name: 'Singapore',
    detail: '531A Upper Cross Street #04-95',
    address: 'Singapore 051531',
    hotline: 'Hotline: +84 908679389',
    flag: '/assets/images/countries/singapore.svg',
  },
  {
    name: 'Canada',
    detail: '31 Messina Avenue, Brampton',
    address: 'Ontario',
    hotline: 'Hotline: +84 908679389',
    flag: '/assets/images/countries/canada.svg',
  },
  {
    name: 'Australia Representative',
    detail: '10 Poinciana Place, Eight Mile Plains, Qld 4113',
    address: '',
    phone: 'Phone: +61 415176971',
    hotline: 'Hotline: +84 908679389',
    flag: '/assets/images/countries/australia.svg',
  },
  {
    name: 'US Representative',
    detail: '',
    address: 'New York',
    phone: 'Phone: +12 064748100',
    hotline: 'Hotline: +84 908679389',
    flag: '/assets/images/countries/usa.svg',
  },
];

const mediaData = {
  siteUrl: 'https://watatek.com/',
  siteRepo: 'https://watatek.com/',
  siteLogo: '/static/images/logo.png',
  socialBanner: '/static/images/avatar.png',
  email: 'hr@watatek.com',
  github: 'https://github.com',
  x: 'https://twitter.com/x',
  facebook: 'https://www.facebook.com/profile.php?id=61560891267921',
  youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com/company/wata-tech/',
  threads: 'https://www.threads.net',
  instagram: 'https://www.instagram.com',
  whatsapp: 'https://wa.me/84908679389',
  calendly: 'https://calendly.com/watatek/discovery',
};

export default function Footer() {
  const [gridCols, setGridCols] = useState('');

  useEffect(() => {
    const addressCount = addresses.length;

    if (addressCount < 3) {
      setGridCols('justify-center');
    } else if (addressCount === 4) {
      setGridCols('grid-cols-2');
    } else if (addressCount === 5) {
      setGridCols('grid-cols-3');
    } else {
      setGridCols('grid-cols-1 sm:grid-cols-2 lg:grid-cols-3');
    }
  }, []);

  return (
    <>
      <footer>
        <hr className='my-8 border-gray-600' />
        <div className='justify-start md:items-end flex  flex-col-reverse lg:flex-row'>
          <div className='lg:w-1/2 h-[286px] lg:h-[200px] pt-48 pr-3 pl-40 lg:pt-10 lg:pb-0 mt-[-10rem] lg:mt-0 bg-[#051219] flex-col lg:flex-row lg:gap-8 gap-4 inline-flex'>
            <div className='justify-start items-center gap-4 inline-flex w-fit'>
              <div className='w-6 h-6 justify-center items-center flex'>
                <SocialIcon
                  kind='whatsapp'
                  size={6}
                />
              </div>
              <div className="text-white text-base lg:text-xl font-medium font-['Poppins'] leading-normal">
                (+028) 3620 3636
              </div>
            </div>
            <div className='justify-start items-center gap-4 inline-flex w-fit'>
              <div className='w-6 h-6 justify-center items-center flex'>
                <SocialIcon
                  kind='mail'
                  size={6}
                />
              </div>
              <div className="text-white text-base lg:text-xl font-medium font-['Poppins'] leading-normal">
                info@watatek.com
              </div>
            </div>
          </div>
          <div className='z-10 lg:w-1/2 flex justify-end'>
            <div className='self-stretch w-[319px] lg:w-full h-[286px] px-6 py-10 bg-[#38b6ff] rounded-tl-xl flex-col justify-start items-start inline-flex'>
              <div className='self-stretch h-[206px] flex-col justify-start items-start gap-10 flex'>
                <div className='self-stretch h-[122px] flex-col justify-start items-start gap-4 flex'>
                  <div className="self-stretch text-[#02070a] text-4xl font-bold font-['Poppins'] leading-[43.20px]">
                    {"Lets' Talk"}
                  </div>
                  <div className="self-stretch opacity-70 text-[#02070a] text-sm lg:text-base font-normal font-['Poppins'] leading-[21px]">
                    If you have any ideas and projects but have not done, let us
                    help you develop them perfectly.
                  </div>
                </div>
              </div>
              <div className='rounded-xl justify-start items-center gap-6 inline-flex'>
                <div className="text-center text-[#02070a] text-lg font-semibold font-['Poppins'] leading-[27px] tracking-tight">
                  Contact us
                </div>
                <div className='p-2.5 bg-[#02070a] rounded-[50%] rotate-180 justify-start items-center gap-2.5 flex'>
                  <Image
                    src='/assets/svgs/arrow_right.svg'
                    alt='Logo'
                    width={36} // w-9 corresponds to 36px (9 * 4px)
                    height={36} // h-6 corresponds to 24px (6 * 4px)
                    className='h-6 w-6 pl-1 lg:w-9 lg:h-9'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='px-6 py-8 '>
          {/* Address Section */}
          <div className={`grid ${gridCols} gap-8 lg:px-[15%] lg:py-[4%]`}>
            {addresses.map((item, index) => (
              <div
                key={index}
                className='mb-6 flex items-start space-x-2'>
                <div>
                  <div className='flex flex-row items-center text-2xl'>
                    <p className='text-lg font-semibold lg:text-2xl'>
                      {item.name}
                    </p>
                    <Image
                      src={item.flag}
                      alt='Logo'
                      width={36}
                      height={24}
                      className='h-9 w-9 pl-1'
                    />
                  </div>
                  <div className='text-sm lg:text-base text-[#cecece]'>
                    <p>{item.detail}</p>
                    <p>{item.address}</p>
                    <p>{item.phone}</p>
                    <p>{item.hotline}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <hr className='my-8 border-gray-600' />
          <div className='flex flex-col lg:flex-row justify-between lg:px-[15%]'>
            {/* Copyright Section */}
            <p className='mt-2 text-center'>
              Copyright © WATA Tech. All Rights Reserved.
            </p>
            {/* Social Section */}
            <div className='mt-4 flex items-center justify-center space-x-6'>
              <div className='flex items-center'>
                <SocialIcon
                  kind='whatsapp'
                  href={mediaData.whatsapp}
                  size={6}
                />
              </div>
              <div className='flex items-center'>
                <SocialIcon
                  kind='linkedin'
                  href={mediaData.linkedin}
                  size={6}
                />
              </div>
              <div className='flex items-center'>
                <SocialIcon
                  kind='facebook'
                  href={mediaData.facebook}
                  size={6}
                />
              </div>
              <div className='flex items-center'>
                <SocialIcon
                  kind='calendly'
                  href={mediaData.calendly}
                  size={6}
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
