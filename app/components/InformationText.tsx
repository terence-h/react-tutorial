import { PropsWithChildren } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

interface InformationTextProps extends PropsWithChildren {
    className?: string
}

export default function InformationText({ children, className }: InformationTextProps) {
    return (
        <div className={`w-fit bg-yellow-500 dark:bg-yellow-600 text-foreground p-3 rounded-lg shadow-md flex gap-2 ${className || ''}`}>
            <InformationCircleIcon width={30} height={30} />
            <>
                {children}
            </>
        </div>
    );
}