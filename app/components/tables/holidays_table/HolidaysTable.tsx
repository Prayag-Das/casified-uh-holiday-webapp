import React, { useState, useEffect } from 'react';
import { Table, Pagination } from 'react-bootstrap';
import { useTable, Column } from 'react-table';
import { Holiday } from '../../../types/Holiday';
import HolidaysTableHeaders from '@/components/tables/holidays_table/table_element/HolidaysTableHeaders';
interface HolidaysTableProps {
  data: Holiday[];
}

const columns: Column[] = HolidaysTableHeaders;

const HolidaysTable = ({ data }: HolidaysTableProps) => {
    //14-17: Initialization
    const [filterValue, setFilterValue] = useState<string>('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const [tableData, setTableData] = useState<Holiday[]>([]);
  
    /*
      useEffect(): used when user input changes to fetch and store filtered data,
      which is used to render the new table. Sets current page to 1.
    */
    useEffect(() => {
        const filteredData = data.filter((holiday) =>
            holiday.description.toLowerCase().startsWith(filterValue.toLowerCase())
        );
        console.log(filteredData);
        setTableData(filteredData);
        setCurrentPage(1);
    }, [filterValue, data]);

    //33-39: Uses tableData.length to calculate amount of pages necessary. Limits Pagination bar's page range to 6.
    const totalPages = Math.ceil(tableData.length / itemsPerPage);
    const pageRange = 6;
    let startPage = Math.max(1, currentPage - Math.floor(pageRange / 2));
    const endPage = Math.min(startPage + pageRange - 1, totalPages);
    if (endPage === totalPages) {
        startPage = Math.max(1, endPage - pageRange + 1);
    }

    //42-44: Splits table data evenly among totalPages.
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);

    //47-53: Initializes Table with the correct properties, columns, and headers by the useTableFunction
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data: currentItems });

    //handleFilterChange(): changes filter input field to display user input
    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilterValue(event.target.value);
    };

    //handlePageChange(): changes the current page to the value passed in
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    /*
      66-135: renders the input field, table, and pagination bar
      (each with their own uses for the functions defined above)
    */
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

const AsyncHolidaysTable: React.FC<HolidaysTableProps> = ({ data }) => (
    <React.Suspense fallback={<div>Loading...</div>}>
        <HolidaysTable data={data} />
    </React.Suspense>
);

export default AsyncHolidaysTable;
