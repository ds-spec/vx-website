import React from "react"
import Navbar from "@/components/Navbar"
import Contact from "@/components/Contact"
import Testimonials from "@/components/Testimonials"
import Footer from "@/components/Footer"

export default function ContactUs(){
    return (
        <div>
            <Navbar/>
            <div className="p-6">
            <div className="w-full bg-[#1423C933] border-[0.8px] border-[#1423C9] px-3 py-9 rounded-xl mt-4">
                    <p className="font-figtree text-3xl uppercase font-semibold text-center">
                        Contact us
                    </p>
            </div>
            <Contact/>
            <div className="p-4">
                <Testimonials />
            </div>
            
                
        
        </div>
        <Footer/>
        </div>
    )
}