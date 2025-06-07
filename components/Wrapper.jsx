import WrapperCard from "./WrapperCard";

export default function Wrapper() {
  return (
    <div className="flex gap-5 items-center w-full h-[120vh] bg-amber-300">
      <div className="w-full h-full bg-red-300 px-9 py-4">
        <WrapperCard />
      </div>
      <div className="w-full h-full bg-purple-500"></div>
    </div>
  );
}
