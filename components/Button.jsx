import { FaCircleArrowRight } from "react-icons/fa6";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { HiArrowSmRight } from "react-icons/hi";

export default function Button({ name, bgcolor, textcolor }) {
  return (
    <button
      style={{ backgroundColor: bgcolor, color: textcolor }}
      className="flex group items-center gap-3 w-fit px-5 py-3 rounded-full font-figtree font-semibold cursor-pointer hover:shadow-xl hover:shadow-gray-400/10"
    >
      {name}
      <HiArrowSmRight
        className="transform transition-all duration-300 group-hover:translate-x-2"
        size={"1.5em"}
      />
    </button>
  );
}
