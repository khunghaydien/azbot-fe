"use client";
import { useTranslations } from "next-intl";
import CommonSection from "../common-section";
import WorkFlow from "./work-flow";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function WorkFlowSection() {
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
            <div className="flex w-full hidden md:flex">
                {workFlows.map((workFlow) => (
                    <WorkFlow
                        key={workFlow.step}
                        background={workFlow.background}
                        title={workFlow.title}
                        content={workFlow.content}
                        step={workFlow.step} />
                ))}
            </div>
            <div className="w-full md:hidden">
                <Swiper
                    spaceBetween={24}
                    slidesPerView={1}
                    modules={[Pagination, Navigation, Autoplay]}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    className="w-full"
                >
                {workFlows.map((workFlow, index) => (
                    <SwiperSlide key={index}>
                        <WorkFlow {...workFlow} />
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
        </CommonSection>
    );
}
