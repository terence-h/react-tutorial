'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

interface PaginationProps {
    previousPath?: string;
    nextPath?: string;
    previousLabel?: string;
    nextLabel?: string;
}

export default function Pagination({
    previousPath,
    nextPath,
    previousLabel = 'Previous',
    nextLabel = 'Next',
}: PaginationProps) {
    return (
        <div className="flex justify-between mt-8 h-12 text-xs md:text-base" >
            {
                previousPath ? (
                    <Link href={previousPath} passHref className='flex items-center px-2 md:px-5 bg-gray-200 dark:bg-slate-700 rounded-full text-blue-600 hover:text-blue-800 dark:text-gray-300 dark:hover:text-gray-500 transition-colors duration-200'>
                        <ChevronLeftIcon className="h-4 w-4 md:h-5 md:w-5 mr-1" />
                        {previousLabel}
                    </Link>

                ) : (
                    <div></div> // Empty div to maintain spacing if no Previous button
                )}

            {
                nextPath ? (
                    <Link href={nextPath} passHref className='flex items-center px-3 md:px-5 bg-gray-200 dark:bg-slate-700 rounded-full text-blue-600 hover:text-blue-800 dark:text-gray-300 dark:hover:text-gray-500 transition-colors duration-200'>
                        {nextLabel}
                        <ChevronRightIcon className="h-4 w-4 md:h-5 md:w-5 ml-1" />
                    </Link>

                ) : (
                    <div></div> // Empty div to maintain spacing if no Next button
                )
            }
        </div >
    );
};