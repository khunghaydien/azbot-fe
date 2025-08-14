"use client";
import { useTranslations } from "next-intl";
import CommonSection from "../common-section";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Feedback from "./feedback";


export default function FeedbackSection() {
    const t = useTranslations();
    const feedbacks = [
        {
            shop: "Dầu gội phủ bạc - Hà Thủ Ô",
            title: t("feedback-1"),
            content: t("feedback-1-content"),
        },
        {
            shop: "Hồng Anh - Thời trang Nam",
            title: t("feedback-2"),
            content: t("feedback-2-content"),
        },
        {
            shop: "Chợ đồ gia dụng giá rẻ - An Thành",
            title: t("feedback-3"),
            content: t("feedback-3-content"),
        },
        {
            shop: "H&L Company - Chế phẩm nông nghiệp",
            title: t("feedback-4"),
            content: t("feedback-4-content"),
        },
    ];
    return (
        <CommonSection title={t("feedback-title")} content={t("feedback-content")} className="py-[70px] bg-[#F5F5F6]">
            <div className="w-[90%] md:hidden flex">
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
                >
                {feedbacks.map((feedback, index) => (
                    <SwiperSlide key={index}>
                        <Feedback {...feedback} />
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
            <div className="w-full md:flex hidden">
                <Swiper
                    spaceBetween={24}
                    slidesPerView={2.5}
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
                >
                {feedbacks.map((feedback, index) => (
                    <SwiperSlide key={index}>
                        <Feedback {...feedback} />
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
        </CommonSection>
    );
}
