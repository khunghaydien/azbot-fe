import Image from "next/image";
import Introduction from "./introduction";
import { useTranslations } from "next-intl";
import PartnerIcons from "./partner-icons";

export const IntroductionSection = () => {
  const t = useTranslations();
  const introductionItems = [
    {
      title: t("introduction-online-title"),
      content: t("introduction-online-content"),
      className: "justify-center",
    },
    {
      title: t("introduction-sme-title"),
      content: t("introduction-sme-content"),
      className: "justify-start",
    },
    {
      title: t("introduction-retail-title"),
      content: t("introduction-retail-content"),
      className: "justify-end",
    },
  ];
  return (
    <div className="w-full h-full relative">
      <Image
        src="/images/background-customer.png"
        alt="Background Customer"
        width={1360}
        height={100}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full inset-0 flex flex-col justify-center items-center gap-10">
        {introductionItems.map((item, index) => (
          <Introduction
            key={index}
            title={item.title}
            content={item.content}
            className={item.className}
          />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-full inset-0 flex flex-col justify-center items-center gap-10">
        <PartnerIcons />
      </div>
    </div>
  );
};

export default IntroductionSection;
