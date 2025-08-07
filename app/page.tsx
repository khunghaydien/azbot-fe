import Image from "next/image";
import ServiceSection from "@/components/service-section";
import IntroductionSection from "@/components/introduction-section";
import MainHeader from "@/components/main-header";
import PackageSection from "@/components/package-section";
import WorkFlowSection from "@/components/work-flow-section";
import FeedbackSection from "@/components/feedback-section";
import BannerSection from "@/components/banner-section";
import FooterSection from "@/components/footer-section";
import ExperienceSection from "@/components/experience-section";
import SolutionSection from "@/components/solution-section";
import ReportSection from "@/components/report-section";
export default function page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center bg-[#F5F5F6]">
        <MainHeader />
        <BannerSection />
        <IntroductionSection />
        <ReportSection />
      </div>
      <ServiceSection />
      <SolutionSection />
      <PackageSection />
      <WorkFlowSection />
      <FeedbackSection /> 
      <ExperienceSection />
      <FooterSection />
      <div className="fixed bottom-8 right-8 flex flex-col items-center justify-center gap-2 z-50">
        <div className="bg-white rounded-full p-2">
          <Image src="/images/zalo-icon.png" alt="chat-icon" width={50} height={50} className="object-cover w-[50px] h-[50px] cursor-pointer" />
        </div>
        <div className="bg-white rounded-full p-2">
          <Image src="/images/messenger-icon.png" alt="chat-icon" width={50} height={50} className="object-cover w-[50px] h-[50px] cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
