"use client";

import React, { useState, useRef,useEffect } from 'react';
import { Check } from 'lucide-react';
import { ChevronLeft, ChevronRight, Globe ,Star,HelpCircle ,ChevronUp ,ChevronDown} from 'lucide-react';
import { Building2 } from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Figtree } from "next/font/google";
const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Customize as needed
});


const PlatformFeaturesPage = () => {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const schools = [
    {
      name: "Harvard University",
      image: "/productpage/one.png"
    },
    {
      name: "Oxford University", 
      image: "/productpage/two.png"
    },
    {
      name: "MIT",
      image: "/productpage/three.png"
    },
    {
      name: "Stanford University",
      image: "/productpage/four.png"
    },
    {
      name: "Cambridge University",
      image: "/productpage/five.png"
    },
    {
      name: "Yale University",
      image: "/productpage/seven.png"
    },
    {
      name: "Princeton University",
      image: "/productpage/six.png"
    },
    {
      name: "Columbia University",
      image: "/productpage/eight.png"
    }
  ];
  const schoolsRef = useRef(null);
  const teachersRef = useRef(null);
  const parentsRef = useRef(null);
  
  const [activeTab, setActiveTab] = useState('Schools');

 const scrollToSection = (tab) => {
  setActiveTab(tab);
  switch(tab) {
    case 'Schools':
      schoolsRef.current?.scrollIntoView({ behavior: 'smooth' });
      break;
    case 'Teachers':
      teachersRef.current?.scrollIntoView({ behavior: 'smooth' });
      break;
    case 'Parents':
      parentsRef.current?.scrollIntoView({ behavior: 'smooth' });
      break;
    case 'Pricing':
      pricingRef.current?.scrollIntoView({ behavior: 'smooth' });
      break;
    case 'FAQs':
      faqRef.current?.scrollIntoView({ behavior: 'smooth' });
      break;
    default:
      break;
  }
};

  const tabs = ['Schools', 'Teachers', 'Parents'];
    const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

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
<rect x="2" y="2" width="76" height="76" rx="18" fill="white" fillOpacity="0.2"/>
<rect x="2" y="2" width="76" height="76" rx="18" stroke="#E9E9E9" stroke-width="4"/>
<path d="M23.3335 23.8547C23.3335 22.6115 23.8274 21.4193 24.7065 20.5402C25.5855 19.6611 26.7778 19.1672 28.021 19.1672H44.6877C45.9309 19.1672 47.1232 19.6611 48.0023 20.5402C48.8813 21.4193 49.3752 22.6115 49.3752 23.8547V34.7922H51.9794C52.5949 34.7922 53.2045 34.9135 53.7732 35.1491C54.3419 35.3846 54.8586 35.7299 55.2939 36.1652C55.7292 36.6005 56.0745 37.1172 56.31 37.6859C56.5456 38.2546 56.6669 38.8642 56.6669 39.4797V59.2714C56.6669 59.6858 56.5022 60.0832 56.2092 60.3763C55.9162 60.6693 55.5188 60.8339 55.1044 60.8339H49.3752V53.0214C49.3752 51.5839 48.2085 50.4172 46.771 50.4172H33.2294C31.7919 50.4172 30.6252 51.5839 30.6252 53.0214V60.8339H24.896C24.4816 60.8339 24.0842 60.6693 23.7912 60.3763C23.4981 60.0832 23.3335 59.6858 23.3335 59.2714V23.8547ZM46.2502 53.5422V60.8339H41.5627V53.5422H46.2502ZM38.4377 53.5422V60.8339H33.7502V53.5422H38.4377ZM30.6252 28.5422C30.6252 29.0948 30.8447 29.6247 31.2354 30.0154C31.6261 30.4061 32.156 30.6256 32.7085 30.6256C33.2611 30.6256 33.791 30.4061 34.1817 30.0154C34.5724 29.6247 34.7919 29.0948 34.7919 28.5422C34.7919 27.9897 34.5724 27.4598 34.1817 27.0691C33.791 26.6784 33.2611 26.4589 32.7085 26.4589C32.156 26.4589 31.6261 26.6784 31.2354 27.0691C30.8447 27.4598 30.6252 27.9897 30.6252 28.5422ZM32.7085 41.0422C32.156 41.0422 31.6261 41.2617 31.2354 41.6524C30.8447 42.0431 30.6252 42.573 30.6252 43.1256C30.6252 43.6781 30.8447 44.208 31.2354 44.5987C31.6261 44.9894 32.156 45.2089 32.7085 45.2089C33.2611 45.2089 33.791 44.9894 34.1817 44.5987C34.5724 44.208 34.7919 43.6781 34.7919 43.1256C34.7919 42.573 34.5724 42.0431 34.1817 41.6524C33.791 41.2617 33.2611 41.0422 32.7085 41.0422ZM32.7085 33.7506C32.156 33.7506 31.6261 33.9701 31.2354 34.3608C30.8447 34.7515 30.6252 35.2814 30.6252 35.8339C30.6252 36.3864 30.8447 36.9163 31.2354 37.307C31.6261 37.6977 32.156 37.9172 32.7085 37.9172C33.2611 37.9172 33.791 37.6977 34.1817 37.307C34.5724 36.9163 34.7919 36.3864 34.7919 35.8339C34.7919 35.2814 34.5724 34.7515 34.1817 34.3608C33.791 33.9701 33.2611 33.7506 32.7085 33.7506ZM40.0002 26.4589C39.4477 26.4589 38.9178 26.6784 38.5271 27.0691C38.1364 27.4598 37.9169 27.9897 37.9169 28.5422C37.9169 29.0948 38.1364 29.6247 38.5271 30.0154C38.9178 30.4061 39.4477 30.6256 40.0002 30.6256C40.5527 30.6256 41.0826 30.4061 41.4733 30.0154C41.864 29.6247 42.0835 29.0948 42.0835 28.5422C42.0835 27.9897 41.864 27.4598 41.4733 27.0691C41.0826 26.6784 40.5527 26.4589 40.0002 26.4589ZM40.0002 41.0422C39.4477 41.0422 38.9178 41.2617 38.5271 41.6524C38.1364 42.0431 37.9169 42.573 37.9169 43.1256C37.9169 43.6781 38.1364 44.208 38.5271 44.5987C38.9178 44.9894 39.4477 45.2089 40.0002 45.2089C40.5527 45.2089 41.0826 44.9894 41.4733 44.5987C41.864 44.208 42.0835 43.6781 42.0835 43.1256C42.0835 42.573 41.864 42.0431 41.4733 41.6524C41.0826 41.2617 40.5527 41.0422 40.0002 41.0422ZM47.2919 41.0422C46.7393 41.0422 46.2094 41.2617 45.8187 41.6524C45.428 42.0431 45.2085 42.573 45.2085 43.1256C45.2085 43.6781 45.428 44.208 45.8187 44.5987C46.2094 44.9894 46.7393 45.2089 47.2919 45.2089C47.8444 45.2089 48.3743 44.9894 48.765 44.5987C49.1557 44.208 49.3752 43.6781 49.3752 43.1256C49.3752 42.573 49.1557 42.0431 48.765 41.6524C48.3743 41.2617 47.8444 41.0422 47.2919 41.0422ZM40.0002 33.7506C39.4477 33.7506 38.9178 33.9701 38.5271 34.3608C38.1364 34.7515 37.9169 35.2814 37.9169 35.8339C37.9169 36.3864 38.1364 36.9163 38.5271 37.307C38.9178 37.6977 39.4477 37.9172 40.0002 37.9172C40.5527 37.9172 41.0826 37.6977 41.4733 37.307C41.864 36.9163 42.0835 36.3864 42.0835 35.8339C42.0835 35.2814 41.864 34.7515 41.4733 34.3608C41.0826 33.9701 40.5527 33.7506 40.0002 33.7506Z" fill="white"/>
</svg>
</div>

        );
      case 'Teachers':
        return (
            <div className='pb-4'>
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2" y="2" width="76" height="76" rx="18" fill="white" fillOpacity="0.2"/>
<rect x="2" y="2" width="76" height="76" rx="18" stroke="#E9E9E9" stroke-width="4"/>
<path d="M28.5714 20C26.2981 20 24.118 20.9031 22.5105 22.5105C20.9031 24.118 20 26.2981 20 28.5714V45.7143C20 47.9876 20.9031 50.1677 22.5105 51.7752C24.118 53.3827 26.2981 54.2857 28.5714 54.2857H45.7143C47.9876 54.2857 50.1677 53.3827 51.7752 51.7752C53.3827 50.1677 54.2857 47.9876 54.2857 45.7143V28.5714C54.2857 26.2981 53.3827 24.118 51.7752 22.5105C50.1677 20.9031 47.9876 20 45.7143 20H28.5714ZM42.1429 29.2857C42.1429 30.6118 41.6161 31.8836 40.6784 32.8212C39.7407 33.7589 38.4689 34.2857 37.1429 34.2857C35.8168 34.2857 34.545 33.7589 33.6073 32.8212C32.6696 31.8836 32.1429 30.6118 32.1429 29.2857C32.1429 27.9596 32.6696 26.6879 33.6073 25.7502C34.545 24.8125 35.8168 24.2857 37.1429 24.2857C38.4689 24.2857 39.7407 24.8125 40.6784 25.7502C41.6161 26.6879 42.1429 27.9596 42.1429 29.2857ZM47.1429 40.7143C47.1429 42.3943 46.7257 47.8571 37.1371 47.8571C27.5457 47.8571 27.1429 42.3457 27.1429 40.7143C27.1429 39.9565 27.4439 39.2298 27.9797 38.694C28.5155 38.1582 29.2422 37.8571 30 37.8571H44.2857C45.0435 37.8571 45.7702 38.1582 46.306 38.694C46.8418 39.2298 47.1429 39.9565 47.1429 40.7143ZM27.8971 57.1429C29.4686 58.8971 31.7457 60 34.2857 60H47.1429C50.5528 60 53.823 58.6454 56.2342 56.2342C58.6454 53.823 60 50.5528 60 47.1429V34.2857C60 31.7486 58.8971 29.4657 57.1429 27.8971V47.1429C57.1429 49.795 56.0893 52.3386 54.2139 54.2139C52.3386 56.0893 49.795 57.1429 47.1429 57.1429H27.8971Z" fill="white"/>
</svg>
</div>

        );
      case 'Parents':
        return (
            <div className='pb-4'>
       <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2" y="2" width="76" height="76" rx="18" fill="white" fillOpacity="0.2"/>
<rect x="2" y="2" width="76" height="76" rx="18" stroke="#E9E9E9" stroke-width="4"/>
<path d="M49.4442 30.8329C49.4442 36.051 45.2178 40.2774 39.9997 40.2774C34.7817 40.2774 30.5553 36.051 30.5553 30.8329L30.6227 30.2566C30.7382 29.2702 30.224 28.317 29.3362 27.8717L27.6861 27.044C25.9483 26.1723 25.9499 23.6912 27.6889 22.8217L38.9438 17.1942C39.6085 16.8619 40.3909 16.8619 41.0557 17.1942L55.2223 24.2776C56.0222 24.6775 56.5275 25.4951 56.5275 26.3894V35.5551C56.5275 36.2072 55.999 36.7357 55.347 36.7357C54.695 36.7357 54.1664 36.2072 54.1664 35.5551V29.9392C54.1664 28.182 52.3155 27.0405 50.7454 27.8293L50.6618 27.8713C49.7748 28.3169 49.2612 29.2697 49.3766 30.2556L49.4442 30.8329ZM39.9997 44.9996C10.4358 44.9996 58.8886 49.226 58.8886 54.444V56.8051C58.8886 58.1092 57.8315 59.1663 56.5275 59.1663H23.4719C22.1679 59.1663 21.1108 58.1092 21.1108 56.8051V54.444C21.1108 49.226 29.5636 44.9996 39.9997 44.9996Z" fill="white"/>
</svg>
</div>

        );
      default:
        return null;
    }
  };

  const currentContent = getTabContent(activeTab);
   const [currentSlide, setCurrentSlide] = useState(0);
 
  
    const platforms = [
      {
        title: "Web Platform for Schools",
        subtitle: "A powerful web-based platform designed for modern schools.",
        image: "/productpage/nine.png"
      },
      {
        title: "Web Platform for Teachers",
        subtitle: "A smart web platform built to support today's educators.",
        image: "/productpage/nine.png"
      },
      {
        title: "Mobile Application for Teachers",
        subtitle: "A dedicated mobile app that empowers teachers on the go.",
        image: "/productpage/nine.png"
      },
      {
        title: "Web Platform for Parents / Students",
        subtitle: "An easy-to-use web platform for parents and students to stay informed and engaged.",
        image: "/productpage/nine.png"
      },
      {
        title: "Mobile Application for Parents",
        subtitle: "A convenient mobile application for parents to stay connected.",
        image: "/productpage/nine.png"
      }
    ];
  
    const nextSlide = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const card = container.firstChild;
        if (!card) return;
        
        const cardWidth = card.offsetWidth;
        const gap = 24; // matches gap-6 (1.5rem = 24px)
        const scrollAmount = cardWidth + gap;
        
        container.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
        });
        
        setCurrentSlide(prev => Math.min(prev + 1, platforms.length - 1));
      }
    };
  
    const prevSlide = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const card = container.firstChild;
        if (!card) return;
        
        const cardWidth = card.offsetWidth;
        const gap = 24; // matches gap-6 (1.5rem = 24px)
        const scrollAmount = cardWidth + gap;
        
        container.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth'
        });
        
        setCurrentSlide(prev => Math.max(prev - 1, 0));
      }
    };
    const [currentIndex, setCurrentIndex] = useState(1);
    
      const testimonials = [
        {
          id: 1,
          name: "George",
          title: "Chairman",
          image: "/productpage/george.png",
          quote: "Help to maintain and students in a constructive organization's life easy.",
          bgColor: "bg-purple-500"
        },
        {
          id: 2,
          name: "B Rama Krishna",
          title: "Head of Bhashyam Schools",
          image: "/productpage/rama.png", 
          quote: "VX School Board has simplified our admission procedures, data management process, data accessibility and communication between the stakeholders thereby saving our valuable time as well as paper.",
          bgColor: "bg-purple-400"
        },
        {
          id: 3,
          name: "Willie",
          title: "Sri Chaitanya",
          image: "/api/placeholder/80/80",
          quote: "Great system that has been a boon for our institution! In terms of organization and efficiency that in a large institution like Fedena is crucial.",
          bgColor: "bg-green-400"
        }
      ];
    
      const nextSllide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      };
    
      const prevSllide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      };
      const [expandedItems, setExpandedItems] = useState({ 0: true }); // First item expanded by default

  const faqData = [
    {
      question: "What is VX School Board?",
      answer: "VX School Board is a robust and user-friendly school management system crafted by VX to transform how educational institutions operate. Designed with flexibility and ease of use in mind, it brings together administrators, teachers, and parents on a single digital platform. From managing student data and streamlining administrative workflows to enhancing classroom efficiency and parent-teacher communication, VX School Board simplifies every aspect of school operations."
    },
    {
      question: "How is VX School Board different from other school management software?",
      answer: "VX School Board stands out with its intuitive user interface, comprehensive feature set, and seamless integration capabilities. Unlike other solutions, it offers real-time communication tools, advanced analytics, and customizable workflows that adapt to your school's unique needs."
    },
    {
      question: "What kind of software programs do I require to run VX School Board?",
      answer: "VX School Board is a cloud-based solution that runs directly in your web browser. You don't need to install any additional software. It's compatible with all modern browsers including Chrome, Firefox, Safari, and Edge. Mobile apps are also available for iOS and Android devices."
    },
    {
      question: "Does VX School Board offer support and training to clients?",
      answer: "Yes, VX School Board provides comprehensive 24/7 customer support, including phone, email, and live chat assistance. We also offer extensive training programs, onboarding sessions, video tutorials, and detailed documentation to ensure your team can maximize the platform's potential."
    },
    {
      question: "Can I try VX School Board before buying it?",
      answer: "Absolutely! VX School Board offers a free 30-day trial with full access to all features. No credit card required. You can also schedule a personalized demo with our team to see how the system works with your specific requirements."
    },
    {
      question: "How much VX School Board cost? Any hidden fees which I should know about it?",
      answer: "VX School Board offers transparent pricing with no hidden fees. Our plans start from $29/month for small schools and scale based on student enrollment. The price includes hosting, security, updates, and basic support. Premium support and additional integrations are available as optional add-ons."
    },
    {
      question: "Does VX School Board provide GPS tracking?",
      answer: "Yes, VX School Board includes GPS tracking features for school transportation management. You can track bus routes in real-time, monitor student pickup/drop-off times, and send automated notifications to parents about bus arrivals and delays."
    },
    {
      question: "Will I be bound to any long-term contract?",
      answer: "No, VX School Board operates on flexible month-to-month subscriptions with no long-term contracts required. You can upgrade, downgrade, or cancel your subscription at any time. We also offer discounted annual plans for schools that prefer yearly billing."
    }
  ];

  const toggleExpanded = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
   const containerRef = useRef(null);
    const cardsRef = useRef([]);
    const headerRef = useRef(null);
    const toggleRef = useRef(null);
    const [isYearly, setIsYearly] = React.useState(true);
  
    useEffect(() => {
      // Simple animations without GSAP for now - can be enhanced
      const cards = cardsRef.current;
      cards.forEach((card, index) => {
        if (card) {
          card.style.opacity = '0';
          card.style.transform = 'translateY(30px)';
          setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, index * 150);
        }
      });
  
      if (headerRef.current) {
        headerRef.current.style.opacity = '0';
        headerRef.current.style.transform = 'translateY(-20px)';
        setTimeout(() => {
          headerRef.current.style.transition = 'all 0.8s ease';
          headerRef.current.style.opacity = '1';
          headerRef.current.style.transform = 'translateY(0)';
        }, 100);
      }
    }, []);
  
    const addToRefs = (el, index) => {
      if (el && !cardsRef.current.includes(el)) {
        cardsRef.current[index] = el;
      }
    };
  
    const plans = [
      {
        name: 'Standard',
        yearlyPrice: '50,000',
        monthlyPrice: '5,000',
        period: isYearly ? 'billed annually' : 'billed monthly',
        features: [
          'Up to 300 Students',
          'Up to 20 Staff Members',
          'Parent App',
          '& many more'
        ],
        buttonText: 'CONTACT US',
        popular: false,
        gradient: false
      },
      {
        name: 'Premium',
        yearlyPrice: '99,999',
        monthlyPrice: '10,000',
        period: isYearly ? 'billed annually' : 'billed monthly',
        features: [
          'Up to 800 Students',
          'Up to 75 Staff Members',
          'Parent App',
          'Teacher App',
          '& many more'
        ],
        buttonText: 'CONTACT US',
        popular: false,
        gradient: false
      },
      {
        name: 'Ultimate',
        yearlyPrice: '1,99,999',
        monthlyPrice: '20,000',
        period: isYearly ? 'billed annually' : 'billed monthly',
        features: [
          'Up to 1200 Students',
          'Up to 200 Staff Members',
          'Parent App',
          'Teacher App',
          'Complaint module',
          '& many more'
        ],
        buttonText: 'CONTACT US',
        popular: false,
        gradient: false
      },
      {
        name: 'Enterprise',
        yearlyPrice: null,
        monthlyPrice: null,
        period: 'For enterprise-level schools, contact us to explore a customized plan that fits your needs.',
        features: [],
        buttonText: 'CONTACT US',
        popular: false,
        gradient: true
      }
    ];
    const pricingRef = useRef(null);
const faqRef = useRef(null);
  

  return (
    <div>
       <nav className="bg-white shadow-sm border-b border-gray-300">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold text-gray-900">
                VX SCHOOL BOARD
              </Link>
            </div>

            {/* Navigation Links - Desktop */}
            <div className="hidden md:block">
              <div className="ml-80 flex items-baseline space-x-8">
                <button
                  onClick={() => scrollToSection('Schools')}
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                  FOR SCHOOLS
                </button>
                <button
                  onClick={() => scrollToSection('Parents')}
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                  FOR PARENTS
                </button>
                <button
                  onClick={() => scrollToSection('Teachers')}
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                  FOR TEACHERS
                </button>
                <button
                   onClick={() => scrollToSection('Pricing')}
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                  PRICING
                </button>
                <button
                    onClick={() => scrollToSection('FAQs')}
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                  FAQs
                </button>
                <Link
                  href="/contactus"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                  CONTACT US
                </Link>
              </div>
            </div>

            {/* Login Button - Desktop */}
            <div className="hidden md:block">
              <Link
                href="/login"
                className="bg-[#5029FF] hover:bg-purple-700 text-white pl-4 pr-1 py-1 rounded-full text-sm font-medium flex items-center gap-4 transition-colors"
              >
                Login
                <div className="bg-white rounded-full p-2">
                  <ArrowRight size={20} className="text-black" />
                </div>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="bg-gray-50 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
            <button
              onClick={() => scrollToSection('Schools')}
              className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
            >
              FOR SCHOOLS
            </button>
            <button
              onClick={() => scrollToSection('Parents')}
              className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
            >
              FOR PARENTS
            </button>
            <button
              onClick={() => scrollToSection('Teachers')}
              className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
            >
              FOR TEACHERS
            </button>
            <Link
              href="/pricing"
              className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
            >
              PRICING
            </Link>
            <button
                onClick={() => scrollToSection('FAQs')}
              className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
            >
              FAQs
            </button>
            <Link
              href="/contactus"
              className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
            >
              CONTACT US
            </Link>
            <div className="px-3 py-2">
              <Link
                href="/login"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center justify-center gap-2 transition-colors"
              >
                Login
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className={`bg-white p-4 ${figtree.className}`}>
        <div className="min-h-[90vh] rounded-[16px] bg-black text-white flex items-center justify-center px-6 py-10 relative">
          <div className="max-w-6xl mx-auto text-center relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-8 border-2 border-[#7134DD] -mt-4">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.6987 8.10374L13.9575 7.54249C12.8437 7.17499 12.1912 6.27374 11.885 5.14124L11.1187 1.40874C11.0987 1.33499 11.05 1.23624 10.9 1.23624C10.7737 1.23624 10.7012 1.33499 10.6812 1.40874L9.91497 5.14249C9.60747 6.27499 8.95622 7.17624 7.84247 7.54374L6.10122 8.10499C5.85497 8.18499 5.85122 8.53249 6.09622 8.61624L7.84997 9.21999C8.95997 9.58874 9.60747 10.4887 9.91497 11.6162L10.6825 15.3075C10.7025 15.3812 10.7437 15.5137 10.9012 15.5137C11.0675 15.5137 11.1 15.3812 11.12 15.3075L11.8875 11.6162C12.195 10.4875 12.8425 9.58749 13.9525 9.21999L15.7062 8.61624C15.9487 8.53124 15.945 8.18374 15.6987 8.10374Z"
                  fill="#FDD835"
                />
                <path
                  d="M15.8637 8.25999C15.8362 8.19124 15.7825 8.13124 15.6987 8.10374L13.9575 7.54249C12.8437 7.17499 12.1912 6.27374 11.885 5.14124L11.1187 1.40874C11.1075 1.36624 11.0675 1.28874 11.0212 1.26624L11.2687 5.01249C11.4525 6.72249 11.61 7.52748 12.975 7.76249C14.1475 7.96498 15.5037 8.19749 15.8637 8.25999Z"
                  fill="#FFEE58"
                />
                <path
                  d="M15.8675 8.45499L12.8475 9.14749C11.7837 9.41749 11.1975 10.0337 11.1975 11.6462L10.9012 15.5137C11.0025 15.5037 11.085 15.4487 11.12 15.3075L11.8875 11.6162C12.195 10.4875 12.8425 9.58749 13.9525 9.21999L15.7062 8.61624C15.7887 8.58624 15.8412 8.52499 15.8675 8.45499Z"
                  fill="#F4B400"
                />
                <path
                  d="M5.72624 11.3512C4.68499 11.0075 4.58999 10.62 4.41499 9.96625L3.97874 8.43625C3.95249 8.3375 3.69499 8.3375 3.66749 8.43625L3.37124 9.85C3.19499 10.5012 2.81999 11.0187 2.17999 11.23L1.15999 11.6725C1.01874 11.7187 1.01624 11.9187 1.15749 11.9662L2.18499 12.33C2.82249 12.5412 3.19499 13.0587 3.37249 13.7075L3.66874 15.06C3.69624 15.1587 3.95249 15.1587 3.97874 15.06L4.32624 13.7137C4.50249 13.0612 4.77249 12.5425 5.63874 12.33L6.60374 11.9662C6.74499 11.9175 6.74374 11.7175 6.60124 11.6712L5.72624 11.3512Z"
                  fill="#FDD835"
                />
                <path
                  d="M4.06122 9.94376C4.16747 10.9263 4.22122 11.1988 5.01747 11.4025L6.67622 11.7263C6.65872 11.7025 6.63372 11.6825 6.59997 11.6725L5.72497 11.3513C4.81122 11.0388 4.55872 10.6413 4.38747 9.84626C4.21622 9.05126 4.03372 8.53251 4.03372 8.53251C3.96997 8.36126 3.87872 8.37001 3.87872 8.37001L4.06122 9.94376Z"
                  fill="#FFEE58"
                />
                <path
                  d="M4.09124 13.3737C4.09124 12.4475 4.59749 11.9888 5.40249 11.9888L6.65499 11.9375C6.65499 11.9375 6.58249 12.0338 6.45624 12.0638L5.63874 12.33C4.94499 12.6087 4.62874 12.7488 4.41374 13.6975C4.41374 13.6975 4.13624 14.8012 4.08374 14.9175C4.01124 15.08 3.92499 15.1138 3.92499 15.1138L4.09124 13.3737Z"
                  fill="#F4B400"
                />
                <path
                  d="M7.9675 4.0175C8.0375 3.99375 8.035 3.89375 7.96375 3.87375L6.99875 3.61375C6.89949 3.58684 6.80888 3.53471 6.73573 3.46243C6.66257 3.39015 6.60935 3.30018 6.58125 3.20125L6.20125 1.6325C6.1825 1.55625 6.07375 1.55625 6.055 1.63375L5.6975 3.19625C5.67053 3.29793 5.61693 3.39056 5.54222 3.46461C5.46751 3.53866 5.3744 3.59144 5.2725 3.6175L4.31375 3.86625C4.2425 3.885 4.2375 3.985 4.3075 4.01L5.31875 4.36C5.5 4.4225 5.64 4.57 5.695 4.75375L6.05625 6.2025C6.075 6.2775 6.1825 6.27875 6.20125 6.2025L6.575 4.74875C6.60265 4.65801 6.65155 4.57518 6.71764 4.50713C6.78373 4.43908 6.8651 4.38779 6.955 4.3575L7.9675 4.0175Z"
                  fill="#F4B400"
                  stroke="#F4B400"
                  strokeWidth="0.125"
                  strokeMiterlimit="10"
                />
              </svg>
    
              <span className="text-[#1423C9] text-[16px] font-medium">
                Best School Management Software
              </span>
            </div>
    
            {/* Main heading */}
            <h1 className={`text-3xl md:text-5xl lg:text-[40px] font-bold leading-tight mb-6 ${figtree.className}`}>
              Streamline your{' '}
              <span className="text-[#1423C9]">school's</span>{' '}
              workflow with a unified<br />
              management system. From{' '}
              <span className="text-[#1423C9]">classrooms to communication</span>
              <br />
              —everything in one place.
            </h1>
    
            {/* Subtitle */}
            <p className="text-gray-300 text-[24px] md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
              Enabling schools to thrive with intelligent tools that simplify administration,
              elevate teaching, and strengthen parent connections.
            </p>
    
            {/* CTA Button */}
            <button className="inline-flex items-center gap-3 bg-[#1423C9] hover:bg-blue-700 text-white font-semibold pl-8 pr-2 py-2 rounded-full transition-all duration-300 hover:shadow-blue-500/25">
              Contact us
              <div className="bg-white rounded-full p-2">
        <ArrowRight size={22} className="text-black" />
      </div>
            </button>
          </div>
    
          {/* Subtle grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none -z-10"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: '50px 50px',
            }}
          ></div>
        </div>
        </div>
           <div className={`bg-gray-50  p-8 ${figtree.className}`}>
              <div className="max-w-full mx-auto">
                         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center ">
                  {/* Left Column */}
                  <div className="space-y-8 -mt-30">
                    {/* Logo Badge */}
                    <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 border border-black">
                     <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.20833 2.91669C5.04257 2.91669 4.8836 2.98253 4.76639 3.09975C4.64918 3.21696 4.58333 3.37593 4.58333 3.54169V17.0834H6.25V14.7917C6.25 14.2167 6.71667 13.75 7.29167 13.75H12.7083C13.2833 13.75 13.75 14.2167 13.75 14.7917V17.0834H15.4167V9.79169C15.4167 9.62593 15.3508 9.46696 15.2336 9.34975C15.1164 9.23254 14.9574 9.16669 14.7917 9.16669H13.125C12.9592 9.16669 12.8003 9.10084 12.6831 8.98363C12.5658 8.86642 12.5 8.70745 12.5 8.54169V3.54169C12.5 3.37593 12.4341 3.21696 12.3169 3.09975C12.1997 2.98253 12.0408 2.91669 11.875 2.91669H5.20833ZM7.5 15V17.0834H9.375V15H7.5ZM10.625 15V17.0834H12.5V15H10.625ZM16.0417 18.3334H3.95833C3.79257 18.3334 3.6336 18.2675 3.51639 18.1503C3.39918 18.0331 3.33333 17.8741 3.33333 17.7084V3.54169C3.33333 3.04441 3.53088 2.56749 3.88251 2.21586C4.23414 1.86423 4.71105 1.66669 5.20833 1.66669H11.875C12.3723 1.66669 12.8492 1.86423 13.2008 2.21586C13.5525 2.56749 13.75 3.04441 13.75 3.54169V7.91669H14.7917C15.0379 7.91669 15.2817 7.96519 15.5092 8.05941C15.7367 8.15364 15.9434 8.29175 16.1175 8.46586C16.2916 8.63997 16.4297 8.84667 16.5239 9.07416C16.6182 9.30164 16.6667 9.54546 16.6667 9.79169V17.7084C16.6667 17.8741 16.6008 18.0331 16.4836 18.1503C16.3664 18.2675 16.2074 18.3334 16.0417 18.3334ZM6.25 5.41669C6.25 5.19567 6.3378 4.98371 6.49408 4.82743C6.65036 4.67115 6.86232 4.58335 7.08333 4.58335C7.30435 4.58335 7.51631 4.67115 7.67259 4.82743C7.82887 4.98371 7.91667 5.19567 7.91667 5.41669C7.91667 5.6377 7.82887 5.84966 7.67259 6.00594C7.51631 6.16222 7.30435 6.25002 7.08333 6.25002C6.86232 6.25002 6.65036 6.16222 6.49408 6.00594C6.3378 5.84966 6.25 5.6377 6.25 5.41669ZM7.08333 10.4167C6.86232 10.4167 6.65036 10.5045 6.49408 10.6608C6.3378 10.817 6.25 11.029 6.25 11.25C6.25 11.471 6.3378 11.683 6.49408 11.8393C6.65036 11.9956 6.86232 12.0834 7.08333 12.0834C7.30435 12.0834 7.51631 11.9956 7.67259 11.8393C7.82887 11.683 7.91667 11.471 7.91667 11.25C7.91667 11.029 7.82887 10.817 7.67259 10.6608C7.51631 10.5045 7.30435 10.4167 7.08333 10.4167ZM7.08333 7.50002C6.86232 7.50002 6.65036 7.58782 6.49408 7.7441C6.3378 7.90038 6.25 8.11234 6.25 8.33335C6.25 8.55437 6.3378 8.76633 6.49408 8.92261C6.65036 9.07889 6.86232 9.16669 7.08333 9.16669C7.30435 9.16669 7.51631 9.07889 7.67259 8.92261C7.82887 8.76633 7.91667 8.55437 7.91667 8.33335C7.91667 8.11234 7.82887 7.90038 7.67259 7.7441C7.51631 7.58782 7.30435 7.50002 7.08333 7.50002ZM10 4.58335C9.77899 4.58335 9.56702 4.67115 9.41074 4.82743C9.25446 4.98371 9.16667 5.19567 9.16667 5.41669C9.16667 5.6377 9.25446 5.84966 9.41074 6.00594C9.56702 6.16222 9.77899 6.25002 10 6.25002C10.221 6.25002 10.433 6.16222 10.5893 6.00594C10.7455 5.84966 10.8333 5.6377 10.8333 5.41669C10.8333 5.19567 10.7455 4.98371 10.5893 4.82743C10.433 4.67115 10.221 4.58335 10 4.58335ZM10 10.4167C9.77899 10.4167 9.56702 10.5045 9.41074 10.6608C9.25446 10.817 9.16667 11.029 9.16667 11.25C9.16667 11.471 9.25446 11.683 9.41074 11.8393C9.56702 11.9956 9.77899 12.0834 10 12.0834C10.221 12.0834 10.433 11.9956 10.5893 11.8393C10.7455 11.683 10.8333 11.471 10.8333 11.25C10.8333 11.029 10.7455 10.817 10.5893 10.6608C10.433 10.5045 10.221 10.4167 10 10.4167ZM12.9167 10.4167C12.6957 10.4167 12.4837 10.5045 12.3274 10.6608C12.1711 10.817 12.0833 11.029 12.0833 11.25C12.0833 11.471 12.1711 11.683 12.3274 11.8393C12.4837 11.9956 12.6957 12.0834 12.9167 12.0834C13.1377 12.0834 13.3496 11.9956 13.5059 11.8393C13.6622 11.683 13.75 11.471 13.75 11.25C13.75 11.029 13.6622 10.817 13.5059 10.6608C13.3496 10.5045 13.1377 10.4167 12.9167 10.4167ZM10 7.50002C9.77899 7.50002 9.56702 7.58782 9.41074 7.7441C9.25446 7.90038 9.16667 8.11234 9.16667 8.33335C9.16667 8.55437 9.25446 8.76633 9.41074 8.92261C9.56702 9.07889 9.77899 9.16669 10 9.16669C10.221 9.16669 10.433 9.07889 10.5893 8.92261C10.7455 8.76633 10.8333 8.55437 10.8333 8.33335C10.8333 8.11234 10.7455 7.90038 10.5893 7.7441C10.433 7.58782 10.221 7.50002 10 7.50002Z" fill="#1E1E1E"/>
        <path d="M5.20833 2.91669C5.04257 2.91669 4.8836 2.98253 4.76639 3.09975C4.64918 3.21696 4.58333 3.37593 4.58333 3.54169V17.0834H6.25V14.7917C6.25 14.2167 6.71667 13.75 7.29167 13.75H12.7083C13.2833 13.75 13.75 14.2167 13.75 14.7917V17.0834H15.4167V9.79169C15.4167 9.62593 15.3508 9.46696 15.2336 9.34975C15.1164 9.23254 14.9574 9.16669 14.7917 9.16669H13.125C12.9592 9.16669 12.8003 9.10084 12.6831 8.98363C12.5658 8.86642 12.5 8.70745 12.5 8.54169V3.54169C12.5 3.37593 12.4341 3.21696 12.3169 3.09975C12.1997 2.98253 12.0408 2.91669 11.875 2.91669H5.20833ZM7.5 15V17.0834H9.375V15H7.5ZM10.625 15V17.0834H12.5V15H10.625ZM16.0417 18.3334H3.95833C3.79257 18.3334 3.6336 18.2675 3.51639 18.1503C3.39918 18.0331 3.33333 17.8741 3.33333 17.7084V3.54169C3.33333 3.04441 3.53088 2.56749 3.88251 2.21586C4.23414 1.86423 4.71105 1.66669 5.20833 1.66669H11.875C12.3723 1.66669 12.8492 1.86423 13.2008 2.21586C13.5525 2.56749 13.75 3.04441 13.75 3.54169V7.91669H14.7917C15.0379 7.91669 15.2817 7.96519 15.5092 8.05941C15.7367 8.15364 15.9434 8.29175 16.1175 8.46586C16.2916 8.63997 16.4297 8.84667 16.5239 9.07416C16.6182 9.30164 16.6667 9.54546 16.6667 9.79169V17.7084C16.6667 17.8741 16.6008 18.0331 16.4836 18.1503C16.3664 18.2675 16.2074 18.3334 16.0417 18.3334ZM6.25 5.41669C6.25 5.19567 6.3378 4.98371 6.49408 4.82743C6.65036 4.67115 6.86232 4.58335 7.08333 4.58335C7.30435 4.58335 7.51631 4.67115 7.67259 4.82743C7.82887 4.98371 7.91667 5.19567 7.91667 5.41669C7.91667 5.6377 7.82887 5.84966 7.67259 6.00594C7.51631 6.16222 7.30435 6.25002 7.08333 6.25002C6.86232 6.25002 6.65036 6.16222 6.49408 6.00594C6.3378 5.84966 6.25 5.6377 6.25 5.41669ZM7.08333 10.4167C6.86232 10.4167 6.65036 10.5045 6.49408 10.6608C6.3378 10.817 6.25 11.029 6.25 11.25C6.25 11.471 6.3378 11.683 6.49408 11.8393C6.65036 11.9956 6.86232 12.0834 7.08333 12.0834C7.30435 12.0834 7.51631 11.9956 7.67259 11.8393C7.82887 11.683 7.91667 11.471 7.91667 11.25C7.91667 11.029 7.82887 10.817 7.67259 10.6608C7.51631 10.5045 7.30435 10.4167 7.08333 10.4167ZM7.08333 7.50002C6.86232 7.50002 6.65036 7.58782 6.49408 7.7441C6.3378 7.90038 6.25 8.11234 6.25 8.33335C6.25 8.55437 6.3378 8.76633 6.49408 8.92261C6.65036 9.07889 6.86232 9.16669 7.08333 9.16669C7.30435 9.16669 7.51631 9.07889 7.67259 8.92261C7.82887 8.76633 7.91667 8.55437 7.91667 8.33335C7.91667 8.11234 7.82887 7.90038 7.67259 7.7441C7.51631 7.58782 7.30435 7.50002 7.08333 7.50002ZM10 4.58335C9.77899 4.58335 9.56702 4.67115 9.41074 4.82743C9.25446 4.98371 9.16667 5.19567 9.16667 5.41669C9.16667 5.6377 9.25446 5.84966 9.41074 6.00594C9.56702 6.16222 9.77899 6.25002 10 6.25002C10.221 6.25002 10.433 6.16222 10.5893 6.00594C10.7455 5.84966 10.8333 5.6377 10.8333 5.41669C10.8333 5.19567 10.7455 4.98371 10.5893 4.82743C10.433 4.67115 10.221 4.58335 10 4.58335ZM10 10.4167C9.77899 10.4167 9.56702 10.5045 9.41074 10.6608C9.25446 10.817 9.16667 11.029 9.16667 11.25C9.16667 11.471 9.25446 11.683 9.41074 11.8393C9.56702 11.9956 9.77899 12.0834 10 12.0834C10.221 12.0834 10.433 11.9956 10.5893 11.8393C10.7455 11.683 10.8333 11.471 10.8333 11.25C10.8333 11.029 10.7455 10.817 10.5893 10.6608C10.433 10.5045 10.221 10.4167 10 10.4167ZM12.9167 10.4167C12.6957 10.4167 12.4837 10.5045 12.3274 10.6608C12.1711 10.817 12.0833 11.029 12.0833 11.25C12.0833 11.471 12.1711 11.683 12.3274 11.8393C12.4837 11.9956 12.6957 12.0834 12.9167 12.0834C13.1377 12.0834 13.3496 11.9956 13.5059 11.8393C13.6622 11.683 13.75 11.471 13.75 11.25C13.75 11.029 13.6622 10.817 13.5059 10.6608C13.3496 10.5045 13.1377 10.4167 12.9167 10.4167ZM10 7.50002C9.77899 7.50002 9.56702 7.58782 9.41074 7.7441C9.25446 7.90038 9.16667 8.11234 9.16667 8.33335C9.16667 8.55437 9.25446 8.76633 9.41074 8.92261C9.56702 9.07889 9.77899 9.16669 10 9.16669C10.221 9.16669 10.433 9.07889 10.5893 8.92261C10.7455 8.76633 10.8333 8.55437 10.8333 8.33335C10.8333 8.11234 10.7455 7.90038 10.5893 7.7441C10.433 7.58782 10.221 7.50002 10 7.50002Z" fill="black" fillOpacity="0.2"/>
        <path d="M5.20833 2.91669C5.04257 2.91669 4.8836 2.98253 4.76639 3.09975C4.64918 3.21696 4.58333 3.37593 4.58333 3.54169V17.0834H6.25V14.7917C6.25 14.2167 6.71667 13.75 7.29167 13.75H12.7083C13.2833 13.75 13.75 14.2167 13.75 14.7917V17.0834H15.4167V9.79169C15.4167 9.62593 15.3508 9.46696 15.2336 9.34975C15.1164 9.23254 14.9574 9.16669 14.7917 9.16669H13.125C12.9592 9.16669 12.8003 9.10084 12.6831 8.98363C12.5658 8.86642 12.5 8.70745 12.5 8.54169V3.54169C12.5 3.37593 12.4341 3.21696 12.3169 3.09975C12.1997 2.98253 12.0408 2.91669 11.875 2.91669H5.20833ZM7.5 15V17.0834H9.375V15H7.5ZM10.625 15V17.0834H12.5V15H10.625ZM16.0417 18.3334H3.95833C3.79257 18.3334 3.6336 18.2675 3.51639 18.1503C3.39918 18.0331 3.33333 17.8741 3.33333 17.7084V3.54169C3.33333 3.04441 3.53088 2.56749 3.88251 2.21586C4.23414 1.86423 4.71105 1.66669 5.20833 1.66669H11.875C12.3723 1.66669 12.8492 1.86423 13.2008 2.21586C13.5525 2.56749 13.75 3.04441 13.75 3.54169V7.91669H14.7917C15.0379 7.91669 15.2817 7.96519 15.5092 8.05941C15.7367 8.15364 15.9434 8.29175 16.1175 8.46586C16.2916 8.63997 16.4297 8.84667 16.5239 9.07416C16.6182 9.30164 16.6667 9.54546 16.6667 9.79169V17.7084C16.6667 17.8741 16.6008 18.0331 16.4836 18.1503C16.3664 18.2675 16.2074 18.3334 16.0417 18.3334ZM6.25 5.41669C6.25 5.19567 6.3378 4.98371 6.49408 4.82743C6.65036 4.67115 6.86232 4.58335 7.08333 4.58335C7.30435 4.58335 7.51631 4.67115 7.67259 4.82743C7.82887 4.98371 7.91667 5.19567 7.91667 5.41669C7.91667 5.6377 7.82887 5.84966 7.67259 6.00594C7.51631 6.16222 7.30435 6.25002 7.08333 6.25002C6.86232 6.25002 6.65036 6.16222 6.49408 6.00594C6.3378 5.84966 6.25 5.6377 6.25 5.41669ZM7.08333 10.4167C6.86232 10.4167 6.65036 10.5045 6.49408 10.6608C6.3378 10.817 6.25 11.029 6.25 11.25C6.25 11.471 6.3378 11.683 6.49408 11.8393C6.65036 11.9956 6.86232 12.0834 7.08333 12.0834C7.30435 12.0834 7.51631 11.9956 7.67259 11.8393C7.82887 11.683 7.91667 11.471 7.91667 11.25C7.91667 11.029 7.82887 10.817 7.67259 10.6608C7.51631 10.5045 7.30435 10.4167 7.08333 10.4167ZM7.08333 7.50002C6.86232 7.50002 6.65036 7.58782 6.49408 7.7441C6.3378 7.90038 6.25 8.11234 6.25 8.33335C6.25 8.55437 6.3378 8.76633 6.49408 8.92261C6.65036 9.07889 6.86232 9.16669 7.08333 9.16669C7.30435 9.16669 7.51631 9.07889 7.67259 8.92261C7.82887 8.76633 7.91667 8.55437 7.91667 8.33335C7.91667 8.11234 7.82887 7.90038 7.67259 7.7441C7.51631 7.58782 7.30435 7.50002 7.08333 7.50002ZM10 4.58335C9.77899 4.58335 9.56702 4.67115 9.41074 4.82743C9.25446 4.98371 9.16667 5.19567 9.16667 5.41669C9.16667 5.6377 9.25446 5.84966 9.41074 6.00594C9.56702 6.16222 9.77899 6.25002 10 6.25002C10.221 6.25002 10.433 6.16222 10.5893 6.00594C10.7455 5.84966 10.8333 5.6377 10.8333 5.41669C10.8333 5.19567 10.7455 4.98371 10.5893 4.82743C10.433 4.67115 10.221 4.58335 10 4.58335ZM10 10.4167C9.77899 10.4167 9.56702 10.5045 9.41074 10.6608C9.25446 10.817 9.16667 11.029 9.16667 11.25C9.16667 11.471 9.25446 11.683 9.41074 11.8393C9.56702 11.9956 9.77899 12.0834 10 12.0834C10.221 12.0834 10.433 11.9956 10.5893 11.8393C10.7455 11.683 10.8333 11.471 10.8333 11.25C10.8333 11.029 10.7455 10.817 10.5893 10.6608C10.433 10.5045 10.221 10.4167 10 10.4167ZM12.9167 10.4167C12.6957 10.4167 12.4837 10.5045 12.3274 10.6608C12.1711 10.817 12.0833 11.029 12.0833 11.25C12.0833 11.471 12.1711 11.683 12.3274 11.8393C12.4837 11.9956 12.6957 12.0834 12.9167 12.0834C13.1377 12.0834 13.3496 11.9956 13.5059 11.8393C13.6622 11.683 13.75 11.471 13.75 11.25C13.75 11.029 13.6622 10.817 13.5059 10.6608C13.3496 10.5045 13.1377 10.4167 12.9167 10.4167ZM10 7.50002C9.77899 7.50002 9.56702 7.58782 9.41074 7.7441C9.25446 7.90038 9.16667 8.11234 9.16667 8.33335C9.16667 8.55437 9.25446 8.76633 9.41074 8.92261C9.56702 9.07889 9.77899 9.16669 10 9.16669C10.221 9.16669 10.433 9.07889 10.5893 8.92261C10.7455 8.76633 10.8333 8.55437 10.8333 8.33335C10.8333 8.11234 10.7455 7.90038 10.5893 7.7441C10.433 7.58782 10.221 7.50002 10 7.50002Z" fill="black" fillOpacity="0.2"/>
        <path d="M5.20833 2.91669C5.04257 2.91669 4.8836 2.98253 4.76639 3.09975C4.64918 3.21696 4.58333 3.37593 4.58333 3.54169V17.0834H6.25V14.7917C6.25 14.2167 6.71667 13.75 7.29167 13.75H12.7083C13.2833 13.75 13.75 14.2167 13.75 14.7917V17.0834H15.4167V9.79169C15.4167 9.62593 15.3508 9.46696 15.2336 9.34975C15.1164 9.23254 14.9574 9.16669 14.7917 9.16669H13.125C12.9592 9.16669 12.8003 9.10084 12.6831 8.98363C12.5658 8.86642 12.5 8.70745 12.5 8.54169V3.54169C12.5 3.37593 12.4341 3.21696 12.3169 3.09975C12.1997 2.98253 12.0408 2.91669 11.875 2.91669H5.20833ZM7.5 15V17.0834H9.375V15H7.5ZM10.625 15V17.0834H12.5V15H10.625ZM16.0417 18.3334H3.95833C3.79257 18.3334 3.6336 18.2675 3.51639 18.1503C3.39918 18.0331 3.33333 17.8741 3.33333 17.7084V3.54169C3.33333 3.04441 3.53088 2.56749 3.88251 2.21586C4.23414 1.86423 4.71105 1.66669 5.20833 1.66669H11.875C12.3723 1.66669 12.8492 1.86423 13.2008 2.21586C13.5525 2.56749 13.75 3.04441 13.75 3.54169V7.91669H14.7917C15.0379 7.91669 15.2817 7.96519 15.5092 8.05941C15.7367 8.15364 15.9434 8.29175 16.1175 8.46586C16.2916 8.63997 16.4297 8.84667 16.5239 9.07416C16.6182 9.30164 16.6667 9.54546 16.6667 9.79169V17.7084C16.6667 17.8741 16.6008 18.0331 16.4836 18.1503C16.3664 18.2675 16.2074 18.3334 16.0417 18.3334ZM6.25 5.41669C6.25 5.19567 6.3378 4.98371 6.49408 4.82743C6.65036 4.67115 6.86232 4.58335 7.08333 4.58335C7.30435 4.58335 7.51631 4.67115 7.67259 4.82743C7.82887 4.98371 7.91667 5.19567 7.91667 5.41669C7.91667 5.6377 7.82887 5.84966 7.67259 6.00594C7.51631 6.16222 7.30435 6.25002 7.08333 6.25002C6.86232 6.25002 6.65036 6.16222 6.49408 6.00594C6.3378 5.84966 6.25 5.6377 6.25 5.41669ZM7.08333 10.4167C6.86232 10.4167 6.65036 10.5045 6.49408 10.6608C6.3378 10.817 6.25 11.029 6.25 11.25C6.25 11.471 6.3378 11.683 6.49408 11.8393C6.65036 11.9956 6.86232 12.0834 7.08333 12.0834C7.30435 12.0834 7.51631 11.9956 7.67259 11.8393C7.82887 11.683 7.91667 11.471 7.91667 11.25C7.91667 11.029 7.82887 10.817 7.67259 10.6608C7.51631 10.5045 7.30435 10.4167 7.08333 10.4167ZM7.08333 7.50002C6.86232 7.50002 6.65036 7.58782 6.49408 7.7441C6.3378 7.90038 6.25 8.11234 6.25 8.33335C6.25 8.55437 6.3378 8.76633 6.49408 8.92261C6.65036 9.07889 6.86232 9.16669 7.08333 9.16669C7.30435 9.16669 7.51631 9.07889 7.67259 8.92261C7.82887 8.76633 7.91667 8.55437 7.91667 8.33335C7.91667 8.11234 7.82887 7.90038 7.67259 7.7441C7.51631 7.58782 7.30435 7.50002 7.08333 7.50002ZM10 4.58335C9.77899 4.58335 9.56702 4.67115 9.41074 4.82743C9.25446 4.98371 9.16667 5.19567 9.16667 5.41669C9.16667 5.6377 9.25446 5.84966 9.41074 6.00594C9.56702 6.16222 9.77899 6.25002 10 6.25002C10.221 6.25002 10.433 6.16222 10.5893 6.00594C10.7455 5.84966 10.8333 5.6377 10.8333 5.41669C10.8333 5.19567 10.7455 4.98371 10.5893 4.82743C10.433 4.67115 10.221 4.58335 10 4.58335ZM10 10.4167C9.77899 10.4167 9.56702 10.5045 9.41074 10.6608C9.25446 10.817 9.16667 11.029 9.16667 11.25C9.16667 11.471 9.25446 11.683 9.41074 11.8393C9.56702 11.9956 9.77899 12.0834 10 12.0834C10.221 12.0834 10.433 11.9956 10.5893 11.8393C10.7455 11.683 10.8333 11.471 10.8333 11.25C10.8333 11.029 10.7455 10.817 10.5893 10.6608C10.433 10.5045 10.221 10.4167 10 10.4167ZM12.9167 10.4167C12.6957 10.4167 12.4837 10.5045 12.3274 10.6608C12.1711 10.817 12.0833 11.029 12.0833 11.25C12.0833 11.471 12.1711 11.683 12.3274 11.8393C12.4837 11.9956 12.6957 12.0834 12.9167 12.0834C13.1377 12.0834 13.3496 11.9956 13.5059 11.8393C13.6622 11.683 13.75 11.471 13.75 11.25C13.75 11.029 13.6622 10.817 13.5059 10.6608C13.3496 10.5045 13.1377 10.4167 12.9167 10.4167ZM10 7.50002C9.77899 7.50002 9.56702 7.58782 9.41074 7.7441C9.25446 7.90038 9.16667 8.11234 9.16667 8.33335C9.16667 8.55437 9.25446 8.76633 9.41074 8.92261C9.56702 9.07889 9.77899 9.16669 10 9.16669C10.221 9.16669 10.433 9.07889 10.5893 8.92261C10.7455 8.76633 10.8333 8.55437 10.8333 8.33335C10.8333 8.11234 10.7455 7.90038 10.5893 7.7441C10.433 7.58782 10.221 7.50002 10 7.50002Z" fill="black" fillOpacity="0.2"/>
        <path d="M5.20833 2.91669C5.04257 2.91669 4.8836 2.98253 4.76639 3.09975C4.64918 3.21696 4.58333 3.37593 4.58333 3.54169V17.0834H6.25V14.7917C6.25 14.2167 6.71667 13.75 7.29167 13.75H12.7083C13.2833 13.75 13.75 14.2167 13.75 14.7917V17.0834H15.4167V9.79169C15.4167 9.62593 15.3508 9.46696 15.2336 9.34975C15.1164 9.23254 14.9574 9.16669 14.7917 9.16669H13.125C12.9592 9.16669 12.8003 9.10084 12.6831 8.98363C12.5658 8.86642 12.5 8.70745 12.5 8.54169V3.54169C12.5 3.37593 12.4341 3.21696 12.3169 3.09975C12.1997 2.98253 12.0408 2.91669 11.875 2.91669H5.20833ZM7.5 15V17.0834H9.375V15H7.5ZM10.625 15V17.0834H12.5V15H10.625ZM16.0417 18.3334H3.95833C3.79257 18.3334 3.6336 18.2675 3.51639 18.1503C3.39918 18.0331 3.33333 17.8741 3.33333 17.7084V3.54169C3.33333 3.04441 3.53088 2.56749 3.88251 2.21586C4.23414 1.86423 4.71105 1.66669 5.20833 1.66669H11.875C12.3723 1.66669 12.8492 1.86423 13.2008 2.21586C13.5525 2.56749 13.75 3.04441 13.75 3.54169V7.91669H14.7917C15.0379 7.91669 15.2817 7.96519 15.5092 8.05941C15.7367 8.15364 15.9434 8.29175 16.1175 8.46586C16.2916 8.63997 16.4297 8.84667 16.5239 9.07416C16.6182 9.30164 16.6667 9.54546 16.6667 9.79169V17.7084C16.6667 17.8741 16.6008 18.0331 16.4836 18.1503C16.3664 18.2675 16.2074 18.3334 16.0417 18.3334ZM6.25 5.41669C6.25 5.19567 6.3378 4.98371 6.49408 4.82743C6.65036 4.67115 6.86232 4.58335 7.08333 4.58335C7.30435 4.58335 7.51631 4.67115 7.67259 4.82743C7.82887 4.98371 7.91667 5.19567 7.91667 5.41669C7.91667 5.6377 7.82887 5.84966 7.67259 6.00594C7.51631 6.16222 7.30435 6.25002 7.08333 6.25002C6.86232 6.25002 6.65036 6.16222 6.49408 6.00594C6.3378 5.84966 6.25 5.6377 6.25 5.41669ZM7.08333 10.4167C6.86232 10.4167 6.65036 10.5045 6.49408 10.6608C6.3378 10.817 6.25 11.029 6.25 11.25C6.25 11.471 6.3378 11.683 6.49408 11.8393C6.65036 11.9956 6.86232 12.0834 7.08333 12.0834C7.30435 12.0834 7.51631 11.9956 7.67259 11.8393C7.82887 11.683 7.91667 11.471 7.91667 11.25C7.91667 11.029 7.82887 10.817 7.67259 10.6608C7.51631 10.5045 7.30435 10.4167 7.08333 10.4167ZM7.08333 7.50002C6.86232 7.50002 6.65036 7.58782 6.49408 7.7441C6.3378 7.90038 6.25 8.11234 6.25 8.33335C6.25 8.55437 6.3378 8.76633 6.49408 8.92261C6.65036 9.07889 6.86232 9.16669 7.08333 9.16669C7.30435 9.16669 7.51631 9.07889 7.67259 8.92261C7.82887 8.76633 7.91667 8.55437 7.91667 8.33335C7.91667 8.11234 7.82887 7.90038 7.67259 7.7441C7.51631 7.58782 7.30435 7.50002 7.08333 7.50002ZM10 4.58335C9.77899 4.58335 9.56702 4.67115 9.41074 4.82743C9.25446 4.98371 9.16667 5.19567 9.16667 5.41669C9.16667 5.6377 9.25446 5.84966 9.41074 6.00594C9.56702 6.16222 9.77899 6.25002 10 6.25002C10.221 6.25002 10.433 6.16222 10.5893 6.00594C10.7455 5.84966 10.8333 5.6377 10.8333 5.41669C10.8333 5.19567 10.7455 4.98371 10.5893 4.82743C10.433 4.67115 10.221 4.58335 10 4.58335ZM10 10.4167C9.77899 10.4167 9.56702 10.5045 9.41074 10.6608C9.25446 10.817 9.16667 11.029 9.16667 11.25C9.16667 11.471 9.25446 11.683 9.41074 11.8393C9.56702 11.9956 9.77899 12.0834 10 12.0834C10.221 12.0834 10.433 11.9956 10.5893 11.8393C10.7455 11.683 10.8333 11.471 10.8333 11.25C10.8333 11.029 10.7455 10.817 10.5893 10.6608C10.433 10.5045 10.221 10.4167 10 10.4167ZM12.9167 10.4167C12.6957 10.4167 12.4837 10.5045 12.3274 10.6608C12.1711 10.817 12.0833 11.029 12.0833 11.25C12.0833 11.471 12.1711 11.683 12.3274 11.8393C12.4837 11.9956 12.6957 12.0834 12.9167 12.0834C13.1377 12.0834 13.3496 11.9956 13.5059 11.8393C13.6622 11.683 13.75 11.471 13.75 11.25C13.75 11.029 13.6622 10.817 13.5059 10.6608C13.3496 10.5045 13.1377 10.4167 12.9167 10.4167ZM10 7.50002C9.77899 7.50002 9.56702 7.58782 9.41074 7.7441C9.25446 7.90038 9.16667 8.11234 9.16667 8.33335C9.16667 8.55437 9.25446 8.76633 9.41074 8.92261C9.56702 9.07889 9.77899 9.16669 10 9.16669C10.221 9.16669 10.433 9.07889 10.5893 8.92261C10.7455 8.76633 10.8333 8.55437 10.8333 8.33335C10.8333 8.11234 10.7455 7.90038 10.5893 7.7441C10.433 7.58782 10.221 7.50002 10 7.50002Z" fill="black" fillOpacity="0.2"/>
        </svg>
        
                      <span className="text-sm font-medium text-gray-700">VX School Board</span>
                    </div>
        
                    {/* Main Heading */}
                    <h1 className="text-4xl lg:text-[40px] font-semibold text-gray-900 leading-tight">
                      Built for Schools,<br />
                      Teachers, & Parents
                    </h1>
                  </div>
        
                  {/* Right Column */}
                  <div className="space-y-6 lg:col-span-2 ">
                    {/* Description Text */}
                    <p className="text-black text-[24px] leading-relaxed ">
                      VX School Board is a robust and user-friendly school management system crafted by VX 
                      to transform how educational institutions operate. Designed with flexibility and ease of 
                      use in mind, it brings together administrators, teachers, and parents on a single digital 
                      platform. From managing student data and streamlining administrative workflows to 
                      enhancing classroom efficiency and parent-teacher communication, VX School Board 
                      simplifies every aspect of school operations.
                    </p>
        
                    {/* Explore More Button */}
                    <button className="inline-flex items-center space-x-2 bg-[#1423C9] hover:bg-blue-700 text-white font-medium pl-8 pr-2 py-2 rounded-full transition-colors duration-200">
                      <span>Explore More</span>
                      <div className="bg-white rounded-full p-2">
                      <ArrowRight className="text-black w-6 h-6" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 py-16">
      <div className="max-w-full  mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Trusted by Schools Worldwide
          </h2>
        </div>

        {/* Continuous Scrolling Logos */}
        <div className="overflow-hidden relative">
          <div className="flex animate-scroll gap-8">
            {/* First set of logos */}
            {schools.map((school, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 hover:scale-110 transition-transform duration-300 shadow-lg border-2 p-6 rounded-xl"
              >
                <img
                  src={school.image}
                  alt={school.name}
                  className="w-20 h-20 object-cover rounded-full shadow-md  transition-all duration-300"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {schools.map((school, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 hover:scale-110 transition-transform duration-300 shadow-lg border-2 p-6 rounded-xl"
              >
                <img
                  src={school.image}
                  alt={school.name}
                  className="w-20 h-20 object-cover rounded-full shadow-md  transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
    
    <div className='bg-white p-4'>
      <div className="bg-black rounded-[16px] text-white">
        <div className="flex flex-col lg:flex-row">
          {/* Left Column */}
          <div className="w-full lg:w-1/3 p-6 lg:p-12">
            <div className="mb-6 lg:mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white leading-tight">
                One Platform,<br />
                Every Role.
              </h1>
            </div>

            {/* Navigation Tabs */}
            <div className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => scrollToSection(tab)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors border-2 ${
                    activeTab === tab 
                      ? 'bg-gray-600 text-white border-[#3D3D3D]' 
                      : 'bg-gray-800 text-gray-300 border-[#3D3D3D] hover:bg-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-2/3 p-6 lg:p-12 lg:pl-0" ref={activeTab === 'Schools' ? schoolsRef : activeTab === 'Teachers' ? teachersRef : parentsRef}>
            {getTabIcon(activeTab)}

            <div className="max-w-4xl">
              <p className="text-gray-300 mb-4 text-base lg:text-lg leading-relaxed">
                {currentContent.description}
              </p>

              <div className="mb-6">
                <h3 className="text-lg lg:text-xl font-semibold text-white mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {currentContent.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="p-0 rounded-full mt-1 flex-shrink-0">
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
                      <span className="text-sm lg:text-base text-gray-300 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     <div className="w-full bg-white py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Top decorative star with lines */}
        <div className="flex items-center justify-center mb-6">
          <div className="h-[4px] rounded bg-black/20  flex-grow max-w-32"></div>
            <div className="pl-4 pr-4">
       <svg width="25" height="25" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 9C6.72333 9 9 6.8025 9 1.5C9 6.8025 11.2608 9 16.5 9C11.2608 9 9 11.2608 9 16.5C9 11.2608 6.72333 9 1.5 9Z" stroke="#1423C9" stroke-width="1.25" stroke-linejoin="round"/>
</svg>
</div>

          <div className="h-[4px] rounded bg-black/20  flex-grow max-w-32"></div>
        </div>
        
        {/* Main heading */}
        <h1 className="text-lg md:text-xl font-semibold text-gray-800 leading-relaxed max-w-8xl mx-auto">
          Bootstrapped, Founder-Led, and Independently Owned — Empowering Schools, Teachers, and Parents Across the Globe!
        </h1>
        
        {/* Bottom decorative star with lines */}
        <div className="flex items-center justify-center mt-6">
          <div className="h-[4px] rounded bg-black/20  flex-grow max-w-32"></div>
          <div className="pl-4 pr-4">
       <svg width="25" height="25" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 9C6.72333 9 9 6.8025 9 1.5C9 6.8025 11.2608 9 16.5 9C11.2608 9 9 11.2608 9 16.5C9 11.2608 6.72333 9 1.5 9Z" stroke="#1423C9" stroke-width="1.25" stroke-linejoin="round"/>
</svg>
</div>

          <div className="h-[4px] rounded bg-black/20  flex-grow max-w-32"></div>
        </div>
      </div>
    </div>
     <div className={`p-6 bg-white ${figtree.className}`}>
      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div className="min-h-screen border-2 rounded-[16px] border-black/20 bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border-2 border-black mb-8">
              <Globe className="w-4 h-4 text-black" />
              <span className="text-sm text-black">All Platforms</span>
            </div>
            
            <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mb-2">
              Designed for Schools, Trusted by Teachers, Loved by Parents
            </h1>
          </div>

          {/* Cards Container */}
          <div className="relative p-4">
            <div 
              ref={containerRef}
              className="flex hide-scrollbar overflow-x-auto gap-6 mb-8 snap-x snap-mandatory"
              style={{
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {platforms.map((platform, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-72 h-96 bg-white p-3 rounded-xl  border border-gray-100 overflow-hidden  transition-shadow duration-300 flex flex-col snap-start"
                >
                  {/* Image Header */}
                  <div className="h-48 w-full rounded overflow-hidden">
                    <img 
                      src={platform.image} 
                      alt={platform.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      {platform.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3 flex-grow">
                      {platform.subtitle}
                    </p>
                    
                    <div className="mt-auto">
                      {/* <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
                        Know More
                        <ChevronRight className="w-4 h-4" />
                      </button> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-left gap-4">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className={`p-2 rounded-full bg-white transition-shadow duration-200 border border-gray-200 ${
                  currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-md'
                }`}
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              
              <button
                onClick={nextSlide}
                disabled={currentSlide === platforms.length - 1}
                className={`p-2 rounded-full bg-white transition-shadow duration-200 border border-gray-200 ${
                  currentSlide === platforms.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-md'
                }`}
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 text-blue-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className='bg-white p-6'>
    <div className="bg-black text-white rounded-2xl max-w-8xl mx-auto relative overflow-hidden" style={{ minHeight: '450px' }}>
      {/* Rating Badge */}
      <div className="absolute top-6 left-5 z-10">
        <div className="bg-black border-2 border-white rounded-full px-4 py-2 flex items-center gap-1 text-sm">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-white">Excellent 4.6 of 5</span>
        </div>
      </div>

      {/* Title Section */}
      <div className="absolute top-16 left-6 z-10 max-w-sm ">
        <h2 className="text-4xl font-bold mt-4 mb-4 leading-tight">
          What Our Users Are Saying
        </h2>
        <p className="text-gray-300 text-lg">
          Real stories from schools, teachers, and parents who trust VX School Board.
        </p>
      </div>

      {/* Cards Container */}
      <div className="absolute top-3 right-10 w-3/5 h-full flex items-center justify-center">
        <div className="relative w-full h-80 flex items-center justify-center">
          
          {/* Left Card - George (Partially visible) */}
          <div className="absolute left-0 top-8 w-100 h-64 z-10">
            <div className="bg-[#7354FF] rounded-2xl p-6 text-white relative h-full shadow-xl">
              {/* Quote marks */}
              <div className="absolute top-4 left-4 text-4xl font-serif opacity-30 text-white"><svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.496 0.960001V3.408C15.728 3.536 15.104 3.856 14.624 4.368C14.112 4.88 13.744 5.52 13.52 6.288C13.296 7.056 13.184 7.888 13.184 8.784H16.16V14.928H10.064V9.312C10.064 7.456 10.368 5.952 10.976 4.8C11.584 3.648 12.384 2.768 13.376 2.16C14.336 1.584 15.376 1.184 16.496 0.960001ZM6.8 0.960001V3.408C6.032 3.536 5.408 3.856 4.928 4.368C4.416 4.88 4.048 5.52 3.824 6.288C3.6 7.056 3.488 7.888 3.488 8.784H6.464V14.928H0.368V9.312C0.368 7.456 0.671999 5.952 1.28 4.8C1.888 3.648 2.688 2.768 3.68 2.16C4.64 1.584 5.68 1.184 6.8 0.960001Z" fill="#1E1E1E"/>
<path d="M16.496 0.960001V3.408C15.728 3.536 15.104 3.856 14.624 4.368C14.112 4.88 13.744 5.52 13.52 6.288C13.296 7.056 13.184 7.888 13.184 8.784H16.16V14.928H10.064V9.312C10.064 7.456 10.368 5.952 10.976 4.8C11.584 3.648 12.384 2.768 13.376 2.16C14.336 1.584 15.376 1.184 16.496 0.960001ZM6.8 0.960001V3.408C6.032 3.536 5.408 3.856 4.928 4.368C4.416 4.88 4.048 5.52 3.824 6.288C3.6 7.056 3.488 7.888 3.488 8.784H6.464V14.928H0.368V9.312C0.368 7.456 0.671999 5.952 1.28 4.8C1.888 3.648 2.688 2.768 3.68 2.16C4.64 1.584 5.68 1.184 6.8 0.960001Z" fill="black" fillOpacity="0.2"/>
<path d="M16.496 0.960001V3.408C15.728 3.536 15.104 3.856 14.624 4.368C14.112 4.88 13.744 5.52 13.52 6.288C13.296 7.056 13.184 7.888 13.184 8.784H16.16V14.928H10.064V9.312C10.064 7.456 10.368 5.952 10.976 4.8C11.584 3.648 12.384 2.768 13.376 2.16C14.336 1.584 15.376 1.184 16.496 0.960001ZM6.8 0.960001V3.408C6.032 3.536 5.408 3.856 4.928 4.368C4.416 4.88 4.048 5.52 3.824 6.288C3.6 7.056 3.488 7.888 3.488 8.784H6.464V14.928H0.368V9.312C0.368 7.456 0.671999 5.952 1.28 4.8C1.888 3.648 2.688 2.768 3.68 2.16C4.64 1.584 5.68 1.184 6.8 0.960001Z" fill="black" fillOpacity="0.2"/>
<path d="M16.496 0.960001V3.408C15.728 3.536 15.104 3.856 14.624 4.368C14.112 4.88 13.744 5.52 13.52 6.288C13.296 7.056 13.184 7.888 13.184 8.784H16.16V14.928H10.064V9.312C10.064 7.456 10.368 5.952 10.976 4.8C11.584 3.648 12.384 2.768 13.376 2.16C14.336 1.584 15.376 1.184 16.496 0.960001ZM6.8 0.960001V3.408C6.032 3.536 5.408 3.856 4.928 4.368C4.416 4.88 4.048 5.52 3.824 6.288C3.6 7.056 3.488 7.888 3.488 8.784H6.464V14.928H0.368V9.312C0.368 7.456 0.671999 5.952 1.28 4.8C1.888 3.648 2.688 2.768 3.68 2.16C4.64 1.584 5.68 1.184 6.8 0.960001Z" fill="black" fillOpacity="0.2"/>
<path d="M16.496 0.960001V3.408C15.728 3.536 15.104 3.856 14.624 4.368C14.112 4.88 13.744 5.52 13.52 6.288C13.296 7.056 13.184 7.888 13.184 8.784H16.16V14.928H10.064V9.312C10.064 7.456 10.368 5.952 10.976 4.8C11.584 3.648 12.384 2.768 13.376 2.16C14.336 1.584 15.376 1.184 16.496 0.960001ZM6.8 0.960001V3.408C6.032 3.536 5.408 3.856 4.928 4.368C4.416 4.88 4.048 5.52 3.824 6.288C3.6 7.056 3.488 7.888 3.488 8.784H6.464V14.928H0.368V9.312C0.368 7.456 0.671999 5.952 1.28 4.8C1.888 3.648 2.688 2.768 3.68 2.16C4.64 1.584 5.68 1.184 6.8 0.960001Z" fill="black" fillOpacity="0.2"/>
</svg>
</div>
              
              {/* Quote text */}
              <div className="pt-4 pb-16">
                <p className="text-black text-base leading-relaxed border-b pb-22 border-black">
                  {testimonials[0].quote}
                </p>
              </div>

              {/* Bottom section with profile */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-lg overflow-hidden flex-shrink-0 ">
                    <img 
                      src={testimonials[0].image} 
                      alt={testimonials[0].name}  
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white">{testimonials[0].name}</h4>
                    <p className="text-sm opacity-90 text-white">{testimonials[0].title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Card - B Rama Krishna (Main/Prominent) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-156 h-80 z-20">
            <div className="bg-[#986CE6] rounded-2xl p-8 text-black relative h-full shadow-2xl">
              {/* Quote marks */}
              <div className="absolute top-4 left-6 text-5xl font-serif opacity-30 text-black"><svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.496 0.960001V3.408C15.728 3.536 15.104 3.856 14.624 4.368C14.112 4.88 13.744 5.52 13.52 6.288C13.296 7.056 13.184 7.888 13.184 8.784H16.16V14.928H10.064V9.312C10.064 7.456 10.368 5.952 10.976 4.8C11.584 3.648 12.384 2.768 13.376 2.16C14.336 1.584 15.376 1.184 16.496 0.960001ZM6.8 0.960001V3.408C6.032 3.536 5.408 3.856 4.928 4.368C4.416 4.88 4.048 5.52 3.824 6.288C3.6 7.056 3.488 7.888 3.488 8.784H6.464V14.928H0.368V9.312C0.368 7.456 0.671999 5.952 1.28 4.8C1.888 3.648 2.688 2.768 3.68 2.16C4.64 1.584 5.68 1.184 6.8 0.960001Z" fill="#1E1E1E"/>
                <path d="M16.496 0.960001V3.408C15.728 3.536 15.104 3.856 14.624 4.368C14.112 4.88 13.744 5.52 13.52 6.288C13.296 7.056 13.184 7.888 13.184 8.784H16.16V14.928H10.064V9.312C10.064 7.456 10.368 5.952 10.976 4.8C11.584 3.648 12.384 2.768 13.376 2.16C14.336 1.584 15.376 1.184 16.496 0.960001ZM6.8 0.960001V3.408C6.032 3.536 5.408 3.856 4.928 4.368C4.416 4.88 4.048 5.52 3.824 6.288C3.6 7.056 3.488 7.888 3.488 8.784H6.464V14.928H0.368V9.312C0.368 7.456 0.671999 5.952 1.28 4.8C1.888 3.648 2.688 2.768 3.68 2.16C4.64 1.584 5.68 1.184 6.8 0.960001Z" fill="black" fillOpacity="0.2"/>
                <path d="M16.496 0.960001V3.408C15.728 3.536 15.104 3.856 14.624 4.368C14.112 4.88 13.744 5.52 13.52 6.288C13.296 7.056 13.184 7.888 13.184 8.784H16.16V14.928H10.064V9.312C10.064 7.456 10.368 5.952 10.976 4.8C11.584 3.648 12.384 2.768 13.376 2.16C14.336 1.584 15.376 1.184 16.496 0.960001ZM6.8 0.960001V3.408C6.032 3.536 5.408 3.856 4.928 4.368C4.416 4.88 4.048 5.52 3.824 6.288C3.6 7.056 3.488 7.888 3.488 8.784H6.464V14.928H0.368V9.312C0.368 7.456 0.671999 5.952 1.28 4.8C1.888 3.648 2.688 2.768 3.68 2.16C4.64 1.584 5.68 1.184 6.8 0.960001Z" fill="black" fillOpacity="0.2"/>
                <path d="M16.496 0.960001V3.408C15.728 3.536 15.104 3.856 14.624 4.368C14.112 4.88 13.744 5.52 13.52 6.288C13.296 7.056 13.184 7.888 13.184 8.784H16.16V14.928H10.064V9.312C10.064 7.456 10.368 5.952 10.976 4.8C11.584 3.648 12.384 2.768 13.376 2.16C14.336 1.584 15.376 1.184 16.496 0.960001ZM6.8 0.960001V3.408C6.032 3.536 5.408 3.856 4.928 4.368C4.416 4.88 4.048 5.52 3.824 6.288C3.6 7.056 3.488 7.888 3.488 8.784H6.464V14.928H0.368V9.312C0.368 7.456 0.671999 5.952 1.28 4.8C1.888 3.648 2.688 2.768 3.68 2.16C4.64 1.584 5.68 1.184 6.8 0.960001Z" fill="black" fillOpacity="0.2"/>
                <path d="M16.496 0.960001V3.408C15.728 3.536 15.104 3.856 14.624 4.368C14.112 4.88 13.744 5.52 13.52 6.288C13.296 7.056 13.184 7.888 13.184 8.784H16.16V14.928H10.064V9.312C10.064 7.456 10.368 5.952 10.976 4.8C11.584 3.648 12.384 2.768 13.376 2.16C14.336 1.584 15.376 1.184 16.496 0.960001ZM6.8 0.960001V3.408C6.032 3.536 5.408 3.856 4.928 4.368C4.416 4.88 4.048 5.52 3.824 6.288C3.6 7.056 3.488 7.888 3.488 8.784H6.464V14.928H0.368V9.312C0.368 7.456 0.671999 5.952 1.28 4.8C1.888 3.648 2.688 2.768 3.68 2.16C4.64 1.584 5.68 1.184 6.8 0.960001Z" fill="black" fillOpacity="0.2"/>
                </svg>
              </div>
              
              {/* Quote text */}
              <div className="pt-2  pb-20">
                <p className="text-black text-lg  font-bold leading-relaxed font-medium border-b pb-24  ">
                  {testimonials[1].quote}
                </p>
              </div>             
              {/* Bottom section with profile */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white rounded-xl overflow-hidden flex-shrink-0">
                    <img 
                      src={testimonials[1].image} 
                      alt={testimonials[1].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-black">{testimonials[1].name}</h4>
                    <p className="text-base opacity-80 text-black">{testimonials[1].title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card - Willie (Partially visible) */}
          <div className="absolute right-0 top-8 w-80 h-64 z-10">
            <div className="bg-[#A0DD34] rounded-2xl p-6 text-black relative h-full shadow-xl">
              {/* Quote marks */}
              <div className="absolute top-4 left-4 text-4xl font-serif opacity-30 text-black">"</div>
              
              {/* Quote text */}
              <div className="pt-8 pb-16">
                <p className="text-black text-base leading-relaxed">
                  {testimonials[2].quote}
                </p>
              </div>

              {/* Bottom section with profile */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src={testimonials[2].image} 
                      alt={testimonials[2].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-black">{testimonials[2].name}</h4>
                    <p className="text-sm opacity-80 text-black">{testimonials[2].title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-6 right-6 flex gap-3 z-30">
        <button 
          onClick={prevSllide}
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <button 
          onClick={nextSllide}
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </div>
    </div>
    <div className={`max-w-full mx-auto p-6 bg-white min-h-screen ${figtree.className} `} >
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-[12px] border border-black mb-4" >
          <HelpCircle className="w-5 h-5 text-gray-600" />
          <span className="text-black font-medium" >FAQ's</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900" ref={faqRef}>
          Frequently Asked Questions
        </h1>
      </div>

      {/* FAQ Items */}
      {/* FAQ Items */}
<div className="space-y-4 p-8 "  >
  {faqData.map((item, index) => (
    <div
      key={index}
      className={`rounded-lg border-2 overflow-hidden transition-all duration-200  ${
        expandedItems[index] 
          ? 'border-[#1423C9] bg-[#D0D3F4]' 
          : 'border-gray-200 bg-white'
      }`}
    >
      <button
        onClick={() => toggleExpanded(index)}
        className={`w-full px-6 py-4 text-left flex items-center justify-between transition-colors duration-200 ${
          expandedItems[index] ? 'hover:bg-[#D0D3F4]' : 'hover:bg-gray-50'
        }`}
      >
        <span className="text-black  font-bold pr-4">
          {item.question}
        </span>
        <div className="flex-shrink-0">
          {expandedItems[index] ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </div>
      </button>
      
      {/* Expandable Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          expandedItems[index] 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-4">
          <div className="border-t border-gray-100 pt-4">
            <p className="text-gray-700 leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

    </div>
     <div ref={pricingRef} className='bg-white p-6 '>
    <div className="min-h-screen bg-gray-900 text-white rounded-[16px] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 2px,
            rgba(255,255,255,0.03) 2px,
            rgba(255,255,255,0.03) 4px
          )`
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12">
          <div className="flex items-center justify-center mb-4 ">
            <div className='flex gap-2 border-2 px-4 py-2 rounded-full'>
            <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
            <span className="text-sm text-gray-400">Excellent 4.6 of 5</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pricing</h1>
          <p className="text-xl text-gray-300 mb-8">Find the Perfect Plan for Your School's Needs</p>
          
          <div className="flex items-center justify-center mb-2">
            <span className="text-sm text-white mr-2 ml-32 flex">
              <div className='p-1 pr-2'>
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.412503 0.406095C0.281453 0.535648 0.177491 0.689983 0.106672 0.86011C0.0358525 1.03024 -0.000407525 1.21275 3.45483e-06 1.39703L3.45483e-06 5.2386C0.000473295 5.49059 0.100298 5.73224 0.277816 5.91109L7.95594 13.5908C8.21853 13.8528 8.57435 14 8.94532 14C9.31629 14 9.67211 13.8528 9.93469 13.5908L13.5909 9.93453C13.8531 9.67188 14.0003 9.31594 14.0003 8.94484C14.0003 8.57375 13.8531 8.21781 13.5909 7.95516L5.91594 0.278595C5.73737 0.100723 5.4958 0.000544548 5.24375 -0.000155449H1.4C1.21669 -0.00129223 1.03498 0.0340385 0.865449 0.103783C0.695917 0.173527 0.541949 0.276291 0.412503 0.406095ZM4 2.99984C4 3.19763 3.94135 3.39097 3.83147 3.55542C3.72159 3.71986 3.56541 3.84804 3.38269 3.92372C3.19996 3.99941 2.99889 4.01922 2.80491 3.98063C2.61093 3.94204 2.43275 3.8468 2.2929 3.70695C2.15304 3.5671 2.0578 3.38892 2.01922 3.19493C1.98063 3.00095 2.00044 2.79989 2.07612 2.61716C2.15181 2.43443 2.27998 2.27826 2.44443 2.16838C2.60888 2.05849 2.80222 1.99984 3 1.99984C3.26522 1.99984 3.51957 2.1052 3.70711 2.29274C3.89465 2.48027 4 2.73463 4 2.99984Z" fill="white"/>
</svg>

              </div>
               Get 2 month free
            </span>
          </div>
          
          {/* Toggle */}
          <div ref={toggleRef} className="inline-flex bg-white rounded-full p-1 pl-2 pr-2 border border-gray-700">
            <button 
              onClick={() => setIsYearly(false)}
              className={`px-12 py-2 text-sm font-medium rounded-full transition-all ${
                !isYearly 
                  ? 'bg-[#1423C9] text-white' 
                  : 'text-black '
              }`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsYearly(true)}
              className={`px-12 py-2 text-sm font-medium rounded-full transition-all ${
                isYearly 
                  ? 'bg-[#1423C9] text-white' 
                  : 'text-black '
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols -2 text-black lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              ref={(el) => addToRefs(el, index)}
              className={`relative rounded-2xl  p-3 border transition-all  duration-300 hover:scale-105 hover:shadow-2xl ${
                plan.gradient
                  ? 'bg-white  border-blue-500'
                  : 'bg-white border-gray-700 hover:border-gray-600 text-[#1423C9]'
              }`}
            >
              {/* Plan Name */}
              <h3 className={`text-3xl font-bold mb-6 ${
                plan.gradient ? 'text-[#1423C9]' : 'text-[#1423C9]'
              }`}>
                {plan.name}
              </h3>

              {/* Price */}
              {plan.yearlyPrice || plan.monthlyPrice ? (
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">
                      ₹ {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className={`ml-2 text-sm ${
                      plan.gradient ? 'text-blue-100' : 'text-gray-400'
                    }`}>
                      + GST
                    </span>
                  </div>
                  <p className={`text-sm mt-1 ${
                    plan.gradient ? 'text-blue-100' : 'text-gray-400'
                  }`}>
                    {plan.period}
                  </p>
                </div>
              ) : (
                <div className="mb-6">
                  <p className="text-sm text-black leading-relaxed">
                    {plan.period}
                  </p>
                </div>
              )}

         {/* Contact Button */}
            <button
              className={`relative w-full py-6 px-6 rounded-full font-semibold text-sm transition-all duration-300 group mb-6 text-white ${
                plan.gradient
                  ? 'bg-[#0B1D4F] hover:bg-blue-50'
                  : 'bg-[#1423C9] hover:bg-blue-700'
              }`}
            >
              <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                {plan.buttonText}
              </span>

              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 text-black rounded-full">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>



              {/* Conditional rendering for No Credit Card Required vs Enterprise Image */}
              {plan.name === 'Enterprise' ? (
                // Enterprise Image Section
                <div className="flex justify-center mb-0">
                  <div className="relative w-full h-full rounded-lg overflow-hidden border-2 border-blue-300 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
                    <img
                      src="/productpage/enterpise.png"
                      alt="Enterprise Dashboard"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 text-center">
                      
                    </div>
                  </div>
                </div>
              ) : (
                // No Credit Card Required Section for other plans
                <div className={`flex items-center mb-6 text-sm ${
                  plan.gradient ? 'text-blue-100' : 'text-gray-400'
                }`}>
                  <div className="w-4 h-4 text-green-400 ml-8">
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11L19.56 8.22004L19.9 4.54004L16.29 3.72004L14.4 0.540039L11 2.00004L7.6 0.540039L5.71 3.72004L2.1 4.53004L2.44 8.21004L0 11L2.44 13.78L2.1 17.47L5.71 18.29L7.6 21.47L11 20L14.4 21.46L16.29 18.28L19.9 17.46L19.56 13.78L22 11ZM9 16L5 12L6.41 10.59L9 13.17L15.59 6.58004L17 8.00004L9 16Z" fill="#38CC03"/>
                    </svg>
                  </div>
                <div className='mt-2 ml-4 text-gray-500'>No Credit Card Required</div>
                </div>
              )}

              {/* Features */}
              {plan.features.length > 0 && (
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <Check className="w-4 h-4 text-green-400 mr-3  mt-0.5 flex-shrink-0" />
                      <span className={`text-sm ${
                        plan.gradient ? 'text-blue-100' : 'text-black'
                      }`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Know More Button */}
        <div className="text-center mt-12 ">
          {/* <button className="inline-flex items-center pl-6 pr-2 py-3 bg-[#1423C9] text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 group ">
            Know More
            <div className='bg-white p-2 rounded-full ml-4'>
            <ArrowRight className="w-6 h-6 text-black group-hover:translate-x-1 transition-transform" />
            </div>
          </button> */}
        </div>
      </div>

      {/* Additional Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
    </div>
    </div>
    <div className="w-full bg-white p-8">
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-300 via-purple-300 to-green-300 px-8 py-16 md:px-16 md:py-5 text-center min-h-[300px] flex flex-col justify-center" 
           style={{
             borderRadius: '0 15rem 0 15rem'
           }}>
        <div className="relative z-10 max-w-9xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-thin text-white mb-3 leading-tight tracking-wide">
            Ready to elevate your organization?
          </h1>
          <p className="text-lg md:text-xl lg:text-4xl text-white/95 mb-10 font-light">
            Let's take the first step together.
          </p>
          {/* <button className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-medium pl-6 pr-2 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl group text-base">
            <span>Know More</span>
            <div className="w-10 h-10 rounded-full  flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
          <svg width="42" height="42" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="32" height="32" rx="16" fill="white"/>
<path d="M16 9L23 16M23 16L16 23M23 16H9" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 9L23 16M23 16L16 23M23 16H9" stroke="black" stroke-opacity="0.2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 9L23 16M23 16L16 23M23 16H9" stroke="black" stroke-opacity="0.2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 9L23 16M23 16L16 23M23 16H9" stroke="black" stroke-opacity="0.2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 9L23 16M23 16L16 23M23 16H9" stroke="black" stroke-opacity="0.2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </div>
          </button> */}
        </div>
        
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full blur-xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white rounded-full blur-xl"></div>
        </div>
      </div>
    </div>
  );
    </div>
  );
};

export default PlatformFeaturesPage;  