import { useTranslations } from "next-intl";
import { Dispatch, SetStateAction } from "react";

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
          ? "bg-[#FFF0EE] color-[#FFF0EE]"
          : "bg-gradient-to-r from-[#F5F5F7] to-[#FFFFFF]"
      }`}
    >
      <div className="flex flex-col gap-1">
        <div className="text-[24px] font-bold flex gap-1">
          <p>{t("package-month", { month })}</p>
          {discount && (
            <div className="bg-[#DB1F05] text-white text-[14px] p-1 rounded flex justify-center items-center">
              {discount}
            </div>
          )}
        </div>
        <div className="font-bold">
          <span className="text-[#FB3A1D] text-[24px]">{money}</span>
          <span className="text-[14px]">/{t("month")}</span>
        </div>
      </div>
    </div>
  );
}
