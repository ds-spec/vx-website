import { HiArrowSmRight } from "react-icons/hi";

export default function Button({ name, bgcolor, textcolor }) {
  return (
    <button
      style={{ backgroundColor: bgcolor, color: textcolor }}
      className="flex group items-center justify-between w-full gap-3 md:w-fit px-5 py-3 rounded-full font-figtree font-semibold cursor-pointer hover:shadow-xl hover:shadow-gray-400/10 text-center"
    >
      {name}
      <HiArrowSmRight
        className="transform transition-all duration-300 group-hover:translate-x-2"
        size={"1.5em"}
      />
    </button>
  );
}
