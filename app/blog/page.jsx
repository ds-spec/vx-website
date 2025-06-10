import Navbar from "@/components/Navbar"
import ContentGrid from "./ContentGrid"
import Testimonials from "@/components/Testimonials"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Blog(){
    return (
         <div className="w-full min-h-screen bg-[#0C0C0C] ">
            <Navbar />
            <div className="p-6">
              <div className="w-full bg-[#C9BA1433] border-[0.8px] border-[#C9BA14] px-3 py-9 rounded-xl mt-4">
          <p className="font-figtree text-3xl uppercase font-semibold text-center">
                Blog
          </p>
        </div>
        </div>
        <ContentGrid/>
        <div className="p-6"> 
        <Testimonials/>
        </div>
        <Contact/>
        <Footer/>
        
        </div>
    )
}