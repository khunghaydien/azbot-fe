"use client";
import { memo } from "react";
import { useRouter } from "next/navigation";
import { PATHS } from "@/consts";
import NavigationTab from "./navigation-tab";
import { useTranslations } from "next-intl";

interface NavigationItem {
  key: string;
  path: string;
  label: string;
  onClick: () => void;
}

interface NavigationTabsProps {
  className?: string;
}

export const NavigationTabs = memo(function NavigationTabs({
  className,
}: NavigationTabsProps) {
  const router = useRouter();
  const t = useTranslations();

  const navigationItems: NavigationItem[] = [
    {
      key: "introduction",
      path: PATHS.INTRODUCTION,
      label: t("introduction"),
      onClick: () => router.push(PATHS.INTRODUCTION),
    },
    {
      key: "service",
      path: PATHS.SERVICE,
      label: t("service"),
      onClick: () => router.push(PATHS.SERVICE),
    },
    {
      key: "solution",
      path: PATHS.SOLUTION,
      label: t("solution"),
      onClick: () => router.push(PATHS.SOLUTION),
    },
    {
      key: "product",
      path: PATHS.PRODUCT,
      label: t("product"),
      onClick: () => router.push(PATHS.PRODUCT),
    },
    {
      key: "feedback",
      path: PATHS.FEEDBACK,
      label: t("feedback"),
      onClick: () => router.push(PATHS.FEEDBACK),
    },
    {
      key: "contact",
      path: PATHS.CONTACT,
      label: t("contact"),
      onClick: () => router.push(PATHS.CONTACT),
    },
  ];

  return (
    <nav
      className={`flex items-center gap-8 ${className}`}
      role="navigation"
      aria-label="Main navigation"
    >
      {navigationItems.map(({ key, path, label, onClick }) => (
        <NavigationTab key={key} path={path} label={label} onClick={onClick} />
      ))}
    </nav>
  );
});

export default NavigationTabs;
