import Image from "next/image";
import CommonSection from "../common-section";
import { useTranslations } from "next-intl";
export default function ReportSection() {
    const t = useTranslations();
    return (
        <CommonSection>
            <div className="relative md:hidden">
                <Image src="/images/report-mobile.png" alt="report-icon" width={300} height={300} className="object-cover" />
            </div>
            <div className="relative hidden md:flex">
                <div className="flex items-end justify-center w-full h-full">
                    <Image src="/images/report-old.png" alt="report-icon" width={600} height={600} className="object-cover" />
                    <Image src="/images/report-new.png" alt="report-icon" width={450} height={600} className="object-cover" />
                </div>
                <div className="absolute top-1/3 right-[-100px] flex flex-col items-center justify-center">
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