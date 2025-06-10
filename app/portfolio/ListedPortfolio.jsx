import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ListedPortfolio() {
  const portfolio = [
    {
      title: "Fintech",
      subtitle: "Vebha",
      link: "/portfolio/fintech",
      bgColor: "#A0DD3433",
      textColor: "#A0DD34",
    },
    {
      title: "Healthcare",
      subtitle: "Jeeva",
      link: "/portfolio/healthcare",
      bgColor: "#5029FF33",
      textColor: "#5029FF",
    },
    {
      title: "View all",
      link: "/portfolio",
      bgColor: "#62626233",
      textColor: "#FFFFFF",
    },
  ];
  return (
    <div className="flex flex-col gap-4 w-full bg-[#121015] rounded-xl px-3 py-4 overflow-hidden">
      <div className="flex flex-col gap-5">
        {portfolio?.map((item, index) => (
          <Link
            key={`${item.title}-${index}`}
            href={item.link}
            style={{ backgroundColor: item.bgColor }}
            className="w-full rounded-xl px-5 py-4 hover:shadow-2xl hover:shadow-purple-500/15"
          >
            <div className="flex items-center justify-between group cursor-pointer">
              <div className="flex flex-col">
                <p
                  style={{ color: item.textColor }}
                  className="font-figtree text-lg"
                >
                  {item.title}
                </p>
                {item.subtitle && (
                  <p
                    style={{ color: item.textColor }}
                    className="font-figtree text-lg"
                  >
                    {item.subtitle}
                  </p>
                )}
              </div>
              <div className="bg-white rounded-full p-2 transform transition-all duration-300 group-hover:translate-x-2">
                <ArrowRight color="black" size={"1.9em"} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
