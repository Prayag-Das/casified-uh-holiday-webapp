import { useMemo, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useTable, Column, useGlobalFilter } from 'react-table';
import { Holiday } from '../../../types/Holiday';
import HolidaysTableHeaders from '@/components/tables/holidays_table/table_element/HolidaysTableHeaders';

interface HolidaysTableProps {
  data: Holiday[];
}

const HolidaysTable = ({ data }: HolidaysTableProps) => {
    const columns: Column[] = useMemo(() => HolidaysTableHeaders, []);
    const [filterValue, setFilterValue] = useState<string>(''); //no initial filter text in field

    const filteredData = useMemo(() => {
        return data.filter((holiday) =>
            holiday.description.toLowerCase().includes(filterValue.toLowerCase())
        );
    }, [data, filterValue]);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data: filteredData, useGlobalFilter });

    //this is called whenever the user changes the text in the input field (line 39)
    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilterValue(event.target.value);
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
        </div>
    );
};

export default HolidaysTable;
