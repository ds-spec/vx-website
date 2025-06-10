import { HiSparkles } from "react-icons/hi";
import Button from "../Button";
import RoundedTag from "../RoundedTag";

export default function WrapperCard() {
  return (
    <div className="flex flex-col gap-2 justify-center w-full min-h-full bg-[#121015] px-7 py-4 rounded-3xl">
      <RoundedTag
        title={"Best Software Development Company"}
        icon={<HiSparkles color="#fdd835" />}
        borderColor={"#7134DD"}
        bgColor={"#7134DD3D"}
      />
      <h1 className="text-3xl md:text-7xl font-figtree leading-20 font-bold">
        Building the Future of Digital Products
      </h1>
      <p className="font-figtree text-xl text-[#8E8E8E]">
        We are a software development company creating robust digital solutions
        and launching innovative products that reshape industries.
      </p>
      <div className="flex flex-col md:flex-row items-center gap-4 mt-2">
        <Button name={"Contact Us"} bgcolor={"#5029FF"} textcolor={"white"} />
        <Button
          name={"View Portfolio"}
          bgcolor={"#D8FF29"}
          textcolor={"black"}
        />
      </div>
    </div>
  );
}
