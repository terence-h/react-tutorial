import { PropsWithChildren } from 'react';

export interface AccordionItemProps extends PropsWithChildren {
    title: string;
    isOpen?: boolean;
    onToggle?: () => void;
}

export default function AccordionItem({ title, children, isOpen = false, onToggle }: AccordionItemProps) {
    return (
        <div className="border-b border-gray-200">
            <button
                className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
                onClick={onToggle}
            >
                <span className="text-lg font-medium">{title}</span>
                <svg
                    className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[5000px] opacity-100 pb-5' : 'max-h-0 opacity-0'}`}>
                {children}
            </div>
        </div>
    );
};