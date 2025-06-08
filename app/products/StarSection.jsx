"use client"
export default function StarSection() {
  return (
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
  );
}