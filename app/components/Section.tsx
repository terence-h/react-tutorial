import { PropsWithChildren } from "react";
import LoaderWrapper from "./LoaderWrapper";

interface SectionProps extends PropsWithChildren {
    id: string;
    className?: string
}

export default function Section({ children, id, className }: SectionProps) {
    return (
        <LoaderWrapper>
            <section id={id} className={`mb-12 md:mb-0 ${className}`}>
                {children}
            </section>
        </LoaderWrapper>
    );
}