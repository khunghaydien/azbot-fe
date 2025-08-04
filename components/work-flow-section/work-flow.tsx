export type WorkFlowProps = {
    step: number;
    background: string;
    title: string;
    content: string;
}
export default function WorkFlow({ step, background, title, content }: WorkFlowProps) {
    return (
        <div className={`${background} p-4 rounded-lg`}>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
}