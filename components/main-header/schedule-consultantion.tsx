import { useTranslations } from "next-intl";

export default function ScheduleConsultation() {
    const t = useTranslations();

    return (
        <div className="bg-[#1A1C1E] px-3 py-2 md:px-6 md:py-3 rounded-[20px] md:rounded-[42px] text-white font-semibold text-[12px] md:text-[14px] uppercase flex items-center justify-center cursor-pointer">
            {t("schedule_consultation")}
        </div>
    );
}