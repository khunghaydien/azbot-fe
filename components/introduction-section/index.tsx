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
      className: "md:justify-start justify-center",
    },
    {
      title: t("introduction-retail-title"),
      content: t("introduction-retail-content"),
      className: "md:justify-end justify-center",
    },
  ];
  return (
    <>
      <div className="w-full h-full relative md:hidden">
        <Image
          src="/images/background-customer.png"
          alt="Background Customer"
          width={768}
          height={1024}
          className="object-cover min-h-[500px]"
        />
        <div className="absolute top-0 left-0 w-full h-full inset-0 flex flex-col justify-center items-center gap-6">
          <div className="flex flex-col items-center justify-center gap-6 w-[90%] mt-10">
            <PartnerIcons className="w-full justify-center" />
            {introductionItems.map((item, index) => (
              <Introduction
                key={index}
                title={item.title}
                content={item.content}
                className={item.className}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-full relative hidden md:flex">
        <Image
          src="/images/background-customer.png"
          alt="Background Customer"
          width={1920}
          height={1080}
          className="object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full inset-0 flex flex-col justify-center items-center gap-6">
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
          <PartnerIcons className="w-3/4 justify-end" />
        </div>
      </div>
    </>
  );
};

export default IntroductionSection;
