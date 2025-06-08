"use client";

import React, { useState } from 'react';
import { Building2 } from 'lucide-react';

const PlatformFeaturesPage = () => {
  const [activeTab, setActiveTab] = useState('Schools');

  const tabs = ['Schools', 'Teachers', 'Parents'];

  const getTabContent = (tab) => {
    switch(tab) {
      case 'Schools':
        return {
          description: "Simplify day-to-day operations that give you full control and real-time oversight of your school. From admissions to reporting, manage everything in one place.",
          features: [
            "Centralized Dashboard: Monitor school-wide activities, alerts, and performance at a glance.",
            "Student & Staff Management: Add, edit, and organize student and teacher profiles effortlessly.",
            "Attendance & Leave Tracking: Automate daily attendance and manage staff leave requests.",
            "Fee Collection & Finance: Set up fee structures, Add invoices, and track payments.",
            "Reports & Analytics: Generate instant reports on academic performance, fees, and more.",
            "Academic Planning: Create timetables, assign subjects, and coordinate exams.",
            "Role-Based Access Control: Set custom permissions for different users to maintain security.",
            "Communication Tools: Send announcements, emails, or SMS to staff, students, and parents."
          ]
        };
      case 'Teachers':
        return {
          description: "Empower educators with intuitive tools that enhance classroom management, simplify grading, and boost student engagement—all in one place.",
          features: [
            "Smart Dashboard: View class schedules, assignments, and student info in one streamlined interface.",
            "Attendance Management: Track and mark student attendance with just a few clicks.",
            "Grade Book Management: Track and mark student attendance with just a few clicks.",
            "Assignment Creation: Create, distribute, and grade assignments digitally.",
            "Grading & Report Cards: Automate grade entries and generate comprehensive report cards.",
            "Parent Notification: Set up live updates, weekly plans, and more.",
            "Student Communication: Handle discipline notices and day schedules early."
          ]
        };
      case 'Parents':
        return {
          description: "Give students the tools they need to stay informed, organized, and actively involved in their academic journey.",
          features: [
            "Personalized Dashboard: Access schedules, assignments, grades, and school announcements.",
            "Student & Event Management: Add, edit, and organize student and teacher profiles effectively.",
            "Assignment Submission: Submit homework and assignments digitally with ease.",
            "Grade Tracking: Monitor academic progress and performance in real-time.",
            "Progress & Analytics: Generate detailed reports on academic performance, fees, and more.",
            "Academic Planning: Create timetables, assign subjects, and coordinate exams.",
            "Online Based Access Controls: Set access permissions for different user's to manage security.",
            "Communication Hub: Direct messaging with teachers and administrators, along group chats."
          ]
        };
      default:
        return { description: "", features: [] };
    }
  };

  const getTabIcon = (tab) => {
    switch(tab) {
      case 'Schools':
        return (
          <div className='pb-4'>
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2" y="2" width="76" height="76" rx="18" fill="white" fill-opacity="0.2"/>
<rect x="2" y="2" width="76" height="76" rx="18" stroke="#E9E9E9" stroke-width="4"/>
<path d="M23.3335 23.8547C23.3335 22.6115 23.8274 21.4193 24.7065 20.5402C25.5855 19.6611 26.7778 19.1672 28.021 19.1672H44.6877C45.9309 19.1672 47.1232 19.6611 48.0023 20.5402C48.8813 21.4193 49.3752 22.6115 49.3752 23.8547V34.7922H51.9794C52.5949 34.7922 53.2045 34.9135 53.7732 35.1491C54.3419 35.3846 54.8586 35.7299 55.2939 36.1652C55.7292 36.6005 56.0745 37.1172 56.31 37.6859C56.5456 38.2546 56.6669 38.8642 56.6669 39.4797V59.2714C56.6669 59.6858 56.5022 60.0832 56.2092 60.3763C55.9162 60.6693 55.5188 60.8339 55.1044 60.8339H49.3752V53.0214C49.3752 51.5839 48.2085 50.4172 46.771 50.4172H33.2294C31.7919 50.4172 30.6252 51.5839 30.6252 53.0214V60.8339H24.896C24.4816 60.8339 24.0842 60.6693 23.7912 60.3763C23.4981 60.0832 23.3335 59.6858 23.3335 59.2714V23.8547ZM46.2502 53.5422V60.8339H41.5627V53.5422H46.2502ZM38.4377 53.5422V60.8339H33.7502V53.5422H38.4377ZM30.6252 28.5422C30.6252 29.0948 30.8447 29.6247 31.2354 30.0154C31.6261 30.4061 32.156 30.6256 32.7085 30.6256C33.2611 30.6256 33.791 30.4061 34.1817 30.0154C34.5724 29.6247 34.7919 29.0948 34.7919 28.5422C34.7919 27.9897 34.5724 27.4598 34.1817 27.0691C33.791 26.6784 33.2611 26.4589 32.7085 26.4589C32.156 26.4589 31.6261 26.6784 31.2354 27.0691C30.8447 27.4598 30.6252 27.9897 30.6252 28.5422ZM32.7085 41.0422C32.156 41.0422 31.6261 41.2617 31.2354 41.6524C30.8447 42.0431 30.6252 42.573 30.6252 43.1256C30.6252 43.6781 30.8447 44.208 31.2354 44.5987C31.6261 44.9894 32.156 45.2089 32.7085 45.2089C33.2611 45.2089 33.791 44.9894 34.1817 44.5987C34.5724 44.208 34.7919 43.6781 34.7919 43.1256C34.7919 42.573 34.5724 42.0431 34.1817 41.6524C33.791 41.2617 33.2611 41.0422 32.7085 41.0422ZM32.7085 33.7506C32.156 33.7506 31.6261 33.9701 31.2354 34.3608C30.8447 34.7515 30.6252 35.2814 30.6252 35.8339C30.6252 36.3864 30.8447 36.9163 31.2354 37.307C31.6261 37.6977 32.156 37.9172 32.7085 37.9172C33.2611 37.9172 33.791 37.6977 34.1817 37.307C34.5724 36.9163 34.7919 36.3864 34.7919 35.8339C34.7919 35.2814 34.5724 34.7515 34.1817 34.3608C33.791 33.9701 33.2611 33.7506 32.7085 33.7506ZM40.0002 26.4589C39.4477 26.4589 38.9178 26.6784 38.5271 27.0691C38.1364 27.4598 37.9169 27.9897 37.9169 28.5422C37.9169 29.0948 38.1364 29.6247 38.5271 30.0154C38.9178 30.4061 39.4477 30.6256 40.0002 30.6256C40.5527 30.6256 41.0826 30.4061 41.4733 30.0154C41.864 29.6247 42.0835 29.0948 42.0835 28.5422C42.0835 27.9897 41.864 27.4598 41.4733 27.0691C41.0826 26.6784 40.5527 26.4589 40.0002 26.4589ZM40.0002 41.0422C39.4477 41.0422 38.9178 41.2617 38.5271 41.6524C38.1364 42.0431 37.9169 42.573 37.9169 43.1256C37.9169 43.6781 38.1364 44.208 38.5271 44.5987C38.9178 44.9894 39.4477 45.2089 40.0002 45.2089C40.5527 45.2089 41.0826 44.9894 41.4733 44.5987C41.864 44.208 42.0835 43.6781 42.0835 43.1256C42.0835 42.573 41.864 42.0431 41.4733 41.6524C41.0826 41.2617 40.5527 41.0422 40.0002 41.0422ZM47.2919 41.0422C46.7393 41.0422 46.2094 41.2617 45.8187 41.6524C45.428 42.0431 45.2085 42.573 45.2085 43.1256C45.2085 43.6781 45.428 44.208 45.8187 44.5987C46.2094 44.9894 46.7393 45.2089 47.2919 45.2089C47.8444 45.2089 48.3743 44.9894 48.765 44.5987C49.1557 44.208 49.3752 43.6781 49.3752 43.1256C49.3752 42.573 49.1557 42.0431 48.765 41.6524C48.3743 41.2617 47.8444 41.0422 47.2919 41.0422ZM40.0002 33.7506C39.4477 33.7506 38.9178 33.9701 38.5271 34.3608C38.1364 34.7515 37.9169 35.2814 37.9169 35.8339C37.9169 36.3864 38.1364 36.9163 38.5271 37.307C38.9178 37.6977 39.4477 37.9172 40.0002 37.9172C40.5527 37.9172 41.0826 37.6977 41.4733 37.307C41.864 36.9163 42.0835 36.3864 42.0835 35.8339C42.0835 35.2814 41.864 34.7515 41.4733 34.3608C41.0826 33.9701 40.5527 33.7506 40.0002 33.7506Z" fill="white"/>
</svg>
</div>

        );
      case 'Teachers':
        return (
            <div className='pb-4'>
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2" y="2" width="76" height="76" rx="18" fill="white" fill-opacity="0.2"/>
<rect x="2" y="2" width="76" height="76" rx="18" stroke="#E9E9E9" stroke-width="4"/>
<path d="M28.5714 20C26.2981 20 24.118 20.9031 22.5105 22.5105C20.9031 24.118 20 26.2981 20 28.5714V45.7143C20 47.9876 20.9031 50.1677 22.5105 51.7752C24.118 53.3827 26.2981 54.2857 28.5714 54.2857H45.7143C47.9876 54.2857 50.1677 53.3827 51.7752 51.7752C53.3827 50.1677 54.2857 47.9876 54.2857 45.7143V28.5714C54.2857 26.2981 53.3827 24.118 51.7752 22.5105C50.1677 20.9031 47.9876 20 45.7143 20H28.5714ZM42.1429 29.2857C42.1429 30.6118 41.6161 31.8836 40.6784 32.8212C39.7407 33.7589 38.4689 34.2857 37.1429 34.2857C35.8168 34.2857 34.545 33.7589 33.6073 32.8212C32.6696 31.8836 32.1429 30.6118 32.1429 29.2857C32.1429 27.9596 32.6696 26.6879 33.6073 25.7502C34.545 24.8125 35.8168 24.2857 37.1429 24.2857C38.4689 24.2857 39.7407 24.8125 40.6784 25.7502C41.6161 26.6879 42.1429 27.9596 42.1429 29.2857ZM47.1429 40.7143C47.1429 42.3943 46.7257 47.8571 37.1371 47.8571C27.5457 47.8571 27.1429 42.3457 27.1429 40.7143C27.1429 39.9565 27.4439 39.2298 27.9797 38.694C28.5155 38.1582 29.2422 37.8571 30 37.8571H44.2857C45.0435 37.8571 45.7702 38.1582 46.306 38.694C46.8418 39.2298 47.1429 39.9565 47.1429 40.7143ZM27.8971 57.1429C29.4686 58.8971 31.7457 60 34.2857 60H47.1429C50.5528 60 53.823 58.6454 56.2342 56.2342C58.6454 53.823 60 50.5528 60 47.1429V34.2857C60 31.7486 58.8971 29.4657 57.1429 27.8971V47.1429C57.1429 49.795 56.0893 52.3386 54.2139 54.2139C52.3386 56.0893 49.795 57.1429 47.1429 57.1429H27.8971Z" fill="white"/>
</svg>
</div>

        );
      case 'Parents':
        return (
            <div className='pb-4'>
       <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2" y="2" width="76" height="76" rx="18" fill="white" fill-opacity="0.2"/>
<rect x="2" y="2" width="76" height="76" rx="18" stroke="#E9E9E9" stroke-width="4"/>
<path d="M49.4442 30.8329C49.4442 36.051 45.2178 40.2774 39.9997 40.2774C34.7817 40.2774 30.5553 36.051 30.5553 30.8329L30.6227 30.2566C30.7382 29.2702 30.224 28.317 29.3362 27.8717L27.6861 27.044C25.9483 26.1723 25.9499 23.6912 27.6889 22.8217L38.9438 17.1942C39.6085 16.8619 40.3909 16.8619 41.0557 17.1942L55.2223 24.2776C56.0222 24.6775 56.5275 25.4951 56.5275 26.3894V35.5551C56.5275 36.2072 55.999 36.7357 55.347 36.7357C54.695 36.7357 54.1664 36.2072 54.1664 35.5551V29.9392C54.1664 28.182 52.3155 27.0405 50.7454 27.8293L50.6618 27.8713C49.7748 28.3169 49.2612 29.2697 49.3766 30.2556L49.4442 30.8329ZM39.9997 44.9996C50.4358 44.9996 58.8886 49.226 58.8886 54.444V56.8051C58.8886 58.1092 57.8315 59.1663 56.5275 59.1663H23.4719C22.1679 59.1663 21.1108 58.1092 21.1108 56.8051V54.444C21.1108 49.226 29.5636 44.9996 39.9997 44.9996Z" fill="white"/>
</svg>
</div>

        );
      default:
        return null;
    }
  };

  const currentContent = getTabContent(activeTab);

  return (
    <div className='bg-white p-4'>
      <div className="bg-black rounded-[16px] text-white">
        <div className="flex">
          {/* Left Column */}
          <div className="w-1/3 p-12">
            <div className="mb-8">
              <h1 className="text-[40px] font-bold text-white leading-tight">
                One Platform,<br />
                Every Role.
              </h1>
            </div>

            {/* Navigation Tabs */}
            <div className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors border-2 border[#FFFFFF] ${
                    activeTab === tab 
                      ? 'bg-gray-600 text-white border-2 border[#3D3D3D]' 
                      : 'bg-gray-800 text-gray-300 border-2 border-[#3D3D3D] hover:bg-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column */}
       <div className="w-2/3 p-12 pl-0">
  {getTabIcon(activeTab)}

  <div className="max-w-4xl">
    <p className="text-gray-300 mb-4 text-lg leading-relaxed">
      {currentContent.description}
    </p>

    <div className="mb-6">
      <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
      <ul className="space-y-3">
        {currentContent.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className=" p-0 rounded-full mt-1">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 11.9999L20.56 9.21992L20.9 5.53992L17.29 4.71992L15.4 1.53992L12 2.99992L8.6 1.53992L6.71 4.71992L3.1 5.52992L3.44 9.20992L1 11.9999L3.44 14.7799L3.1 18.4699L6.71 19.2899L8.6 22.4699L12 20.9999L15.4 22.4599L17.29 19.2799L20.9 18.4599L20.56 14.7799L23 11.9999ZM10.7071 16.2928C10.3166 16.6833 9.68342 16.6833 9.29289 16.2928L6.68451 13.6844C6.30647 13.3064 6.30647 12.6935 6.68451 12.3154C7.07818 11.9217 7.72198 11.9404 8.09213 12.3563L9.27789 13.6886C9.66669 14.1254 10.3457 14.1368 10.749 13.7133L15.8891 8.31589C16.273 7.91279 16.9139 7.9061 17.3061 8.3011C17.6897 8.68744 17.6886 9.31129 17.3036 9.69628L14 12.9999L10.7071 16.2928Z"
                  fill="white"
                />
              </svg>
            </div>
            <span className="text-base text-gray-300 leading-relaxed">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>

    <button className="bg-[#1423C9] hover:bg-blue-700 text-white pl-8 pr-2 py-3 rounded-full flex items-center gap-3 transition-colors font-medium">
      Know More
      <svg
        width="30"
        height="30"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <rect width="32" height="32" rx="16" fill="white" />
        <path
          d="M16 9L23 16M23 16L16 23M23 16H9"
          stroke="#1E1E1E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default PlatformFeaturesPage;