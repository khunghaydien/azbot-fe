import { useTranslations } from "next-intl";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
export type PackageProps = {
  month: number;
  money: string;
  discount?: string;
  isActive?: boolean;
  setCurrentPackage?: Dispatch<SetStateAction<number | null>>;
};
export default function Package({
  month,
  money,
  discount,
  isActive,
  setCurrentPackage,
}: PackageProps) {
  const t = useTranslations();
  return (
    <div
      onClick={() => {
        setCurrentPackage?.(month);
      }}
      className={`flex justify-between items-center px-6 py-4 rounded-lg w-full cursor-pointer ${
        isActive
          ? "bg-[#FFF0EE] color-[#FFF0EE] border border-[#FB614C]"
          : "bg-gradient-to-r from-[#F5F5F7] to-[#FFFFFF] border border-[#F0F0F4]"
      }`}
    >
      <div className="flex flex-col gap-1 uppercase font-bold">
        <div className="flex gap-1">
          <p className="text-[#1A1C1E] text-[16px]">{t("package-month", { month })}</p>
          {discount && (
            <div className="bg-[#DB1F05] text-white text-[14px] p-1 rounded flex justify-center items-center">
              {discount}
            </div>
          )}
        </div>
        <div className="flex items-end gap-2">
          <p className="text-[#FB3A1D] text-[24px] leading-[30px]">{money}</p>
          <p className="text-[14px] leading-[30px]">/</p>
          <p className="text-[#1A1C1E] text-[14px] leading-[25px]">{t("month")}</p>
        </div>
      </div>
      <Image src="/images/tick-circle.png" alt="tick-circle" width={32} height={32} className={`${isActive ? "block" : "hidden"}`} />
      <Image src="/images/untick-circle.png" alt="untick-circle" width={32} height={32} className={`${isActive ? "hidden" : "block"}`} />
    </div>
  );
}
