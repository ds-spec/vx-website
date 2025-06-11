import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SubNavbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-300">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-900">
              VX SCHOOL BOARD
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-80 flex items-baseline space-x-8">
              <Link
                href="/schools"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                FOR SCHOOLS
              </Link>
              <Link
                href="/parents"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                FOR PARENTS
              </Link>
              <Link
                href="/teachers"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                FOR TEACHERS
              </Link>
              <Link
                href="/pricing"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                PRICING
              </Link>
              <Link
                href="/faqs"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                FAQs
              </Link>
              <Link
                href="/contactus"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                CONTACT US
              </Link>
            </div>
          </div>

          {/* Login Button */}
          <div className="hidden md:block">
            <Link
              href="/login"
              className="bg-[#5029FF] hover:bg-purple-700 text-white pl-4 pr-1  py-1 rounded-full text-sm font-medium flex items-center gap-4  transition-colors"
            >
              Login
              <div className="bg-white rounded-full p-2">
                <ArrowRight size={20} className="text-black" />
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="bg-gray-50 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
          <Link
            href="/schools"
            className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
          >
            FOR SCHOOLS
          </Link>
          <Link
            href="/parents"
            className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
          >
            FOR PARENTS
          </Link>
          <Link
            href="/teachers"
            className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
          >
            FOR TEACHERS
          </Link>
          <Link
            href="/pricing"
            className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
          >
            PRICING
          </Link>
          <Link
            href="/faqs"
            className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
          >
            FAQs
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
          >
            CONTACT US
          </Link>
          <div className="px-3 py-2">
            <Link
              href="/login"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center justify-center gap-2 transition-colors"
            >
              Login
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SubNavbar;
