export default function RoundedTag({
  title,
  icon,
  borderColor,
  bgColor,
  color,
}) {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor,
        color: color,
      }}
      className="px-5 py-2 w-fit rounded-full border-2 shadow-xl shadow-purple-400/15"
    >
      <div className="flex items-center gap-2">
        {icon}
        <h4 className="font-figtree text-md font-semibold">{title}</h4>
      </div>
    </div>
  );
}
