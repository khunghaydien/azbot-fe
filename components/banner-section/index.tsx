import Image from "next/image";
export default function BannerSection() {
    return (
        <Image src="/images/banner.png" alt="banner" width={1920} height={1080} className="w-full h-full" />
    );
}