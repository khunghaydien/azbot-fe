interface IntroductionProps {
  title: string;
  content: string;
  className: string;
}

export default function Introduction({
  title,
  content,
  className,
}: IntroductionProps) {
  return (
    <div className={`flex w-full max-w-[1360px] ${className}`}>
      <div
        className="w-[440px] flex flex-col gap-1 py-4 px-6 bg-white rounded-lg"
        style={{
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.03), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
        }}
      >
        <p className="font-bold text-[#FC3C1C] text-[20px] leading-[26px]">{title}</p>
        <p className="text-[#1A1C1E] text-[16px] font-normal">{content}</p>
      </div>
    </div>
  );
}
