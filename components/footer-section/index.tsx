import Image from "next/image";
export default function FooterSection() {
    return (
        <div className="flex flex-col items-center justify-center gap-4 h-[130px] w-full bg-[#2F3033]">
            <Image src="/images/AZbot.png" alt="logo" width={100} height={45} />
            <p className="text-[#76777A]">Copyright © AIbus 2025</p>
        </div>
    );
}