import Navbar from "@/components/Navbar";
import SubNavbar from "./Subnav";
import Herosection from "./Herosection";
import VXSchoolBoard from "./VXSchoolBoard";
import TrustedSchools from "./Trustedschools";
import PlatformFeaturesPage from "./PlatformFeaturesPage";
import StarSection from "./StarSection";
import EducationalPlatform from "./EducationalPlatform";
import TestimonialsSection from "./TestimonialsSection";
import FAQComponent from "./FAQCoomponent";
import PricingPage from "./PricingPage";
import Gradsection from "./Gradsection";
import VXSoftwareFooter from "./VXSoftwareFooter";
import Link from "next/link";
import { ArrowRight } from "lucide-react";


export default function Products() {
  return (
    <div className="min-h-screen ">
      <Navbar/>
      <PlatformFeaturesPage/>

      <VXSoftwareFooter/>
    </div>
  );
}
 