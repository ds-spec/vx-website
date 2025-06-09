import { FiMessageCircle } from "react-icons/fi";
import RoundedTag from "./RoundedTag";

export default function Testimonials() {
  return (
    <>
      <RoundedTag
        title={"Our Testimonials"}
        icon={<FiMessageCircle color="#c9ba14" />}
        bgColor={"#C9BA1433"}
        borderColor={"#C9BA14"}
        color={"white"}
      />
      <div className="relative w-full min-h-[90vh] bg-[#121015] rounded-xl px-3 py-4 overflow-hidden"></div>
    </>
  );
}
