import Image from "next/image";

export default function Navbar() {
  const navItems = [
    "Home",
    "Services",
    "Industries",
    "Products",
    "Portfolio",
    "about us",
    "blog",
    "contact us",
  ];

  return (
    <div className="flex items-center justify-between w-full bg-[#1E1E1E] border-b-[1px] border-[#313131] px-6 py-5">
      <div className="flex items-center gap-2">
        <Image
          src="/images/logo.png"
          alt="vx software solutions"
          width={32}
          height={32}
        />
        <h4 className="hidden md:block md:font-bold md:font-archivo md:text-lg">
          VX SOFTWARE SOLUTIONS
        </h4>
      </div>
      <Image
        className="md:hidden block"
        alt="hamburger menu"
        src="/images/hamburger.png"
        width={32}
        height={32}
      />
      <div className="hidden md:flex items-center gap-3">
        {navItems?.map((item, index) => (
          <h4
            key={index}
            className="font-figtree uppercase cursor-pointer text-lg hover:text-[#A0DD34] nav-hover-btn font-semibold"
          >
            {item}
          </h4>
        ))}
      </div>
    </div>
  );
}
