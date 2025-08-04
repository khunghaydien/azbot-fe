import { useTranslations } from "next-intl";
import CommonSection from "../common-section";
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
        <CommonSection title={t("work-flow-title")} content={t("work-flow-content")}>
            <div className="flex flex-col gap-4">
                {feedbacks.map((feedback, index) => (
                    <Feedback key={index} {...feedback} />
                ))}
            </div>
        </CommonSection>
    );
}
