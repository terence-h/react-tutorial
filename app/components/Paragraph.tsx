import { PropsWithChildren } from "react";

interface ParagraphProps extends PropsWithChildren {
    className?: string;
}

export default function Paragraph({ children, className }: ParagraphProps) {
    return (
        <p className={`text-justify leading-7 ${className || ''}`}>{children}</p>
    );
}