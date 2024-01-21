'use client';

import {
    flexRender,
    MRT_GlobalFilterTextInput,
    MRT_TablePagination,
    MRT_ToolbarAlertBanner,
    useMantineReactTable,
    MRT_TableBodyCellValue,
    MantineReactTable
} from 'mantine-react-table';
import { Divider, Flex, Stack, Table} from '@mantine/core';
import { useState } from 'react';
import HolidaysTableHeaders from '@/components/tables/holidays_table/table_element/HolidaysTableHeaders';
import { Holiday } from './Holiday';
/*
import SortArrow from '@/components/tables/holidays_table/table_element/SortArrow';
*/
import '../../../app/global.css';

interface HolidaysTableProps {
  data: Holiday[];
}

const HolidaysTable = ({ data }: HolidaysTableProps) => {

    const [sorting, setSorting] = useState([{ id: 'description', desc: false }]);

    const tableInstance = useMantineReactTable({
        columns: HolidaysTableHeaders,
        data: data || [],
        /*enableRowSelection: true,
        initialState: {
            pagination: { pageSize: 10, pageIndex: 0 },
            showGlobalFilter: true,
            sorting: sorting,
        },
        mantinePaginationProps: {
            rowsPerPageOptions: ['5', '10', '15'],
        },
        paginationDisplayMode: 'pages',
        onSortingChange: setSorting,*/
    });

    return (
        <div className="container mx-auto p-4">
            {data === null ? (
                <div className="text-center">
                    <p className="font-bold text-2xl">No Data Available</p>
                </div>
            ) : (
                <MantineReactTable table={tableInstance}/>
                /*<Stack>
                    <Flex justify="space-between" align="end">
                        <MRT_GlobalFilterTextInput table={tableInstance} />
                    </Flex>
                    <Divider />
                    <Table
                        captionSide="top"
                        fz="md"
                        highlightOnHover
                        horizontalSpacing="xl"
                        striped
                        verticalSpacing="xs"
                        withTableBorder
                        withColumnBorders
                        m="0"
                    >
                        {/!*<thead>
                            {tableInstance.getHeaderGroups().map((headerGroup) => (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <th
                                            key={header.id}
                                            onClick={header.column.getToggleSortingHandler()}
                                            scope="col"
                                            className="px-2 py-2.5"
                                            style={{minWidth: '400px'}}
                                        >
                                            <div className="header-content">
                                                {header.isPlaceholder ? null :
                                                    flexRender(header.column.columnDef.header, header.getContext())}
                                                <SortArrow sortDirection={header.column.getIsSorted()}/>
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>*!/}
                        <thead>
                            {tableInstance.getHeaderGroups().map((headerGroup) => (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <th key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.Header ?? header.column.columnDef.header,
                                                    header.getContext(),
                                                )}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        {/!*<tbody>
                            {tableInstance.getRowModel().rows.map((row) => (
                                <tr key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                        <td key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.Cell ?? cell.column.columnDef.cell,
                                                cell.getContext(),
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>*!/}
                        <tbody>
                            {tableInstance.getRowModel().rows.map((row) => (
                                <tr key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                        <td key={cell.id}>
                                            <MRT_TableBodyCellValue cell={cell} table={tableInstance}/>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Flex justify="space-between" align="end">
                        <MRT_TablePagination table={tableInstance}/>
                    </Flex>
                    <MRT_ToolbarAlertBanner stackAlertBanner table={tableInstance}/>
                </Stack>*/
            )}
        </div>
    );
}

export default HolidaysTable;
