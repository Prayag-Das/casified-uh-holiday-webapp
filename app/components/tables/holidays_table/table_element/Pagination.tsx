'use client';

import { useState } from 'react';
import { useReactTable } from '@tanstack/react-table';
import { Holiday } from '@/components/tables/holidays_table/Holiday';
import {CaretLeft, CaretRight, SkipEndFill, SkipStartFill} from "react-bootstrap-icons";

interface PaginationProps {
  tableInstance: ReturnType<typeof useReactTable<Holiday>>;
}

const Pagination = ({ tableInstance }: PaginationProps) => {
    const [activePage, setActivePage] = useState(0);
    const startPage = Math.max(0, activePage - 2);
    const endPage = Math.min(tableInstance.getPageCount() - 1, startPage + 4);

    const paginationButtons = [];

    for (let i = startPage; i <= endPage; i++) {
        paginationButtons.push(
            <button
                key={i}
                className={`border-b text-black ring-1 ring-off-white px-3.5 ${
                    activePage === i ? 'bg-green-200 hover:bg-green-200' : 'bg-white hover:bg-off-white'
                }`}
                onClick={() => {
                    tableInstance.setPageIndex(i);
                    setActivePage(i);
                }}
            >
                {i + 1}
            </button>
        );
    }

    const navigateToPage = (page: number) => {
        tableInstance.setPageIndex(page);
        setActivePage(page);
    };

    return (
        <div className="flex justify-end mt-4">
            <div className="inline-flex rounded-md shadow-sm" role="group">
                <button type="button"
                    className="pagination-button-first d-flex align-items-center"
                    disabled={!tableInstance.getCanPreviousPage()}
                    onClick={() => navigateToPage(0)}
                >
                    <SkipStartFill className="me-1"/> First
                </button>
                <button type="button"
                    className="pagination-button-middle d-flex align-items-center"
                    disabled={!tableInstance.getCanPreviousPage()}
                    onClick={() => {
                        tableInstance.previousPage();
                        setActivePage(activePage - 1);
                    }}
                >
                    <CaretLeft className="me-1"/> Prev
                </button>
                {paginationButtons}
                <button type="button"
                    className="pagination-button-middle d-flex align-items-center"
                    disabled={!tableInstance.getCanNextPage()}
                    onClick={() => {
                        tableInstance.nextPage();
                        setActivePage(activePage + 1);
                    }}
                >
          Next <CaretRight className="me-1"/>
                </button>
                <button type="button"
                    className="pagination-button-last d-flex align-items-center"
                    disabled={!tableInstance.getCanNextPage()}
                    onClick={() => {
                        const lastPage = tableInstance.getPageCount() - 1;
                        tableInstance.setPageIndex(lastPage);
                        setActivePage(lastPage);
                    }}
                >
          Last <SkipEndFill className="me-1"/>
                </button>
            </div>
        </div>
    );
};

export default Pagination;