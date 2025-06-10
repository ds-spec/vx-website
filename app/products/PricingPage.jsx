"use client"
import React, { useEffect, useRef } from 'react';
import { Check, ArrowRight, Star } from 'lucide-react';

const PricingPage = () => {
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

  return (
    <div className='bg-white p-6'>
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
  );
};

export default PricingPage; 