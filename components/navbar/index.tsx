'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useFormStore } from '@/app/useFormStore';

const navItems = [
  { label: 'About Us', href: '/about' },
  {
    label: 'Courses',
    submenu: [
      { label: 'All Courses', href: '/courses' },
      { label: 'Product Design', href: '/courses/product-design' },
      { label: 'Front-end Development', href: '/courses/frontend-development' },
      { label: 'Back-end Development', href: '/courses/backend-development' },
      { label: 'Data Analysis', href: '/courses/data-analysis' },
      { label: 'Data Science', href: '/courses/data-science' },
      { label: 'Digital Marketing', href: '/courses/digital-marketing' },
    ],
  },
  { label: 'Contact Us', href: '/contact' },
  {
    label: 'Blog',
    submenu: [
      { label: 'All posts', href: '/blogs' },
      { label: 'General', href: '/blogs?post=general' },
      { label: 'Engineering', href: '/blogs?post=engineering' },
      { label: 'Data', href: '/blogs?post=data' },
      { label: 'Product', href: '/blogs?post=product' },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
];

const Navbar = () => {
  const openForm = useFormStore((state) => state.openForm);

  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setDropdownOpen((prev) => (prev === label ? null : label));
  };

  const handleClickOutside = (
    event:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | MouseEvent,
  ) => {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown-wrapper')) {
      setDropdownOpen(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className="border-ridot-gray sticky top-0 z-50 border bg-white">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/ridot-logo.png"
            height={34}
            width={76}
            className="h-8"
            alt="Ridot Logo"
          />
        </Link>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="h-5 w-5" fill="none" viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`${
            mobileOpen
              ? 'absolute top-full left-0 z-50 w-full bg-white shadow-md'
              : 'hidden'
          } w-full md:block md:w-auto`}
        >
          <ul className="mt-4 flex flex-col items-center space-y-5 p-4 font-medium md:mt-0 md:flex-row md:space-y-0 md:space-x-7 md:p-0 lg:space-x-14 rtl:space-x-reverse">
            {navItems.map((item) => (
              <li key={item.label} className="dropdown-wrapper relative">
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      onMouseEnter={() => toggleDropdown(item.label)}
                      className="flex w-full cursor-pointer items-center justify-between rounded-sm px-3 py-2 hover:bg-gray-100 md:w-auto md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
                    >
                      {item.label}
                      <svg
                        className="ms-2.5 h-2.5 w-2.5"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    {dropdownOpen === item.label && (
                      <div className="absolute top-full z-10 mt-2 w-50 divide-y divide-gray-100 rounded-lg bg-white font-normal shadow-sm">
                        <ul className="py-2 text-sm">
                          {item.submenu.map((sub) => (
                            <li key={sub.label}>
                              <Link
                                href={sub.href}
                                className="block px-4 py-2 hover:cursor-pointer hover:bg-gray-100"
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`block rounded-sm px-3 py-2 md:p-0 ${
                      pathname === item.href ? 'text-primary font-semibold' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <button
                onClick={openForm}
                type="button"
                className="bg-primary rounded px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none"
              >
                Enroll Now
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
