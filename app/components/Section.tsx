import { PropsWithChildren } from "react";
import LoaderWrapper from "./LoaderWrapper";

interface SectionProps extends PropsWithChildren {
    className?: string
}

export default function Section({ children, className }: SectionProps) {
    return (
        <LoaderWrapper>
            <section className={`mb-12 md:mb-0 ${className}`}>
                {children}
            </section>
        </LoaderWrapper>
    );
}