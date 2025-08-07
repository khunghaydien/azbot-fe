import Image from "next/image";
export default function Solution({ title, description }: { title: string, description: string }) {
    return (
        <div className="max-w-[300px] flex-1 bg-contain relative">
            <Image src="/images/solution-item-bg.png" alt="solution-item-bg" width={300} height={300} className="w-full h-full" />
            <div className="w-full h-full absolute top-0 left-0 inset-0 flex items-start justify-center">
                <div className="w-full h-full flex flex-col items-center justify-start w-[200px] text-center mt-20 z-10">
                    <p className="text-[20px] font-bold text-[#1A1C1E]">{title}</p>
                    <p className="text-[16px] font-normal text-[#45474A] mt-4">{description}</p>
                </div>
            </div>
        </div>
    );
}