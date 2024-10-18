import { PropsWithChildren } from "react";

interface ParagraphProps extends PropsWithChildren {
    className?: string;
    marginTop?: number;
    marginBottom?: number;
}

export default function Paragraph({ children, className, marginTop = 0, marginBottom = 5 }: ParagraphProps) {
    return (
        <p className={`text-justify leading-7 md:leading-8 ${marginTop >= 0 ? `mt-${marginTop}` : `-mt-${-marginTop}`} ${marginBottom >= 0 ? `mb-${marginBottom}` : `-mb-${-marginBottom}`} ${className || ''}`}>{children}</p>
    );
}