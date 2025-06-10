// import Image from "next/image";
// import { FaLocationDot } from "react-icons/fa6";
// import { MdCall, MdEmail } from "react-icons/md";
// import Button from "./Button";

// export default function Contact() {
//   const serviceOptions = [
//     "AI & Machine Learning",
//     "Mobile Development",
//     "Blockchain",
//     "Big Data",
//     "Software Development",
//     "Cloud Services",
//     "AR/VR",
//     "UX/UI Services",
//   ];

//   return (
//     <>
//       <div className="flex flex-col gap-4 bg-[#0C0C0C] px-6 py-4">
//         <div className="flex flex-col gap-1">
//           <h2 className="font-figtree font-semibold text-2xl">Contact Us</h2>
//           <h5 className="font-figtree font-semibold text-xl text-[#D2D2D2]">
//             Let’s come together to create something truly great.
//           </h5>
//         </div>
//         <div className="flex flex-col lg:flex-row md:flex-col items-start gap-4  w-full bg-[#121015] rounded-xl px-5 py-6">
//           <div className="relative z-0 w-full h-[90vh] rounded-2xl">
//             <Image
//               src="/images/contact.jpg"
//               className="rounded-2xl"
//               fill
//               alt="contact form"
//               objectFit="cover"
//             />
//             <div className="absolute w-full h-full z-10 bg-[#0000008F] rounded-2xl" />
//             <div className="absolute bottom-2 left-4 z-20 flex flex-col gap-2">
//               <h4 className="font-figtree font-bold">Contact Details</h4>
//               <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-5">
//                 <div className="flex items-center gap-1">
//                   <MdCall />
//                   <h4 className="font-figtree">+91 9876543210</h4>
//                 </div>
//                 <div className="flex items-center gap-1">
//                   <MdCall />
//                   <h4 className="font-figtree">+91 9876543210</h4>
//                 </div>
//               </div>
//               <div className="flex items-center gap-1">
//                 <MdEmail />
//                 <h4 className="font-figtree">vxsoftwaresolutions@gmail.com</h4>
//               </div>
//               <div className="flex items-start gap-1">
//                 <FaLocationDot className="mt-1" />
//                 <h4 className="font-figtree w-48 md:w-sm">
//                   241/242, 4th Floor, Building No 2, Solitaire Corporate Park
//                   Chakala, Andheri (East), Mumbai, Maharashtra 400093
//                 </h4>
//               </div>
//             </div>
//           </div>
//           <div className="w-full h-[90vh]">
//             <form className="w-full h-[90vh] flex flex-col gap-6 overflow-auto">
//               {/* Name */}
//               <div className="flex flex-col gap-1">
//                 <label className="text-[#D2D2D2] font-figtree">Name</label>
//                 <input
//                   type="text"
//                   placeholder="Enter Name"
//                   className="bg-transparent border border-[#555] rounded-lg px-4 py-2 placeholder:font-figtree placeholder:text-[#777] text-white focus:outline-none focus:border-[#888]"
//                 />
//               </div>
//               <div className="flex flex-col md:flex-row gap-4">
//                 <div className="flex-1 flex flex-col gap-1">
//                   <label className="text-[#D2D2D2] font-figtree">
//                     Email ID
//                   </label>
//                   <input
//                     type="email"
//                     placeholder="Enter Email ID"
//                     className="bg-transparent border border-[#555] rounded-lg px-4 py-2 placeholder:font-figtree placeholder:text-[#777] text-white focus:outline-none focus:border-[#888]"
//                   />
//                 </div>
//                 <div className="flex-1 flex flex-col gap-1">
//                   <label className="text-[#D2D2D2] font-figtree">
//                     Phone Number
//                   </label>
//                   <input
//                     type="tel"
//                     placeholder="Enter Phone Number"
//                     className="bg-transparent border border-[#555] rounded-lg px-4 py-2 placeholder:font-figtree placeholder:text-[#777] text-white focus:outline-none focus:border-[#888]"
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-col gap-1">
//                 <label className="text-[#D2D2D2] font-figtree">Service</label>
//                 <select
//                   defaultValue=""
//                   className="bg-transparent border border-[#555] rounded-lg px-4 py-2 text-[#D2D2D2] font-figtree focus:outline-none focus:border-[#888] appearance-none"
//                 >
//                   <option value="" disabled>
//                     Select Service
//                   </option>
//                   {serviceOptions.map((svc) => (
//                     <option
//                       className="text-black font-figtree"
//                       key={svc}
//                       value={svc}
//                     >
//                       {svc}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="flex flex-col gap-1 flex-1">
//                 <label className="text-[#D2D2D2] font-figtree">Message</label>
//                 <textarea
//                   placeholder="Enter your message"
//                   className="flex-1 bg-transparent border border-[#555] rounded-lg px-4 py-2 placeholder:font-figtree placeholder:text-[#777] text-white resize-none focus:outline-none focus:border-[#888]"
//                 />
//               </div>
//               <div className="self-end">
//                 <Button
//                   name={"Send Request"}
//                   bgcolor={"#5029FF"}
//                   textcolor={"white"}
//                 />
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall, MdEmail } from "react-icons/md";
import Button from "./Button";

export default function Contact() {
  const serviceOptions = [
    "AI & Machine Learning",
    "Mobile Development",
    "Blockchain",
    "Big Data",
    "Software Development",
    "Cloud Services",
    "AR/VR",
    "UX/UI Services",
  ];

  return (
    <>
      <div className="flex flex-col gap-3 sm:gap-4 bg-[#0C0C0C] px-3 sm:px-6 lg:px-3 py-4 sm:py-6">
        {/* Header Section */}
        <div className="flex flex-col gap-1 sm:gap-2 text-center sm:text-left">
          <h2 className="font-figtree font-semibold text-xl sm:text-2xl lg:text-3xl">
            Contact Us
          </h2>
          <h5 className="font-figtree font-semibold text-lg sm:text-xl text-[#D2D2D2]">
            Let's come together to create something truly great.
          </h5>
        </div>

        {/* Main Content Container */}
        <div className="flex flex-col xl:flex-row items-start gap-4 sm:gap-6 w-full bg-[#121015] rounded-xl px-3 sm:px-5 lg:px-6 py-4 sm:py-6">
          {/* Contact Image & Details Section */}
          <div className="relative z-0 w-full xl:w-1/2 h-[50vh] sm:h-[60vh] lg:h-[80vh] xl:h-[90vh] rounded-2xl overflow-hidden">
            <Image
              src="/images/contact.jpg"
              className="rounded-2xl object-cover"
              fill
              alt="contact form"
            />
            <div className="absolute w-full h-full z-10 bg-[#0000008F] rounded-2xl" />

            {/* Contact Details Overlay */}
            <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 z-20 flex flex-col gap-2 sm:gap-3">
              <h4 className="font-figtree font-bold text-lg sm:text-xl text-white">
                Contact Details
              </h4>

              {/* Phone Numbers */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-5">
                <div className="flex items-center gap-1 sm:gap-2">
                  <MdCall className="text-white text-sm sm:text-base" />
                  <h4 className="font-figtree text-sm sm:text-base text-white">
                    +91 9876543210
                  </h4>
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <MdCall className="text-white text-sm sm:text-base" />
                  <h4 className="font-figtree text-sm sm:text-base text-white">
                    +91 9876543210
                  </h4>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-1 sm:gap-2">
                <MdEmail className="text-white text-sm sm:text-base" />
                <h4 className="font-figtree text-sm sm:text-base text-white break-all">
                  vxsoftwaresolutions@gmail.com
                </h4>
              </div>

              {/* Address */}
              <div className="flex items-start gap-1 sm:gap-2">
                <FaLocationDot className="mt-1 text-white text-sm sm:text-base flex-shrink-0" />
                <h4 className="font-figtree text-sm sm:text-base text-white leading-relaxed max-w-xs sm:max-w-sm lg:max-w-md">
                  241/242, 4th Floor, Building No 2, Solitaire Corporate Park
                  Chakala, Andheri (East), Mumbai, Maharashtra 400093
                </h4>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="w-full xl:w-1/2 h-auto xl:h-[90vh]">
            <form className="w-full h-full flex flex-col gap-4 sm:gap-6 xl:overflow-auto">
              {/* Name Field */}
              <div className="flex flex-col gap-1 sm:gap-2">
                <label className="text-[#D2D2D2] font-figtree text-sm sm:text-base">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="bg-transparent border border-[#555] rounded-lg px-3 sm:px-4 py-2 sm:py-3 placeholder:font-figtree placeholder:text-[#777] text-white focus:outline-none focus:border-[#888] text-sm sm:text-base"
                />
              </div>

              {/* Email & Phone Row */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 flex flex-col gap-1 sm:gap-2">
                  <label className="text-[#D2D2D2] font-figtree text-sm sm:text-base">
                    Email ID
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Email ID"
                    className="bg-transparent border border-[#555] rounded-lg px-3 sm:px-4 py-2 sm:py-3 placeholder:font-figtree placeholder:text-[#777] text-white focus:outline-none focus:border-[#888] text-sm sm:text-base"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-1 sm:gap-2">
                  <label className="text-[#D2D2D2] font-figtree text-sm sm:text-base">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter Phone Number"
                    className="bg-transparent border border-[#555] rounded-lg px-3 sm:px-4 py-2 sm:py-3 placeholder:font-figtree placeholder:text-[#777] text-white focus:outline-none focus:border-[#888] text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Service Dropdown */}
              <div className="flex flex-col gap-1 sm:gap-2">
                <label className="text-[#D2D2D2] font-figtree text-sm sm:text-base">
                  Service
                </label>
                <select
                  defaultValue=""
                  className="bg-transparent border border-[#555] rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-[#D2D2D2] font-figtree focus:outline-none focus:border-[#888] appearance-none text-sm sm:text-base"
                >
                  <option value="" disabled>
                    Select Service
                  </option>
                  {serviceOptions.map((svc) => (
                    <option
                      className="text-black font-figtree"
                      key={svc}
                      value={svc}
                    >
                      {svc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message Textarea */}
              <div className="flex flex-col gap-1 sm:gap-2 flex-1">
                <label className="text-[#D2D2D2] font-figtree text-sm sm:text-base">
                  Message
                </label>
                <textarea
                  placeholder="Enter your message"
                  rows={4}
                  className="flex-1 min-h-[100px] sm:min-h-[120px] xl:flex-1 bg-transparent border border-[#555] rounded-lg px-3 sm:px-4 py-2 sm:py-3 placeholder:font-figtree placeholder:text-[#777] text-white resize-none focus:outline-none focus:border-[#888] text-sm sm:text-base"
                />
              </div>

              {/* Submit Button */}
              <div className="self-center sm:self-end mt-2 sm:mt-0">
                <Button
                  name={"Send Request"}
                  bgcolor={"#5029FF"}
                  textcolor={"white"}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
