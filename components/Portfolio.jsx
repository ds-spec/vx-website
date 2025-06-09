import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { BsBagFill } from "react-icons/bs";
import RoundedTag from "./RoundedTag";

export default function Portfolio() {
  const data = [
    {
      section: "Our Product",
      items: [
        {
          title: "School(ERP)",
          link: "/products",
          subtitle: "VX School Board",
          bgColor: "#7134DD33",
          textColor: "#7134DD",
        },
      ],
    },
    {
      section: "Portfolio",
      items: [
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
      ],
    },
  ];

  return (
    <>
      <RoundedTag
        title={"Our Portfolio"}
        icon={<BsBagFill color="#d8ff29" />}
        borderColor={"#D8FF29"}
        color={"white"}
        bgColor={"#D8FF2933"}
      />
      <div className="flex flex-col gap-4 w-full bg-[#121015] rounded-xl px-3 py-4 overflow-hidden">
        <div className="flex flex-col gap-5 px-4 py-2">
          {data?.map((product, _) => (
            <div key={product.section}>
              <h4 className="text-2xl font-figtree font-semibold mb-2">
                {product.section}
              </h4>
              <div className="flex flex-col gap-5">
                {product.items?.map((item, index) => (
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
          ))}
        </div>
      </div>
    </>
  );
}
