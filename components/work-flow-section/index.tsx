import { useTranslations } from "next-intl";
import CommonSection from "../common-section";
import WorkFlow from "./work-flow";

export default function ServiceSection() {
    const t = useTranslations();
    const workFlows = [
        {
            step: 1,
            background: "bg-[#F9F9FC]",
            title: t("work-flow-step-1"),
            content: t("work-flow-step-1-content"),
        },
        {
            step: 2,
            background: "bg-[#F9F9FC]",
            title: t("work-flow-step-2"),
            content: t("work-flow-step-2-content"),
        },
        {
            step: 3,
            background: "bg-[#F9F9FC]",
            title: t("work-flow-step-3"),
            content: t("work-flow-step-3-content"),
        },
        {
            step: 4,
            background: "bg-[#F9F9FC]",
            title: t("work-flow-step-4"),
            content: t("work-flow-step-4-content"),
        },
    ];
    return (
        <CommonSection title={t("work-flow-title")} content={t("work-flow-content")}>
            <div className="flex flex-col gap-4">
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
