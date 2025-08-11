import Image from "next/image";

export default function BannerSection() {
    return (
        <div className="relative w-full h-full">
            <Image
                src="/images/banner-mobile.png"
                alt="banner mobile"
                width={768}
                height={1024}
                className="w-full h-full md:hidden"
            />
            <Image
                src="/images/banner.png"
                alt="banner desktop"
                width={1920}
                height={1080}
                className="w-full h-full hidden md:block"
            />
            <div className="absolute top-[10%] left-3 inset-0 text-[36px] font-[900] uppercase md:hidden">
                <span className="text-white">Chốt Đơn</span> Mọi Lúc, Phản Hồi <span className="text-white">Tức Thì cùng AZbot</span>
            </div>
        </div>
    );
}