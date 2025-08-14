export type ServiceProps = {
  icon: React.ReactNode;
  title: string;
  content: string;
  className?: string;
};
export default function Service({
  icon,
  title,
  content,
  className,
}: ServiceProps) {
  return (
    <div
      className={`flex flex-col gap-6 flex-1 w-[90%] md:w-[calc(1360px/3)] p-12 ${className}`}
    >
      {icon}
      <div className="flex flex-col gap-1">
        <p className="font-bold text-[20px] leading-[26px] text-[#1A1C1E] break-words">{title}</p>
        <p className="text-[#45474A] text-[16px] font-normal">{content}</p>
      </div>
    </div>
  );
}
