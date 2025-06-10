import { HiSparkles } from "react-icons/hi";
import Button from "../Button";
import RoundedTag from "../RoundedTag";

export default function WrapperCard() {
  return (
    <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6 justify-center w-full min-h-full bg-[#121015] px-4 sm:px-6 lg:px-7 xl:px-8 py-4 sm:py-6 lg:py-8 rounded-2xl sm:rounded-3xl">
      {/* Rounded Tag */}
      <div className="flex justify-center sm:justify-start">
        <RoundedTag
          title={"Best Software Development Company"}
          icon={<HiSparkles color="#fdd835" />}
          borderColor={"#7134DD"}
          bgColor={"#7134DD3D"}
        />
      </div>

      {/* Main Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-figtree leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight font-bold text-center sm:text-left">
        Building the Future of Digital Products
      </h1>

      {/* Description */}
      <p className="font-figtree text-base sm:text-lg lg:text-xl text-[#8E8E8E] leading-relaxed text-center sm:text-left max-w-none sm:max-w-4xl">
        We are a software development company creating robust digital solutions
        and launching innovative products that reshape industries.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 sm:gap-4 mt-2 sm:mt-4 w-full">
        <div className="w-full sm:w-auto">
          <Button name={"Contact Us"} bgcolor={"#5029FF"} textcolor={"white"} />
        </div>
        <div className="w-full sm:w-auto">
          <Button
            name={"View Portfolio"}
            bgcolor={"#D8FF29"}
            textcolor={"black"}
          />
        </div>
      </div>
    </div>
  );
}
