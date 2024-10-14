import { PropsWithChildren } from "react";

export default function Paragraph({ children }: PropsWithChildren) {
    return (
        <p className="text-justify leading-7 md:leading-8 mb-5">{children}</p>
    );
}