import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedin,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="bg-[#121015] text-white">
      <div className="max-w-screen-xl w-full mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-2">
          <h4 className="font-figtree font-semibold text-lg">Company</h4>
          {[
            "Home",
            "Services",
            "Industries",
            "Portfolio",
            "Blog",
            "Contact us",
            "FAQ’s",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="block font-figtree text-[#D2D2D2] hover:text-white transition"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="space-y-2">
          <h4 className="font-figtree font-semibold text-lg">Products</h4>
          <a
            href="#"
            className="block font-figtree text-[#D2D2D2] hover:text-white transition"
          >
            VX School Board
          </a>
        </div>

        <div className="space-y-4">
          <h4 className="font-figtree font-semibold text-lg">
            Contact Details
          </h4>
          <div className="flex flex-col space-y-2">
            <div className="flex flex-col lg:flex-col items-start lg:items-start xl:flex-row xl:items-center gap-2 xl:gap-6 lg:gap-2">
              <div className="flex items-center gap-2 font-figtree text-[#D2D2D2] hover:text-white">
                <FaPhoneAlt /> <span>+91 9876543210</span>
              </div>
              <div className="flex items-center gap-2 font-figtree text-[#D2D2D2] hover:text-white">
                <FaPhoneAlt /> <span>+91 9876543210</span>
              </div>
            </div>
            <div className="flex items-center gap-2 font-figtree text-[#D2D2D2] hover:text-white">
              <FaEnvelope /> <span>vxsoftwaresolutions@gmail.com</span>
            </div>
          </div>

          <div>
            <h5 className="font-figtree font-semibold text-sm mb-2">Socials</h5>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="p-2 bg-[#1A1A1A] rounded hover:bg-[#333] transition"
              >
                <FaLinkedin color="#0076B2" size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-[#1A1A1A] rounded hover:bg-[#333] transition"
              >
                <RiTwitterXFill color="#FFFFFF" size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-[#1A1A1A] rounded hover:bg-[#333] transition"
              >
                <FaYoutube color="#FF0000" size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-[#1A1A1A] rounded hover:bg-[#333] transition"
              >
                <FaFacebookF color="#1877F2" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <h2 className="font-figtree font-extrabold text-[4rem] md:text-[6rem] footertext-outline  text-center leading-none select-none">
          VX SOFTWARE SOLUTIONS
        </h2>
      </div>

      <div className="bg-[#8CEC3C] text-black text-left px-6  py-3 font-figtree font-medium">
        © Copyright 2025 VX Software Solutions – All Rights Reserved
      </div>
    </footer>
  );
}
