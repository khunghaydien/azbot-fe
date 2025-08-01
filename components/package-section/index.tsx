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
    <CommonSection title={t("package-title")} content={t("package-content")}>
      <div className="flex flex-nowrap w-full items-center justify-center gap-8">
        <div className="flex flex-col gap-4 w-full">
          {packages.map((pkg) => (
            <Package
              key={pkg.month}
              {...pkg}
              setCurrentPackage={setCurrentPackage}
              isActive={currentPackage === pkg.month}
            />
          ))}
        </div>
        <Image
          src="/images/package-divide.png"
          alt="Package divide"
          width={25}
          height={531}
        />
        <div className="flex flex-col gap-4 w-full">
          {packages.map((pkg) => (
            <Package
              key={pkg.month}
              {...pkg}
              setCurrentPackage={setCurrentPackage}
              isActive={currentPackage === pkg.month}
            />
          ))}
        </div>
      </div>
    </CommonSection>
  );
}
