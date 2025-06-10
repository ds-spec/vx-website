"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Industries", href: "/industries" },
    { label: "Products", href: "/products" }, // 👈 This goes to products page
    { label: "Portfolio", href: "/portfolio" },
    { label: "About Us", href: "/about-us" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contactus" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="flex items-center justify-between w-full bg-[#1E1E1E] border-b-[1px] border-[#313131] px-4 sm:px-6 py-4 sm:py-5">
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="vx software solutions"
            width={32}
            height={32}
          />
          <h4 className="hidden md:block md:font-bold md:font-archivo text-sm sm:text-base md:text-lg">
            VX SOFTWARE SOLUTIONS
          </h4>
        </div>

        <button
          className="md:hidden block cursor-pointer"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <Image
            alt="hamburger menu"
            src="/images/hamburger.png"
            width={32}
            height={32}
          />
        </button>

        <div className="hidden md:flex items-center gap-3">
          {navItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <h4 className="font-figtree uppercase cursor-pointer text-sm lg:text-base xl:text-lg hover:text-[#A0DD34] nav-hover-btn font-semibold transition-colors duration-200">
                {item.label}
              </h4>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="absolute bg-[#1E1E1E] w-full text-center border-r border-[#313131]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="py-6">
            {navItems.map((item, index) => (
              <Link key={index} href={item.href} onClick={toggleMobileMenu}>
                <div className="px-4 sm:px-6 py-4 hover:bg-[#313131] transition-colors duration-200">
                  <h4 className="font-figtree uppercase text-base sm:text-lg hover:text-[#A0DD34] font-semibold">
                    {item.label}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
