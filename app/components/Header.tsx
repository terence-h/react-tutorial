import { PropsWithChildren } from "react";

interface HeaderProps extends PropsWithChildren {
    level?: number;
    className?: string;
}

export default function Header({ children, level = 1, className }: HeaderProps) {
    let headerClass: string = `text-3xl font-bold my-5 ${className || ''}`;
    let header: JSX.Element = <h1 className={headerClass}>{children}</h1>;

    switch (level) {
        case 1: {
            headerClass = `text-3xl font-bold my-5 ${className || ''}`;
            header = <h1 className={headerClass}>{children}</h1>;
            break;
        }
        case 2: {
            headerClass = `text-2xl font-bold my-4 ${className || ''}`;
            header = <h2 className={headerClass}>{children}</h2>;
            break;
        }
        case 3: {
            headerClass = `text-xl font-bold my-3 ${className || ''}`;
            header = <h2 className={headerClass}>{children}</h2>;
            break;
        }
        case 4: {
            headerClass = `text-lg font-bold my-2 ${className || ''}`;
            header = <h2 className={headerClass}>{children}</h2>;
            break;
        }
        case 5: {
            headerClass = `text-lg font-semibold my-2 ${className || ''}`;
            header = <h2 className={headerClass}>{children}</h2>;
            break;
        }
        case 6: {
            headerClass = `text-lg font-medium my-2 ${className || ''}`;
            header = <h2 className={headerClass}>{children}</h2>;
            break;
        }
        default: break;
    }

    return (
        <>
            {header}
        </>
    );
}