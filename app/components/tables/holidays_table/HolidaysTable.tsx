import React, { useState, useEffect } from 'react';
import { Table, Pagination } from 'react-bootstrap';
import { useTable, Column } from 'react-table';
import { Holiday } from '../../../types/Holiday';
import HolidaysTableHeaders from '@/components/tables/holidays_table/table_element/HolidaysTableHeaders';

interface HolidaysTableProps {
  data: Holiday[];
}

const columns: Column[] = HolidaysTableHeaders; // Static columns

const HolidaysTable = ({ data }: HolidaysTableProps) => {
    const [filterValue, setFilterValue] = useState<string>('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const [tableData, setTableData] = useState<Holiday[]>([]); // Initialize table data as an empty array

    useEffect(() => {
        const filteredData = data.filter((holiday) =>
            holiday.description.toLowerCase().startsWith(filterValue.toLowerCase())
        );
        setTableData(filteredData); // Set table data to the filtered data
        setCurrentPage(1); // Reset current page to 1
    }, [filterValue, data]);

    const totalPages = Math.ceil(tableData.length / itemsPerPage);
    const pageRange = 6;
    let startPage = Math.max(1, currentPage - Math.floor(pageRange / 2));
    const endPage = Math.min(startPage + pageRange - 1, totalPages);
    if (endPage === totalPages) {
        startPage = Math.max(1, endPage - pageRange + 1);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data: currentItems });

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilterValue(event.target.value);
    };

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <input
                type="text"
                value={filterValue}
                onChange={handleFilterChange}
                placeholder="Filter by name"
            />
            <Table {...getTableProps()} bordered striped>
                <thead>
                    {headerGroups.map((headerGroup, index) => (
                        <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()} key={column.id}>
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} key={row.id}>
                                {row.cells.map((cell) => (
                                    <td {...cell.getCellProps()} key={cell.value}>
                                        {cell.render('Cell')}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            <Pagination>
                {startPage > 1 && (
                    <>
                        <Pagination.Item onClick={() => handlePageChange(1)}>
              1
                        </Pagination.Item>
                        {startPage > 2 && <Pagination.Ellipsis disabled />}
                    </>
                )}
                {Array(endPage - startPage + 1)
                    .fill(null)
                    .map((_, index) => {
                        const pageNumber = startPage + index;
                        return (
                            <Pagination.Item
                                key={pageNumber}
                                active={pageNumber === currentPage}
                                onClick={() => handlePageChange(pageNumber)}
                            >
                                {pageNumber}
                            </Pagination.Item>
                        );
                    })}
                {endPage < totalPages && (
                    <>
                        {endPage < totalPages - 1 && <Pagination.Ellipsis disabled />}
                        <Pagination.Item onClick={() => handlePageChange(totalPages)}>
                            {totalPages}
                        </Pagination.Item>
                    </>
                )}
            </Pagination>
        </div>
    );
};

export default HolidaysTable;
