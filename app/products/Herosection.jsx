import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Figtree } from "next/font/google";
const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Customize as needed
});

export default function Herosection() {
    
  
  return (
    <div className={`bg-white p-4 ${figtree.className}`}>
    <div className="min-h-[90vh] rounded-[16px] bg-black text-white flex items-center justify-center px-6 py-10 relative">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-8 border-2 border-[#7134DD] -mt-4">
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.6987 8.10374L13.9575 7.54249C12.8437 7.17499 12.1912 6.27374 11.885 5.14124L11.1187 1.40874C11.0987 1.33499 11.05 1.23624 10.9 1.23624C10.7737 1.23624 10.7012 1.33499 10.6812 1.40874L9.91497 5.14249C9.60747 6.27499 8.95622 7.17624 7.84247 7.54374L6.10122 8.10499C5.85497 8.18499 5.85122 8.53249 6.09622 8.61624L7.84997 9.21999C8.95997 9.58874 9.60747 10.4887 9.91497 11.6162L10.6825 15.3075C10.7025 15.3812 10.7437 15.5137 10.9012 15.5137C11.0675 15.5137 11.1 15.3812 11.12 15.3075L11.8875 11.6162C12.195 10.4875 12.8425 9.58749 13.9525 9.21999L15.7062 8.61624C15.9487 8.53124 15.945 8.18374 15.6987 8.10374Z"
              fill="#FDD835"
            />
            <path
              d="M15.8637 8.25999C15.8362 8.19124 15.7825 8.13124 15.6987 8.10374L13.9575 7.54249C12.8437 7.17499 12.1912 6.27374 11.885 5.14124L11.1187 1.40874C11.1075 1.36624 11.0675 1.28874 11.0212 1.26624L11.2687 5.01249C11.4525 6.72249 11.61 7.52748 12.975 7.76249C14.1475 7.96498 15.5037 8.19749 15.8637 8.25999Z"
              fill="#FFEE58"
            />
            <path
              d="M15.8675 8.45499L12.8475 9.14749C11.7837 9.41749 11.1975 10.0337 11.1975 11.6462L10.9012 15.5137C11.0025 15.5037 11.085 15.4487 11.12 15.3075L11.8875 11.6162C12.195 10.4875 12.8425 9.58749 13.9525 9.21999L15.7062 8.61624C15.7887 8.58624 15.8412 8.52499 15.8675 8.45499Z"
              fill="#F4B400"
            />
            <path
              d="M5.72624 11.3512C4.68499 11.0075 4.58999 10.62 4.41499 9.96625L3.97874 8.43625C3.95249 8.3375 3.69499 8.3375 3.66749 8.43625L3.37124 9.85C3.19499 10.5012 2.81999 11.0187 2.17999 11.23L1.15999 11.6725C1.01874 11.7187 1.01624 11.9187 1.15749 11.9662L2.18499 12.33C2.82249 12.5412 3.19499 13.0587 3.37249 13.7075L3.66874 15.06C3.69624 15.1587 3.95249 15.1587 3.97874 15.06L4.32624 13.7137C4.50249 13.0612 4.77249 12.5425 5.63874 12.33L6.60374 11.9662C6.74499 11.9175 6.74374 11.7175 6.60124 11.6712L5.72624 11.3512Z"
              fill="#FDD835"
            />
            <path
              d="M4.06122 9.94376C4.16747 10.9263 4.22122 11.1988 5.01747 11.4025L6.67622 11.7263C6.65872 11.7025 6.63372 11.6825 6.59997 11.6725L5.72497 11.3513C4.81122 11.0388 4.55872 10.6413 4.38747 9.84626C4.21622 9.05126 4.03372 8.53251 4.03372 8.53251C3.96997 8.36126 3.87872 8.37001 3.87872 8.37001L4.06122 9.94376Z"
              fill="#FFEE58"
            />
            <path
              d="M4.09124 13.3737C4.09124 12.4475 4.59749 11.9888 5.40249 11.9888L6.65499 11.9375C6.65499 11.9375 6.58249 12.0338 6.45624 12.0638L5.63874 12.33C4.94499 12.6087 4.62874 12.7488 4.41374 13.6975C4.41374 13.6975 4.13624 14.8012 4.08374 14.9175C4.01124 15.08 3.92499 15.1138 3.92499 15.1138L4.09124 13.3737Z"
              fill="#F4B400"
            />
            <path
              d="M7.9675 4.0175C8.0375 3.99375 8.035 3.89375 7.96375 3.87375L6.99875 3.61375C6.89949 3.58684 6.80888 3.53471 6.73573 3.46243C6.66257 3.39015 6.60935 3.30018 6.58125 3.20125L6.20125 1.6325C6.1825 1.55625 6.07375 1.55625 6.055 1.63375L5.6975 3.19625C5.67053 3.29793 5.61693 3.39056 5.54222 3.46461C5.46751 3.53866 5.3744 3.59144 5.2725 3.6175L4.31375 3.86625C4.2425 3.885 4.2375 3.985 4.3075 4.01L5.31875 4.36C5.5 4.4225 5.64 4.57 5.695 4.75375L6.05625 6.2025C6.075 6.2775 6.1825 6.27875 6.20125 6.2025L6.575 4.74875C6.60265 4.65801 6.65155 4.57518 6.71764 4.50713C6.78373 4.43908 6.8651 4.38779 6.955 4.3575L7.9675 4.0175Z"
              fill="#F4B400"
              stroke="#F4B400"
              strokeWidth="0.125"
              strokeMiterlimit="10"
            />
          </svg>

          <span className="text-[#1423C9] text-[16px] font-medium">
            Best School Management Software
          </span>
        </div>

        {/* Main heading */}
        <h1 className={`text-3xl md:text-5xl lg:text-[40px] font-bold leading-tight mb-6 ${figtree.className}`}>
          Streamline your{' '}
          <span className="text-[#1423C9]">school's</span>{' '}
          workflow with a unified<br />
          management system. From{' '}
          <span className="text-[#1423C9]">classrooms to communication</span>
          <br />
          —everything in one place.
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-[24px] md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
          Enabling schools to thrive with intelligent tools that simplify administration,
          elevate teaching, and strengthen parent connections.
        </p>

        {/* CTA Button */}
        <button className="inline-flex items-center gap-3 bg-[#1423C9] hover:bg-blue-700 text-white font-semibold pl-8 pr-2 py-2 rounded-full transition-all duration-300 hover:shadow-blue-500/25">
          Contact us
          <div className="bg-white rounded-full p-2">
    <ArrowRight size={22} className="text-black" />
  </div>
        </button>
      </div>

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px',
        }}
      ></div>
    </div>
    </div>
  );
}
