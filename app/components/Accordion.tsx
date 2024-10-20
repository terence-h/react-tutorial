import React, { useState, ReactElement } from 'react';
import { AccordionItemProps } from './AccordionItem';

interface AccordionProps {
    children: ReactElement<AccordionItemProps> | ReactElement<AccordionItemProps>[];
    allowMultipleOpen?: boolean; // If true, multiple items can be open simultaneously
}

export default function Accordion({ children, allowMultipleOpen = false }: AccordionProps) {
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

    // Normalize children to an array
    const childrenArray = React.Children.toArray(children) as ReactElement<AccordionItemProps>[];

    return (
        <div className="w-fit mx-auto md:ml-0 md:mr-0">
            {childrenArray.map((child, index) =>
                React.cloneElement(child, {
                    isOpen: openIndices.includes(index),
                    onToggle: () => toggleIndex(index),
                    key: index
                })
            )}
        </div>
    );
};