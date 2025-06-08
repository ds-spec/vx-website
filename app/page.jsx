import AnimatedText from "@/components/AnimatedText";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import WorkflowSection from "@/components/WorkflowSection";
import Wrapper from "@/components/Wrapper/Wrapper";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#1E1E1E] overflow-x-hidden">
      <Navbar />
      <Wrapper />
      <AnimatedText />
      <WorkflowSection />
      <Services />
    </div>
  );
}
