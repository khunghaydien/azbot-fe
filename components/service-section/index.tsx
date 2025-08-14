import { useTranslations } from "next-intl";
import CommonSection from "../common-section";
import IconService1 from "@/icons/icon-service-1";
import IconService2 from "@/icons/icon-service-2";
import IconService3 from "@/icons/icon-service-3";
import IconService5 from "@/icons/icon-service-5";
import IconService4 from "@/icons/icon-service-4";
import IconService6 from "@/icons/icon-service-6";
import Service from "./service";

export default function ServiceSection() {
  const t = useTranslations();
  const services = [
    {
      icon: <IconService1 />,
      title: t("service-title-1"),
      content: t("service-content-1"),
    },
    {
      icon: <IconService2 />,
      title: t("service-title-2"),
      content: t("service-content-2"),
    },
    {
      icon: <IconService6 />,
      title: t("service-title-3"),
      content: t("service-content-3"),
    },
    {
      icon: <IconService3 />,
      title: t("service-title-4"),
      content: t("service-content-4"),
    },
    {
      icon: <IconService4 />,
      title: t("service-title-5"),
      content: t("service-content-5"),
    },
    {
      icon: <IconService5 />,
      title: t("service-title-6"),
      content: t("service-content-6"),
    },
  ];
  return (
    <CommonSection title={t("service-title")} content={t("service-content")} className="py-[70px] ">
      <div className="grid grid-cols-1 md:grid-cols-3 md:hidden justify-center w-[90%]">
        {services.map((item, index) => (
          <Service
            key={index}
            icon={item.icon}
            title={item.title}
            content={item.content}
            className={index % 2 === 0 ? "bg-white" : "bg-[#F9F9FC]"}
          />
        ))}
      </div>

      <div className="grid grid-cols-3 hidden md:grid">
        {services.map((item, index) => (
          <Service
            key={index}
            icon={item.icon}
            title={item.title}
            content={item.content}
            className={index % 2 === 0 ? "bg-white" : "bg-[#F9F9FC]"}
          />
        ))}
      </div>
    </CommonSection>
  );
}
