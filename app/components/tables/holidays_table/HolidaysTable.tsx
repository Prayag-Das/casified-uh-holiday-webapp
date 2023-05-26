import { useMemo } from 'react';
import { Table } from 'react-bootstrap';
import { useTable, Column } from 'react-table';
import { Holiday } from '@/types/Holiday';
import HolidaysTableHeaders from '@/components/tables/holidays_table/table_element/HolidaysTableHeaders';

interface HolidaysTableProps {
  data: Holiday[];
}

const HolidaysTable = ({data}: HolidaysTableProps) => {
    const columns: Column[] = useMemo(() => HolidaysTableHeaders, []);
    data = useMemo(() => data, []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({ columns, data });

    return (
        <Table {...getTableProps()} bordered striped>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
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
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()} key={row.id}>
                            {row.cells.map((cell) => (
                                <td {...cell.getCellProps()} key={cell.value}> {cell.render('Cell')} </td>
                            ))}
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    );
};

export default HolidaysTable;
  