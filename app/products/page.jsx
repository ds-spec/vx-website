import Navbar from "@/components/Navbar";
import SubNavbar from "./Subnav";
import Herosection from "./Herosection";
import VXSchoolBoard from "./VXSchoolBoard";
import TrustedSchools from "./Trustedschools";
import PlatformFeaturesPage from "./PlatformFeaturesPage";
import StarSection from "./StarSection";
import EducationalPlatform from "./EducationalPlatform";
import TestimonialsSection from "./TestimonialsSection";

export default function Products() {
  return (
    <div className="min-h-screen ">
      <Navbar/>
      <SubNavbar/>
      <Herosection/>
      <VXSchoolBoard/>
      <TrustedSchools/>
      <PlatformFeaturesPage/>
      <StarSection/>
      <EducationalPlatform/>
      <TestimonialsSection/>
    </div>
  );
}
