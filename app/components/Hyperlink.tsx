import Link from "next/link";
import { PropsWithChildren } from "react";

interface HyperlinkProps extends PropsWithChildren {
    href: string;
}

export default function Hyperlink({ href, children }: HyperlinkProps) {
    return <Link href={href} className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">{children}</Link>
}