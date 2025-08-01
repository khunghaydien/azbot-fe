import React from "react";

export type CommonSectionProps = {
  title: string;
  content: string;
  children: React.ReactNode;
  className?: string;
};
export default function CommonSection({
  title,
  content,
  children,
  className,
}: CommonSectionProps) {
  return (
    <section
      className={`w-full h-full flex items-center justify-center flex-col gap-10 ${className}`}
    >
      <div
        className={`flex items-center justify-center flex-col gap-1 w-full max-w-[1360px]`}
      >
        <p className="font-bold text-[40px]">{title}</p>
        <p className="font-bold text-[20px]">{content}</p>
      </div>
      <div className={`flex items-center justify-center w-full max-w-[1360px]`}>
        {children}
      </div>
    </section>
  );
}
