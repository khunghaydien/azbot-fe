import Image from "next/image";

export default function PartnerIcons() {
    return (
        <div className="flex gap-4 items-center no-wrap justify-end w-3/4">
            <Image width={70} height={70} src="/images/laza.png" alt="Lazada" className="w-[70px] h-[70px]"/>
            <Image width={70} height={70} src="/images/insta.png" alt="Instagram" className="w-[70px] h-[70px]"/>
            <Image width={70} height={70} src="/images/fb.png" alt="Facebook" className="w-[70px] h-[70px]"/>
            <Image width={70} height={70} src="/images/zalo.png" alt="Zalo" className="w-[70px] h-[70px]"/>
            <Image width={70} height={70} src="/images/pan.png" alt="Pan" className="w-[70px] h-[70px]"/>
            <Image width={70} height={70} src="/images/kio.png" alt="KiotViet" className="w-[70px] h-[70px]"/>
        </div>
    );
}