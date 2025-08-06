import { useTranslations } from "next-intl";
import CommonSection from "../common-section";
import WorkFlow from "./work-flow";

export default function ServiceSection() {
    const t = useTranslations();
    const workFlows = [
        {
            step: 1,
            background: "/images/work-flow-1.png",
            title: t("work-flow-step-1"),
            content: t("work-flow-step-1-content"),
        },
        {
            step: 2,
            background: "/images/work-flow-2.png",
            title: t("work-flow-step-2"),
            content: t("work-flow-step-2-content"),
        },
        {
            step: 3,
            background: "/images/work-flow-3.png",
            title: t("work-flow-step-3"),
            content: t("work-flow-step-3-content"),
        },
        {
            step: 4,
            background: "/images/work-flow-4.png",
            title: t("work-flow-step-4"),
            content: t("work-flow-step-4-content"),
        },
    ];
    return (
        <CommonSection title={t("work-flow-title")} content={t("work-flow-content")}>
            <div className="flex w-full">
                {workFlows.map((workFlow) => (
                    <WorkFlow
                        key={workFlow.step}
                        background={workFlow.background}
                        title={workFlow.title}
                        content={workFlow.content}
                        step={workFlow.step} />
                ))}
            </div>
        </CommonSection>
    );
}
