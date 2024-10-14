'use client';

import React from 'react';

export interface TableRow {
    [key: string]: React.ReactNode;
}

interface TableProps {
    headers: string[];
    data: TableRow[];
    className?: string
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
    className
}: TableProps) {
    return (
        <div className="overflow-x-auto">
            <table className={`border bg-gray-200 dark:bg-slate-800 border-gray-300 dark:border-slate-500 ${className}`}>
                {/* Table Header */}
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th
                                key={index}
                                scope="col"
                                className={`px-4 py-2 text-left border border-gray-300 dark:border-slate-500`}
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
                            className={`bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600`}
                        >
                            {headers.map((header, cellIndex) => (
                                <td
                                    key={cellIndex}
                                    className="px-4 py-2 border border-gray-300 dark:border-slate-500"
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