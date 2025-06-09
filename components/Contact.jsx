import Image from "next/image";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
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
      <div className="flex flex-col gap-4 bg-[#0C0C0C] px-6 py-4">
        <div className="flex flex-col gap-1">
          <h2 className="font-figtree font-semibold text-2xl">Contact Us</h2>
          <h5 className="font-figtree font-semibold text-xl text-[#D2D2D2]">
            Let’s come together to create something truly great.
          </h5>
        </div>
        <div className="flex items-start gap-4  w-full h-[97vh] bg-[#121015] rounded-xl px-5 py-6">
          <div className="relative z-0 w-full h-[90vh] rounded-2xl">
            <Image src="/images/contact.jpg" fill alt="contact form" />
            <div className="absolute w-full h-full z-10 bg-[#0000008F] rounded-2xl" />
            <div className="absolute bottom-2 left-4 z-20 flex flex-col gap-2">
              <h4 className="font-figtree font-bold">Contact Details</h4>
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-1">
                  <MdCall />
                  <h4 className="font-figtree font-bold">+91 9876543210</h4>
                </div>
                <div className="flex items-center gap-1">
                  <MdCall />
                  <h4 className="font-figtree font-bold">+91 9876543210</h4>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <MdEmail />
                <h4 className="font-figtree font-bold">
                  vxsoftwaresolutions@gmail.com
                </h4>
              </div>
              <div className="flex items-start gap-1">
                <FaLocationDot className="mt-1" />
                <h4 className="font-figtree font-bold w-sm">
                  241/242, 4th Floor, Building No 2, Solitaire Corporate Park
                  Chakala, Andheri (East), Mumbai, Maharashtra 400093
                </h4>
              </div>
            </div>
          </div>
          <div className="w-full h-[90vh]">
            <form className="w-full h-[90vh] flex flex-col gap-6 overflow-auto">
              {/* Name */}
              <div className="flex flex-col gap-1">
                <label className="text-[#D2D2D2] font-figtree">Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="bg-transparent border border-[#555] rounded-lg px-4 py-2 placeholder:font-figtree placeholder:text-[#777] text-white focus:outline-none focus:border-[#888]"
                />
              </div>
              <div className="flex gap-4">
                <div className="flex-1 flex flex-col gap-1">
                  <label className="text-[#D2D2D2] font-figtree">
                    Email ID
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Email ID"
                    className="bg-transparent border border-[#555] rounded-lg px-4 py-2 placeholder:font-figtree placeholder:text-[#777] text-white focus:outline-none focus:border-[#888]"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <label className="text-[#D2D2D2] font-figtree">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter Phone Number"
                    className="bg-transparent border border-[#555] rounded-lg px-4 py-2 placeholder:font-figtree placeholder:text-[#777] text-white focus:outline-none focus:border-[#888]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[#D2D2D2] font-figtree">Service</label>
                <select
                  defaultValue=""
                  className="bg-transparent border border-[#555] rounded-lg px-4 py-2 text-[#D2D2D2] font-figtree focus:outline-none focus:border-[#888] appearance-none"
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
              <div className="flex flex-col gap-1 flex-1">
                <label className="text-[#D2D2D2] font-figtree">Message</label>
                <textarea
                  placeholder="Enter your message"
                  className="flex-1 bg-transparent border border-[#555] rounded-lg px-4 py-2 placeholder:font-figtree placeholder:text-[#777] text-white resize-none focus:outline-none focus:border-[#888]"
                />
              </div>
              <div className="self-end">
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
