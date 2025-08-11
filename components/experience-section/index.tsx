import Image from "next/image";
import { useTranslations } from "next-intl";
export default function ExperienceSection() {
    const t = useTranslations();
    return (
        <>
            <div className="relative h-[280px] md:flex hidden">
                <Image src="/images/experience-bg.png" alt="experience-bg" width={1920} height={1080} className="object-cover h-full w-full" />
                <div className="w-full h-full absolute top-0 left-0 inset-0 flex items-center justify-center gap-8">
                    <Image src="/images/experience-icon.png" alt="experience-bg" width={400} height={400} className="w-[400px] h-[400px]" />
                    <div>
                        <p className="text-[48px] font-[800] text-white">{t("experience-title")}</p>
                        <p className="text-[20px] font-medium text-white">{t("experience-description")}</p>
                        <button className="bg-[#1A1C1E] text-white px-12 py-[14px] rounded-[42px] mt-4">{t("experience-button")}</button>
                    </div>
                </div>
            </div>
            <div className="relative md:hidden flex">
                <Image src="/images/experience-bg-mobile.png" alt="experience-bg" width={768} height={1024} className="object-cover" />
                <div className="w-full h-full absolute top-0 left-0 inset-0 flex flex-col items-center justify-start gap-4 mt-10">
                    <p className="text-[48px] font-[800] text-white text-center">{t("experience-title")}</p>
                    <p className="text-[20px] font-medium text-white text-center">{t("experience-description")}</p>
                    <button className="bg-[#1A1C1E] text-white px-12 py-[14px] rounded-[42px] mt-4">{t("experience-button")}</button>
                </div>
            </div>
        </>
    );
}