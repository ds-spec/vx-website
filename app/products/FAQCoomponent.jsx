"use client"
import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { Figtree } from "next/font/google";
const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Customize as needed
});

export default function FAQComponent() {
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

  return (
    <div className={`max-w-full mx-auto p-6 bg-white min-h-screen ${figtree.className}`}>
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-[12px] border border-black mb-4">
          <HelpCircle className="w-5 h-5 text-gray-600" />
          <span className="text-black font-medium">FAQ's</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900">
          Frequently Asked Questions
        </h1>
      </div>

      {/* FAQ Items */}
      {/* FAQ Items */}
<div className="space-y-4 p-8">
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
  );
}