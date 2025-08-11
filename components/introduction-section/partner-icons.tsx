import Image from "next/image";

export default function PartnerIcons({ className }: { className?: string }) {
    return (
        <div className={`flex gap-4 items-center no-wrap ${className}`}>
            <Image width={70} height={70} src="/images/laza.png" alt="Lazada" className="md:w-[70px] md:h-[70px] w-[50px] h-[50px]" />
            <Image width={70} height={70} src="/images/insta.png" alt="Instagram" className="md:w-[70px] md:h-[70px] w-[50px] h-[50px]" />
            <Image width={70} height={70} src="/images/fb.png" alt="Facebook" className="md:w-[70px] md:h-[70px] w-[50px] h-[50px]" />
            <Image width={70} height={70} src="/images/zalo.png" alt="Zalo" className="md:w-[70px] md:h-[70px] w-[50px] h-[50px]" />
            <Image width={70} height={70} src="/images/pan.png" alt="Pan" className="md:w-[70px] md:h-[70px] w-[50px] h-[50px]" />
            <Image width={70} height={70} src="/images/kio.png" alt="KiotViet" className="md:w-[70px] md:h-[70px] w-[50px] h-[50px]" />
        </div>
    );
}