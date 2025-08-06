import Image from "next/image";
export type WorkFlowProps = {
    step: number;
    background: string;
    title: string;
    content: string;
}
export default function WorkFlow({ step, background, title, content }: WorkFlowProps) {
    return (
        <div className="relative flex-1 w-full min-h-[350px] bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${background})` }}>
            <div className="absolute top-0 left-0 w-full h-full inset-0 flex justify-center items-center">
                <div className={`w-1/2 flex flex-col justify-center items-center ${step !== 4 ? "mr-10" : ""}`}>
                    <p className="text-white text-[20px] font-bold text-center">{step}</p>
                    <p className="text-white font-bold text-center text-[20px]">{title}</p>
                    <p className="text-white text-center font-normal text-[14px]">{content}</p>
                </div>
            </div>
        </div>
    );
}