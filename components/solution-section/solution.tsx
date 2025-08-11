import Image from "next/image";
export default function Solution({ title, description, index }: { title: string, description: string, index: number }) {
    return (
        <>
            <div className="max-w-[300px] flex-1 bg-contain relative md:flex hidden">
                <Image src="/images/solution-item-bg.png" alt="solution-item-bg" width={300} height={300}/>
                <div className="w-[full] h-full absolute top-0 left-0 inset-0 flex items-start justify-center">
                    <div className="w-[80%] h-full flex flex-col items-center justify-start text-center mt-20">
                        <p className="text-[20px] font-bold text-[#1A1C1E]">{title}</p>
                        <p className="text-[16px] font-normal text-[#45474A] mt-4">{description}</p>
                    </div>
                </div>
            </div>
            <div className="flex-1 w-full bg-contain relative md:hidden" style={{ marginTop: index > 0 ? '-100%' : '0', zIndex: index }}>
                <Image src="/images/solution-item-bg-mobile.png" alt="solution-item-bg" width={300} height={300} className="min-h-[300px] object-cover" />
                <div className="w-full h-full absolute top-0 left-0 inset-0 flex items-start justify-center">
                    <div className="w-full h-full flex flex-col items-center justify-start text-center mt-20">
                        <p className="text-[20px] font-bold text-[#1A1C1E]">{title}</p>
                        <p className="text-[16px] font-normal text-[#45474A] mt-4">{description}</p>
                    </div>
                </div>
            </div>
        </>

    );
}