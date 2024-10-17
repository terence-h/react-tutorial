'use client';

import React from 'react';

export interface TableRow {
    [key: string]: React.ReactNode;
}

interface TableProps {
    headers: string[];
    data: TableRow[];
    className?: string
    border?: boolean;
    fill?: boolean;
}
/**
 * 
 * @example
 * const headers = ['ID', 'Name', 'Email', 'Role'];

const data: TableRow[] = [
    { ID: 1, Name: 'John Doe', Email: 'john@example.com', Role: 'Admin' },
    { ID: 2, Name: 'Jane Smith', Email: 'jane@example.com', Role: 'Editor' },
    { ID: 3, Name: 'Bob Johnson', Email: 'bob@example.com', Role: 'Viewer' },
    { ID: 4, Name: 'Alice Williams', Email: 'alice@example.com', Role: 'Contributor' },
];

<Table headers={headers} data={data} />
 */
export default function Table({
    headers,
    data,
    className,
    border = true,
    fill = true
}: TableProps) {
    return (
        <div className="overflow-x-auto">
            <table className={`w-full table-auto md:min-w-[90%] md:max-w-[90%] mx-auto ${border ? 'border border-gray-300 dark:border-slate-500' : ''} ${fill ? 'bg-gray-200 dark:bg-slate-800' : ''} ${className || ''}`}>
                {/* Table Header */}
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th
                                key={index}
                                scope="col"
                                className={`px-2 py-1 md:px-4 md:py-2 text-left break-words ${border ? 'border border-gray-300 dark:border-slate-500' : ''}`}
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className={`${fill ? 'bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600' : ''}`}
                        >
                            {headers.map((header, cellIndex) => (
                                <td
                                    key={cellIndex}
                                    className={`px-2 py-1 md:px-4 md:py-2 break-words ${border ? 'border border-gray-300 dark:border-slate-500' : ''}`}
                                >
                                    {row[header]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};