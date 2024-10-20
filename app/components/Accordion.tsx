// src/components/Accordion.tsx

import React, { useState, ReactElement } from 'react';
import { AccordionItemProps } from './AccordionItem';

interface AccordionProps {
    children: ReactElement<AccordionItemProps>[];
    allowMultipleOpen?: boolean; // If true, multiple items can be open simultaneously
}

export default function Accordion ({ children, allowMultipleOpen = false }: AccordionProps) {
    const [openIndices, setOpenIndices] = useState<number[]>([]);

    const toggleIndex = (index: number) => {
        if (allowMultipleOpen) {
            setOpenIndices((prev) =>
                prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
            );
        } else {
            setOpenIndices((prev) => (prev.includes(index) ? [] : [index]));
        }
    };

    return (
        <div className="w-full mx-auto">
            {children.map((child, index) =>
                React.cloneElement(child, {
                    isOpen: openIndices.includes(index),
                    onToggle: () => toggleIndex(index),
                    key: index
                })
            )}
        </div>
    );
};