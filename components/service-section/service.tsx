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
      className={`flex flex-col gap-6 flex-1 w-[90%] md:w-full max-w-[calc(1360px/3)] p-12 ${className}`}
    >
      {icon}
      <div className="flex flex-col gap-1">
        <p className="font-bold text-[20px] truncate">{title}</p>
        <p className="text-description ">{content}</p>
      </div>
    </div>
  );
}
