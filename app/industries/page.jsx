import Navbar from "@/components/Navbar";
import ListedIndustries from "./ListedIndustries";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Industries() {
  return (
    <div className="w-full min-h-screen bg-[#0C0C0C]">
      <Navbar />
      <div className="flex flex-col gap-10 px-3">
        <div className="w-full bg-[#D8FF2933] border-[0.8px] border-[#D8FF29] px-3 py-9 rounded-xl mt-8">
          <p className="font-figtree text-3xl uppercase font-semibold text-center">
            Industries
          </p>
        </div>
        <ListedIndustries />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
