import React from 'react';

import { Figtree } from "next/font/google";
import Navbar from '@/components/Navbar';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Customize as needed
});


export default function VadimPeskovPodcast() {
  return (
    <div>
      <Navbar/>
    <div className={`min-h-screen bg-black text-white text-[22px] ${figtree.className}`} >
      <div className="container mx-auto px-14 py-12">
        <div className="max-w-full mx-auto">
          
          {/* Header Section */}
          <div className="mb-8">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white text-center leading-tight">
              Vadim Peskov Podcast Interview with Illuminz Insights
            </h1>
            
            {/* Author and Date */}
            <div className="flex items-center gap-6 text-gray-400 mb-8 ml-150">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                  <img
                    src="/image.png" // replace this with your actual image path
                    alt="User Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
               <div className="flex flex-col">
                <span className="text-sm mb-0 font-medium">Rema Vijay</span>
                <span className="text-sm text-[#C9BA14] font-medium">12/03/2025 03:10 PM</span>
              </div>

              </div>
            
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12 rounded-lg overflow-hidden">
            <div className="relative h-96 ">
              <img 
                src="/blogpage/image.png" 
                alt="Futuristic technology concept with geometric shapes and digital network"
                className="w-full h-full object-cover"
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30"></div>
            </div>
          </div>

          {/* Blog Content */}
          <article className="prose prose-lg prose-invert max-w-full">
            
            {/* Introduction Paragraph */}
            <p className="text-gray-300 text-[24px] leading-relaxed mb-8">
              In this ever-shifting realm of business, seizing opportunities and staying ahead of the curve are essential for success. MongoDB, the leading NoSQL database, serves as a catalyst that your systems, enabling organizations to thrive in this dynamic landscape. Join us as we explore 10 transformative ways MongoDB ignites business success, fueling growth and driving excellence in today's fast-paced digital world.
            </p>

            {/* Content Sections */}
            <div className="space-y-4">
              
              <section>
                <h2 className="text-2xl text-[#1423C9] font-semibold  mb-4">Scalable Architecture</h2>
                <p className="text-gray-300 leading-relaxed">
                  With MongoDB's flexible architecture, businesses can effortlessly scale their operations to meet growing demands. Whether it's handling increased data loads or accommodating a surge in user traffic, MongoDB ensures that your systems remain responsive and agile.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#1423C9] mb-4">Lightning-Fast Performance</h2>
                <p className="text-gray-300 leading-relaxed">
                  MongoDB's optimized query execution and indexing capabilities deliver lightning-fast performance, enabling organizations to process data quickly and efficiently. Whether you're running complex analytical operations or searching extensive datasets, MongoDB delivers exceptional speed and responsiveness.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-[#1423C9] font-semibold  mb-4">Flexible Data Models</h2>
                <p className="text-gray-300 leading-relaxed">
                  MongoDB's schema-less design offers unparalleled flexibility, allowing businesses to adapt to evolving requirements without constraints. Whether you're adding new data fields, changing structures, or experimenting with different models, MongoDB empowers you to innovate with ease.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#1423C9] mb-4">High Availability and Data Durability</h2>
                <p className="text-gray-300 leading-relaxed">
                  With built-in replication and automated failover mechanisms, MongoDB ensures high availability and data durability, minimizing downtime and safeguarding against loss of critical information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#1423C9] mb-4">Comprehensive Security Features</h2>
                <p className="text-gray-300 leading-relaxed">
                  MongoDB's comprehensive security features, including authentication, authorization, encryption, and auditing, provide robust protection for sensitive data. Whether you're working with financial records, healthcare information, or personal customer details, MongoDB safeguards your data against unauthorized access and breaches.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#1423C9] mb-4">Developer-Friendly APIs and Extensive Documentation</h2>
                <p className="text-gray-300 leading-relaxed">
                  MongoDB's developer-friendly APIs and extensive documentation streamline the development process, empowering teams to build more effective applications with greater ease and efficiency.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#1423C9] mb-4">Real-time Analytics and Ad-hoc Querying</h2>
                <p className="text-gray-300 leading-relaxed">
                  MongoDB's support for real-time analytics and ad-hoc querying enables organizations to gain valuable insights from their data in real time. From operational dashboards to complex analytical reports, MongoDB empowers businesses to make data-driven decisions quickly and confidently.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#1423C9] mb-4">Flexible Data Model and Horizontal Scalability</h2>
                <p className="text-gray-300 leading-relaxed">
                  With its flexible data model and horizontal scalability, MongoDB is an ideal choice for IoT applications, allowing businesses to efficiently collect, store, and analyze vast amounts of sensor data from connected devices, enabling real-time monitoring and predictive maintenance.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#1423C9] mb-4">Cloud-native Architecture and Seamless Integration</h2>
                <p className="text-gray-300 leading-relaxed">
                  MongoDB's cloud-native architecture and seamless integration with leading cloud platforms simplify deployment and management in the cloud, enhancing agility and scalability for modern businesses.
                </p>
              </section>

              <section className='mb-4'>
                <h2 className="text-2xl font-semibold text-[#1423C9] mb-4">Cost-Effective Infrastructure Investments</h2>
                <p className="text-gray-300 leading-relaxed">
                  By eliminating costly infrastructure investments and minimizing operational overhead, MongoDB delivers significant cost savings compared to traditional databases, making it an attractive choice for organizations of all sizes.
                </p>
              </section>
               <section>
              
                <p className="text-gray-300 leading-relaxed">
                 From scalability and performance to flexibility and cost-effectiveness, MongoDB serves as a catalyst for business success in today’s competitive landscape. By embracing MongoDB, organizations can unlock new levels of efficiency and effectiveness, empowering them to lead the charge and drive innovation. Embrace the future of technology with Innocito. Visit www.innocito.com to know more about us.
                </p>
              </section>

            </div>


          </article>
         
        </div>
        
      </div>
      
    </div>
    <div className='p-6'>
     <Testimonials/>
      <Contact/>
     </div>
     <Footer/>
    </div>
  );
}