import { PropsWithChildren } from "react";

interface ParagraphProps extends PropsWithChildren {
    className?: string
}

export default function Paragraph({ children, className }: ParagraphProps) {
    return (
        <p className={`text-justify leading-7 md:leading-8 mb-5 ${className || ''}`}>{children}</p>
    );
}