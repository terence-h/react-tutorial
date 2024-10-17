import React from 'react';

interface NestedListProps {
    items: ListItem[];
    level?: number
}

export interface ListItem {
    id: number;
    label: React.ReactNode;
    children?: ListItem[];
    className?: string; // Optional custom classes for the label
}

function getPadddingLeft(level: number) {
    switch (level) {
        case 1:
            return 'ps-4';
        case 2:
            return 'ps-8';
        case 3:
            return 'ps-12';
        case 4:
            return 'ps-16';
        case 5:
            return 'ps-20';
        default:
            return 'ps-24';
    }
}
/**
 * 
 * @example
 * const data: ListItem[] = [
  {
    id: 1,
    label: (
      <>
        <span>Item </span>
        <span className="text-red-600">1</span>
      </>
    ), // "1" is styled differently
    className: 'cursor-pointer', // Makes the label clickable
    children: [
      {
        id: 2,
        label: (
          <>
            <span>Item </span>
            <span className="italic">1.1</span>
          </>
        ),
        className: 'italic',
      },
      {
        id: 3,
        label: (
          <>
            <span>Item </span>
            <span>1.2</span>
          </>
        ),
        children: [
          {
            id: 4,
            label: (
              <>
                <span>Item </span>
                <span className="text-green-500">1.2.1</span>
              </>
            ),
          },
          {
            id: 5,
            label: (
              <>
                <span>Item </span>
                <span className="underline">1.2.2</span>
              </>
            ),
            className: 'underline',
          },
        ],
      },
    ],
  },
  {
    id: 6,
    label: (
      <>
        <span>Item </span>
        <span className="text-purple-500">2</span>
      </>
    ),
    children: [
      {
        id: 7,
        label: (
          <>
            <span>Item </span>
            <span className="text-purple-700">2.1</span>
          </>
        ),
        className: 'text-purple-500 hover:text-purple-700',
      },
    ],
  },
  {
    id: 8,
    label: (
      <>
        <span>Item </span>
        <span className="font-extrabold text-red-600">3</span>
      </>
    ),
    className: 'font-extrabold text-red-600',
  },
];
<NestedList items={data} />
 */
export default function NestedList({ items, level = 1 }: NestedListProps) {
    const paddingLeftClass = getPadddingLeft(level);

    return (
        <ul className={`list-disc ${paddingLeftClass} space-y-2`}>
            {items.map((item) => (
                <li key={item.id}>
                    <span className={`${item.className || ''}`}>
                        {item.label}
                    </span>
                    {item.children && item.children.length > 0 && (
                        <NestedList items={item.children} level={level + 1} />
                    )}
                </li>
            ))}
        </ul>
    );
}