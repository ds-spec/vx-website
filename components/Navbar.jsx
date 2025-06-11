// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";

// export default function Navbar() {
//   const navItems = [
//     { label: "Home", href: "/" },
//     { label: "Services", href: "/#services" },
//     { label: "Industries", href: "/industries" },
//     { label: "Products", href: "/products" }, // 👈 This goes to products page
//     { label: "Portfolio", href: "/portfolio" },
//     { label: "About Us", href: "/about-us" },
//     { label: "Blog", href: "/blog" },
//     { label: "Contact Us", href: "/contactus" },
//   ];

//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <>
//       <div className="flex items-center justify-between w-full bg-[#1E1E1E] border-b-[1px] border-[#313131] px-4 sm:px-6 py-4 sm:py-5">
//         <div className="flex items-center gap-2">
//           <Image
//             src="/images/logo.png"
//             alt="vx software solutions"
//             width={32}
//             height={32}
//           />
//           <h4 className="hidden md:block md:font-bold md:font-archivo text-sm sm:text-base md:text-lg">
//             VX SOFTWARE SOLUTIONS
//           </h4>
//         </div>

//         <button
//           className="md:hidden block cursor-pointer"
//           onClick={toggleMobileMenu}
//           aria-label="Toggle mobile menu"
//         >
//           <Image
//             alt="hamburger menu"
//             src="/images/hamburger.png"
//             width={32}
//             height={32}
//           />
//         </button>

//         <div className="hidden md:flex items-center gap-3">
//           {navItems.map((item, index) => (
//             <Link key={index} href={item.href}>
//               <h4 className="font-figtree uppercase cursor-pointer text-sm lg:text-base xl:text-lg hover:text-[#A0DD34] nav-hover-btn font-semibold transition-colors duration-200">
//                 {item.label}
//               </h4>
//             </Link>
//           ))}
//         </div>
//       </div>

//       {/* Mobile Menu Overlay */}
//       {isMobileMenuOpen && (
//         <div
//           className="absolute bg-[#1E1E1E] w-full text-center border-r border-[#313131]"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <div className="py-6">
//             {navItems.map((item, index) => (
//               <Link key={index} href={item.href} onClick={toggleMobileMenu}>
//                 <div className="px-4 sm:px-6 py-4 hover:bg-[#313131] transition-colors duration-200">
//                   <h4 className="font-figtree uppercase text-base sm:text-lg hover:text-[#A0DD34] font-semibold">
//                     {item.label}
//                   </h4>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Industries", href: "/industries" },
    {
      label: "Products",
      href: "/products",
      hasDropdown: true,
      dropdownItems: [{ label: "VX Software Product", href: "/products" }],
    },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About Us", href: "/about-us" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contactus" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileProducts = () => {
    setIsMobileProductsOpen(!isMobileProductsOpen);
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
            <div key={index} className="relative">
              {item.hasDropdown ? (
                <div className="relative">
                  <div
                    className="flex items-center gap-1 cursor-pointer"
                    onClick={() =>
                      setIsProductsDropdownOpen(!isProductsDropdownOpen)
                    }
                  >
                    <Link href={item.href}>
                      <h4 className="font-figtree uppercase text-sm lg:text-base xl:text-lg hover:text-[#A0DD34] nav-hover-btn font-semibold transition-colors duration-200">
                        {item.label}
                      </h4>
                    </Link>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isProductsDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  {isProductsDropdownOpen && (
                    <div
                      className="absolute top-full left-0 mt-2 w-48 bg-[#1E1E1E] border border-[#313131] rounded-md shadow-lg z-50"
                      onClick={() =>
                        setIsProductsDropdownOpen(!isProductsDropdownOpen)
                      }
                    >
                      {item.dropdownItems?.map(
                        (dropdownItem, dropdownIndex) => (
                          <Link key={dropdownIndex} href={dropdownItem.href}>
                            <div className="px-4 py-3 hover:bg-[#313131] transition-colors duration-200">
                              <h4 className="font-figtree text-sm lg:text-base hover:text-[#A0DD34] font-medium">
                                {dropdownItem.label}
                              </h4>
                            </div>
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <Link href={item.href}>
                  <h4 className="font-figtree uppercase cursor-pointer text-sm lg:text-base xl:text-lg hover:text-[#A0DD34] nav-hover-btn font-semibold transition-colors duration-200">
                    {item.label}
                  </h4>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="absolute bg-[#1E1E1E] w-full text-center border-r border-[#313131] z-40"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="py-6">
            {navItems.map((item, index) => (
              <div key={index}>
                {item.hasDropdown ? (
                  <div>
                    <div className="flex gap-1 items-center justify-center sm:px-6 py-4 hover:bg-[#313131] transition-colors duration-200">
                      <Link href={item.href} onClick={toggleMobileMenu}>
                        <h4 className="font-figtree uppercase text-base sm:text-lg hover:text-[#A0DD34] font-semibold">
                          {item.label}
                        </h4>
                      </Link>
                      <button
                        onClick={toggleMobileProducts}
                        className="p-1"
                        aria-label="Toggle products submenu"
                      >
                        <svg
                          className={`w-5 h-5 transition-transform duration-200 ${
                            isMobileProductsOpen ? "rotate-180" : ""
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Mobile Dropdown Items */}
                    {isMobileProductsOpen && (
                      <div className="bg-[#2A2A2A] border-t border-[#313131]">
                        {item.dropdownItems?.map(
                          (dropdownItem, dropdownIndex) => (
                            <Link
                              key={dropdownIndex}
                              href={dropdownItem.href}
                              onClick={toggleMobileMenu}
                            >
                              <div className="px-8 sm:px-10 py-3 hover:bg-[#313131] transition-colors duration-200">
                                <h4 className="font-figtree text-sm sm:text-base hover:text-[#A0DD34] font-medium">
                                  {dropdownItem.label}
                                </h4>
                              </div>
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link href={item.href} onClick={toggleMobileMenu}>
                    <div className="px-4 sm:px-6 py-4 hover:bg-[#313131] transition-colors duration-200">
                      <h4 className="font-figtree uppercase text-base sm:text-lg hover:text-[#A0DD34] font-semibold">
                        {item.label}
                      </h4>
                    </div>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
