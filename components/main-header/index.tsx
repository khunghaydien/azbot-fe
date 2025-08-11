"use client";
import { memo } from "react";
import Logo from "./logo";
import NavigationTabs from "./navigation-tabs";
import ScheduleConsultation from "./schedule-consultantion";
import LanguageSelection from "./language-selection";

interface MainHeaderProps {
  className?: string;
}

export const MainHeader = memo(function MainHeader({
  className,
}: MainHeaderProps) {
  return (
    <header
      className={`
       sticky top-0 z-50 border-b w-full flex justify-center items-center bg-white
        ${className}
      `}
    >
      <div className="flex items-center justify-between p-3 md:p-6 w-full max-w-[1360px] ">
        <div className="flex items-center gap-12">
          <Logo />
          <NavigationTabs className="hidden md:flex" />
        </div>
        <div className="flex items-center gap-2 md:gap-6">
          <ScheduleConsultation />
          <LanguageSelection />
        </div>
      </div>
    </header>
  );
});
export default MainHeader;
