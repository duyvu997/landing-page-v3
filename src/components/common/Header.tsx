"use client";

import { useParams, usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const headerNavLinks: { href?: string; title: string }[] = [
  { href: "/", title: "Home" },
  { href: "/about", title: "About Us" },
  { href: "/portfolio", title: "Portfolio" },
  { href: "/services", title: "Services" },
  { href: "/blogs", title: "Blogs" },
  { href: "/careers", title: "Careers" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="shadow backdrop-blur-[20px]">
      {/* Desktop Header */}
      <div className='flex lg:h-24 h-[72px] px-[10%] py-6 justify-between items-center'>
        <Link href={'/'}>
          <div className='relative w-[88.12px] h-11'>
            <Image
              src="/assets/images/logo.png"
              alt={""}
              width={88.12}
              height={11}
            />
          </div>
        </Link>

        <div className="flex h-10 items-center space-x-4">
          <div className="block md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {menuOpen ? (
                <svg
                  className='h-8 w-8'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className='h-8 w-8'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              )}
            </button>
          </div>

          <div className="hidden grow shrink basis-0 h-6 justify-center items-center gap-12 md:flex">
            {headerNavLinks.map((link) => {
              const isSelected =
                (link.href === '/' && pathname === '/') ||
                (link.href !== '/' && pathname.includes(link.href as string));

              return (
                <Link
                  key={link.title}
                  href={`${link.href}`}
                  className={`text-white text-base font-bold uppercase leading-normal tracking-tight
                    ${isSelected ? "dark:text-primary" : "dark:text-gray-100"}
                  `}
                >
                  {link.title.toUpperCase()}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="hidden md:flex px-6 py-3 bg-primary rounded-xl items-start gap-2">
          <div className="text-center text-[#02070a] text-base font-bold uppercase tracking-tight">
            Contact Us
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      {menuOpen && (
        <div className='flex flex-col w-full h-auto'>
          <nav className='py-14 flex flex-col items-center gap-12'>
            {headerNavLinks.map((link) => {
              const isSelected =
                (link.href === '/' && pathname === '/') ||
                (link.href !== '/' && pathname.includes(link.href as string));

              return (
                <Link
                  key={link.title}
                  href={`${link.href}`}
                  onClick={toggleMenu}
                  className={`text-white text-base font-bold font-['Poppins'] uppercase leading-normal tracking-tight
                    ${isSelected ? 'dark:text-[#38b6ff]' : 'dark:text-gray-100'}
                  `}>
                  {link.title.toUpperCase()}
                </Link>
              );
            })}
          </nav>
          <div className="px-6 py-3 bg-primary rounded-xl flex justify-center items-start gap-2 m-auto w-fit mb-10">
            <button className="text-center text-[#02070a] text-base font-bold uppercase tracking-tight w-fit">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
