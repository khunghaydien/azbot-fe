"use client";
import { useTranslations } from "next-intl";
import CommonSection from "../common-section";
import Package from "./package";
import { useState } from "react";
import Image from "next/image";

export default function PackageSection() {
  const t = useTranslations();
  const packages = [
    {
      month: 1,
      money: "4.900.000",
    },
    {
      month: 3,
      money: "3.300.000",
      discount: "-32%",
    },
    {
      month: 6,
      money: "3.100.000",
      discount: "-36%",
    },
    {
      month: 12,
      money: "3.000.000",
      discount: "-39%",
    },
  ];
  const [currentPackage, setCurrentPackage] = useState<number | null>(1);
  return (
    <CommonSection title={t("package-title")} content={t("package-content")} className="py-[70px]">
      <div className="flex flex-nowrap w-full items-center justify-center gap-8 md:flex hidden">
        <div className="flex flex-col gap-4 w-full max-w-[500px]">
          {packages.map((pkg) => (
            <Package
              key={pkg.month}
              {...pkg}
              setCurrentPackage={setCurrentPackage}
              isActive={currentPackage === pkg.month}
            />
          ))}
          <div className="flex items-center justify-center">
            <button className="bg-primary text-white h-[60px] rounded-[42px] w-full uppercase font-bold text-[18px] font-bold">
              {t("package-button")}
            </button>
          </div>
        </div>
        <Image
          src="/images/package-divide.png"
          alt="Package divide"
          width={25}
          height={531}
          className="w-[25px] h-[531px]"
        />
        <div className="flex flex-col gap-4 w-full max-w-[630px]">
          <ul className="list-disc pl-4 flex flex-col gap-8">
            <li>
              Tư vấn kịch bản chăm sóc <b>khách hàng cá nhân hóa</b>  dựa trên lịch sử trò chuyện thực tế.
            </li>
            <li>
              <b>Kết nối đa nền tảng:</b>  Messenger, Zalo OA, Pancake, Kiot Việt…: quản lý tập trung
            </li>
            <li>
              Tích hợp lên đế <b> 10 fanpage/website</b>, cung cấp <b>100.000 tin nhắn/tháng</b> , tư vấn <b>300 sản phẩm</b> cùng lúc
            </li>
            <li>
              <b>Thiết lập đa ngôn ngữ:</b> Tiếng Việt, Anh, Thái, Nhật, Trung – tiếp cận khách hàng quốc tế dễ dàng
            </li>
            <li>
              <b>Cập nhật & học dữ liệu mới hàng tuần:</b> chatbot ngày càng thông minh, hiểu khách hàng hơn
            </li>
            <li>
              <b>Hỗ trợ online 24/7 </b> – luôn sẵn sàng đồng hành cùng doanh nghiệp
            </li>
          </ul>
        </div>
      </div>
      <div className="md:hidden flex flex-col gap-4 w-[90%]">
        <div className="flex flex-col gap-4 w-full">
          {packages.map((pkg) => (
            <Package
              key={pkg.month}
              {...pkg}
              setCurrentPackage={setCurrentPackage}
              isActive={currentPackage === pkg.month}
            />
          ))}
          <button className="bg-primary text-white px-6 py-4 rounded-[42px] w-full uppercase font-bold text-[18px] font-bold">
            {t("package-button")}
          </button>
        </div>
        <Image
          src="/images/package-divide-mobile.png"
          alt="Package divide"
          width={768}
          height={25}
        />
        <div className="flex flex-col gap-4 w-full">
          <ul className="list-disc pl-4 flex flex-col gap-4">
            <li>
              Tư vấn kịch bản chăm sóc <b>khách hàng cá nhân hóa</b>  dựa trên lịch sử trò chuyện thực tế.
            </li>
            <li>
              <b>Kết nối đa nền tảng:</b>  Messenger, Zalo OA, Pancake, Kiot Việt…: quản lý tập trung
            </li>
            <li>
              Tích hợp lên đế <b> 10 fanpage/website</b>, cung cấp <b>100.000 tin nhắn/tháng</b> , tư vấn <b>300 sản phẩm</b> cùng lúc
            </li>
            <li>
              <b>Thiết lập đa ngôn ngữ:</b> Tiếng Việt, Anh, Thái, Nhật, Trung – tiếp cận khách hàng quốc tế dễ dàng
            </li>
            <li>
              <b>Cập nhật & học dữ liệu mới hàng tuần:</b> chatbot ngày càng thông minh, hiểu khách hàng hơn
            </li>
            <li>
              <b>Hỗ trợ online 24/7 </b> – luôn sẵn sàng đồng hành cùng doanh nghiệp
            </li>
          </ul>
        </div>
      </div>
    </CommonSection>
  );
}
