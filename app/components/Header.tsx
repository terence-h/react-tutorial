import { PropsWithChildren } from "react";

interface HeaderProps extends PropsWithChildren {
    className?: string
}

export default function Header({ children, className }: HeaderProps) {
    return (
        <>
            <h1 className={`text-3xl font-bold my-5 ${className}`}>{children}</h1>
        </>
    );
}