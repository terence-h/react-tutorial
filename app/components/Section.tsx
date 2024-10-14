import { PropsWithChildren } from "react";

interface SectionProps extends PropsWithChildren {
    id: string;
    className?: string
}

export default function Section({ children, id, className }: SectionProps) {
    return (
        <section id={id} className={`mb-12 md:mb-0 ${className}`}>
            {children}
        </section>
    );
}