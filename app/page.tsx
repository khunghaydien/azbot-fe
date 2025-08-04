import ServiceSection from "@/components/service-section";
import IntroductionSection from "@/components/introduction-section";
import MainHeader from "@/components/main-header";
import PackageSection from "@/components/package-section";
import WorkFlowSection from "@/components/work-flow-section";
import FeedbackSection from "@/components/feedback-section";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <MainHeader />
      <IntroductionSection />
      <ServiceSection />
      <PackageSection />
      <WorkFlowSection />
      <FeedbackSection />
    </div>
  );
}
