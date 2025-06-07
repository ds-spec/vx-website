import { HiSparkles } from "react-icons/hi";
import Button from "./Button";

export default function WrapperCard() {
  return (
    <div className="flex flex-col gap-2 justify-center w-full h-full bg-[#121015] px-7 py-4 rounded-3xl">
      <div className="bg-[#7134DD3D] px-5 py-2 w-fit rounded-full border-2 border-[#7134DD] shadow-xl shadow-purple-400/15">
        <div className="flex items-center gap-2">
          <HiSparkles color="#fdd835" />
          <h4 className="font-figtree text-md font-semibold">
            Best Software Development Company
          </h4>
        </div>
      </div>
      <h1 className="text-7xl font-figtree leading-20 font-bold">
        Building the Future of Digital Products
      </h1>
      <p className="font-figtree text-xl text-[#8E8E8E]">
        We are a software development company creating robust digital solutions
        and launching innovative products that reshape industries.
      </p>
      <div className="flex items-center gap-4 mt-2">
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
