interface FeedbackProps {
    shop: string;
    title: string;
    content: string;
}

export default function Feedback({ shop, title, content }: FeedbackProps) {
    return (
        <div className="flex flex-col gap-2">
            <div className="text-2xl font-bold">{shop}</div>
            <div className="text-lg">{title}</div>
            <div className="text-base">{content}</div>
        </div>
    );
}