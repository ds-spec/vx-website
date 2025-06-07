import { FaCircleArrowRight } from "react-icons/fa6";

export default function Button({ name, color }) {
  return (
    <button
      className={`flex items-center gap-6 bg-[${color}] w-fit px-5 py-3 rounded-full font-figtree font-semibold`}
    >
      {name}
      <FaCircleArrowRight size={"1.5em"} />
    </button>
  );
}
