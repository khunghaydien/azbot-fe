import Image from "next/image";
import { useTranslations } from "next-intl";
import Solution from "./solution";
import CommonSection from "../common-section";
export default function SolutionSection() {
    const t = useTranslations();
    const solutions = [
        {
            title: t("solution-1-title"),
            description: t("solution-1-description"),
        },
        {
            title: t("solution-2-title"),
            description: t("solution-2-description"),
        },
        {
            title: t("solution-3-title"),
            description: t("solution-3-description"),
        },
        {
            title: t("solution-4-title"),
            description: t("solution-4-description"),
        },
        {
            title: t("solution-5-title"),
            description: t("solution-5-description"),
        }
    ]
    return (
        <>
            <div className="relative md:flex hidden">
                <Image src="/images/solution-bg.png" alt="solution-bg" width={1920} height={1080} className="object-cover " />
                <div className="w-full h-full absolute top-0 left-0 inset-0 flex items-center justify-center flex-nowrap">
                    <CommonSection title={t("solution-title")} content={t("solution-description")} className="text-white">
                        <div className="flex md:flex-row flex-col items-center justify-center gap-6">
                            {solutions.map((solution, index) => (
                                <Solution key={index} title={solution.title} description={solution.description} index={index} />
                            ))}
                        </div>
                        <Image src="/images/solution-frame.png" alt="solution-icon" width={100} height={100} className="w-full h-full max-h-[400px] absolute bottom-0 left-0" />
                    </CommonSection>
                </div>
            </div>
            <div className="relative md:hidden flex">
                <Image src="/images/solution-bg-mobile.png" alt="solution-bg" width={768} height={1024} className="object-cover" />
                <div className="w-full h-full absolute top-0 left-0 inset-0 flex items-center justify-center flex-nowrap">
                    <CommonSection title={t("solution-title")} content={t("solution-description")} className="text-white">
                        <div className="flex md:flex-row flex-col items-center justify-center gap-6">
                            {solutions.map((solution, index) => (
                                <Solution key={index} title={solution.title} description={solution.description} index={index} />
                            ))}
                        </div>
                        <Image src="/images/solution-frame-mobile.png" alt="solution-icon" width={100} height={100} className="w-full h-full max-h-[400px] absolute bottom-0 left-0 z-10" />
                    </CommonSection>
                </div>
            </div>
        </>

    );
}