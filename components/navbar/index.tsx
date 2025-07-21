"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useFormStore } from '@/app/useFormStore';

const navItems = [
  { label: "About Us", href: "/about" },
  {
    label: "Courses",
    submenu: [
      { label: "All Courses", href: "/courses" },
      { label: "Product Design", href: "/courses/product-design" },
      { label: "Front-end Development", href: "/courses/frontend-development" },
      { label: "Back-end Development", href: "/courses/backend-development" },
      { label: "Data Analysis", href: "/courses/data-analysis" },
      { label: "Data Science", href: "/courses/data-science" },
      { label: "Digital Marketing", href: "/courses/digital-marketing" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
  {
    label: "Blog",
    submenu: [
      { label: "All posts", href: "/blogs" },
      { label: "General", href: "/blogs?post=general" },
      { label: "Engineering", href: "/blogs?post=engineering" },
      { label: "Data", href: "/blogs?post=data" },
      { label: "Product", href: "/blogs?post=product" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
];


const Navbar = () => {
  const openForm = useFormStore((state) => state.openForm);

   const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setDropdownOpen((prev) => (prev === label ? null : label));
  };

  const handleClickOutside = (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.MouseEvent<HTMLDivElement, MouseEvent> | MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest(".dropdown-wrapper")) {
      setDropdownOpen(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white border border-ridot-gray z-50 sticky top-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
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
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
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
            mobileOpen ? "absolute top-full left-0 w-full z-50 bg-white shadow-md" : "hidden"
          } w-full md:block md:w-auto`}
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 space-y-5 md:space-y-0 md:space-x-7 lg:space-x-14 rtl:space-x-reverse md:flex-row md:mt-0 items-center">
            {navItems.map((item) => (
              <li key={item.label} className="relative dropdown-wrapper">
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      onMouseEnter={() => toggleDropdown(item.label)}
                      className="flex items-center justify-between cursor-pointer w-full py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
                    >
                      {item.label}
                      <svg
                        className="w-2.5 h-2.5 ms-2.5"
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
                      <div className="z-10 font-normal absolute top-full mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-50">
                        <ul className="py-2 text-sm">
                          {item.submenu.map((sub) => (
                            <li key={sub.label}>
                              <Link
                                href={sub.href}
                                className="block px-4 py-2 hover:bg-gray-100 hover:cursor-pointer"
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
                    className={`block py-2 px-3 rounded-sm md:p-0 ${
                      pathname === item.href
                        ? "text-primary font-semibold"
                        : ""
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
                className="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-4 py-2 text-center"
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
