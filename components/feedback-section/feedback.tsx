import Image from "next/image";
interface FeedbackProps {
    shop: string;
    title: string;
    content: string;
}

export default function Feedback({ shop, title, content }: FeedbackProps) {
    return (
        <div className="flex flex-col justify-between gap-4 w-full max-w-[500px] h-auto rounded-lg bg-white p-4 h-[250px]">
            <div className="flex flex-col gap-2">
                <div className="flex items-start gap-1">
                    <Image src="/images/quote.png" alt="quote" width={22} height={22} className="w-[22px] h-[22px]" />
                    <p className="text-[20px] font-bold text-[#FC3C1C]">{title}</p>
                </div>
                <div className="text-[16px] font-normal text-[#45474A] mt-2">{content}</div>
            </div>
            <div className="text-[16px] font-bold text-[#1A1C1E]">{shop}</div>
        </div>
    );
}