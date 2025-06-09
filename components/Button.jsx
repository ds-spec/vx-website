import { ArrowRight } from "lucide-react";

export default function Button({ name, bgcolor, textcolor }) {
  return (
    <button
      style={{ backgroundColor: bgcolor, color: textcolor }}
      className="flex group items-center justify-between w-full gap-3 md:w-fit px-5 py-2 rounded-full font-figtree font-semibold cursor-pointer hover:shadow-xl hover:shadow-gray-400/10 text-center"
    >
      {name}
      <div className="bg-white rounded-full p-2 transform transition-all duration-300 group-hover:translate-x-2">
        <ArrowRight color="black" size={"1.9em"} />
      </div>
    </button>
  );
}
