import CommonSection from "../common-section";
import ReportChart from "./chart";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function ReportSection() {
    const t = useTranslations();
    return (
        <CommonSection>
            <div className="w-full relative">
                <ReportChart />
                <div className="absolute top-1/4 right-[-50px] flex flex-col items-center justify-center md:flex hidden">
                    <div className="flex flex-col items-center justify-center bg-white rounded-lg px-6 py-4 shadow-[0_8px_8px_rgba(0,0,0,0.08)]">
                        <p className="text-[24px] font-[800] text-[#FD684F]">{t("report-increase")}</p>
                        <p className="text-[18px] font-medium text-[#000000]">{t("report-increase-description")}</p>
                    </div>
                    <Image src="/images/increase-icon.png" alt="report-icon" width={100} height={100} className="object-cover" />
                </div>
            </div>

        </CommonSection>
    );
}