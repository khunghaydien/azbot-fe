import { useTranslations } from "next-intl";

export default function ScheduleConsultation() {
    const t = useTranslations();

    return (
        <div className="px-6 py-3 rounded-[42px] text-white font-semibold text-[14px] uppercase flex items-center justify-center cursor-pointer">
            {t("schedule_consultation")}
        </div>
    );
}