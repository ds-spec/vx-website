import React from 'react';
import { Phone, Mail, Linkedin, Twitter, Youtube, Facebook } from 'lucide-react';
import { Figtree } from "next/font/google";
const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Customize as needed
});


export default function VXSoftwareFooter() {
  return (
    <div className={`bg-black text-white ${figtree.className}`}>
      {/* Main Content */}
      <div className="px-6 pt-8 pb-16">
        {/* Top Navigation Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Company Section */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white">FOR PARENTS</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">FOR SCHOOLS</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">FOR TEACHERS</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">PRICING</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">FAQs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">CONTACT US</a></li>
            </ul>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Links</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="text-[#D8FF29] hover:text-yellow-300">School Login</a></li>
              <li><a href="#" className="text-[#D8FF29]  hover:text-yellow-300">Teacher Login</a></li>
              <li><a href="#" className="text-[#D8FF29]  hover:text-yellow-300">Parent/ Student Login</a></li>
            </ul>
          </div>

          {/* Contact Details Section */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Contact Details</h3>
            <div className="space-y-2 text-sm">
              {/* Phone Numbers */}
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-white" />
                <span className="text-white">+91 9876543210</span>
                 <Phone className="w-4 h-4 ml-4 text-white" />
                <span className="text-white">+91 9876543210</span>
              </div>
              
              {/* Email */}
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-white" />
                <span className="text-white">vxsoftwaresolutions@gmail.com</span>
              </div>
              
              {/* Socials */}
              <div className="mt-4">
                <h4 className="text-white text-lg font-bold  mb-2">Socials</h4>
                <div className="flex space-x-1">
                  <a href="#" className="w-10 h-10  flex items-center justify-center">
                <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.333374" width="32" height="32" rx="2.66667" fill="white" fill-opacity="0.2"/>
<path d="M5.5984 12.1821H10.1259V26.7496H5.5984V12.1821ZM7.8634 4.93213C8.38269 4.93213 8.8903 5.08615 9.32204 5.3747C9.75377 5.66324 10.0902 6.07336 10.2888 6.55316C10.4874 7.03296 10.5393 7.56089 10.4378 8.07016C10.3363 8.57943 10.086 9.04715 9.71867 9.41417C9.35131 9.78118 8.88335 10.031 8.37398 10.132C7.86462 10.233 7.33674 10.1807 6.85713 9.98159C6.37751 9.78253 5.96772 9.44569 5.67958 9.01368C5.39144 8.58167 5.23791 8.07391 5.2384 7.55463C5.23907 6.85887 5.51592 6.19183 6.00813 5.70009C6.50034 5.20835 7.16764 4.93213 7.8634 4.93213ZM12.9659 12.1821H17.3059V14.1821H17.3659C17.9709 13.0371 19.4459 11.8296 21.6484 11.8296C26.2334 11.8196 27.0834 14.8371 27.0834 18.7496V26.7496H22.5559V19.6621C22.5559 17.9746 22.5259 15.8021 20.2034 15.8021C17.8809 15.8021 17.4859 17.6421 17.4859 19.5521V26.7496H12.9659V12.1821Z" fill="#0076B2"/>
</svg>


                  </a>
                  <a href="#" className="w-10 h-10   flex items-center justify-center">
                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.333374" width="32" height="32" rx="2.66667" fill="white" fill-opacity="0.2"/>
<path d="M22.0848 6.96191L17.0322 12.7376L12.6633 6.96191H6.33337L13.8951 16.8486L6.7288 25.0394H9.79717L15.3281 18.7186L20.1623 25.0394H26.3334L18.4511 14.6187L25.1511 6.96191H22.0848ZM21.0087 23.2038L9.91549 8.70038H11.7389L22.7078 23.2028L21.0087 23.2038Z" fill="white"/>
</svg>

                  </a>
                  <a href="#" className="w-10 h-10  flex items-center justify-center">
                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.333374" width="32" height="32" rx="2.66667" fill="white" fill-opacity="0.2"/>
<path d="M27.8294 10.2329C27.6973 9.7202 27.4303 9.25224 27.0561 8.87766C26.682 8.50308 26.2143 8.23556 25.7018 8.1029C23.843 7.6001 16.3334 7.6001 16.3334 7.6001C16.3334 7.6001 8.82377 7.6001 6.96617 8.1041C6.45333 8.23628 5.98527 8.50346 5.61068 8.87784C5.23609 9.25222 4.96865 9.72013 4.83617 10.2329C4.33337 12.1289 4.33337 16.0001 4.33337 16.0001C4.33337 16.0001 4.33337 19.9097 4.83737 21.7685C5.10737 22.8125 5.92097 23.6261 6.96617 23.8973C8.82377 24.4001 16.3334 24.4001 16.3334 24.4001C16.3334 24.4001 23.843 24.4001 25.7018 23.8961C26.2142 23.7638 26.682 23.4967 27.0563 23.1226C27.4307 22.7485 27.698 22.2809 27.8306 21.7685C28.3334 19.9097 28.3334 16.0001 28.3334 16.0001C28.3334 16.0001 28.3334 12.1289 27.8294 10.2329ZM13.9334 19.6001V12.4001L20.1662 16.0001L13.9334 19.6001Z" fill="#FF0000"/>
</svg>

                  </a>
                  <a href="#" className="w-10 h-10  flex items-center justify-center">
                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.333374" width="32" height="32" rx="2.66667" fill="white" fill-opacity="0.2"/>
<path d="M7.76195 4C5.87087 4 4.33337 5.5375 4.33337 7.42857V24.5714C4.33337 26.4625 5.87087 28 7.76195 28H13.0227V20.1893H10.1941V16H13.0227V14.1946C13.0227 9.52857 15.1334 7.36429 19.7191 7.36429C20.5869 7.36429 22.0869 7.53571 22.703 7.70714V11.5C22.3816 11.4679 21.8191 11.4464 21.1173 11.4464C18.8673 11.4464 17.9994 12.2982 17.9994 14.5107V16H22.478L21.7066 20.1893H17.9941V28H24.9048C26.7959 28 28.3334 26.4625 28.3334 24.5714V7.42857C28.3334 5.5375 26.7959 4 24.9048 4H7.76195Z" fill="#1877F2"/>
</svg>

                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Large VX SOFTWARE BOARD Text - Outline Style */}
        <div className="text-center">
          <div 
            className="text-7xl md:text-8xl lg:text-[118px] font-bold leading-tight tracking-wide"
            style={{
              color: 'transparent',
              WebkitTextStroke: '2px #1423C9',
              textStroke: '2px #1423C9'
            }}
          >
            VX SOFTWARE BOARD
          </div>
        </div>
      </div>

      {/* Copyright Footer - Bright Green */}
      <div className="bg-lime-400 text-black py-2 px-6">
        <p className="text-sm font-medium">
          © Copyright 2025 VX Software Solutions – All Rights Reserved
        </p>
      </div>
    </div>
  );
}