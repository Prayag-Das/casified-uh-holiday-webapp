"use client"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import {
    useReactTable,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    getFilteredRowModel,
    getSortedRowModel,
} from '@tanstack/react-table';
import {useState} from 'react';
import HolidaysTableHeaders from '@/components/tables/holidays_table/table_element/HolidaysTableHeaders';
import { Holiday } from './Holiday';
import SortArrow from '@/components/tables/holidays_table/table_element/SortArrow';
import Pagination from '@/components/tables/holidays_table/table_element/Pagination';
import Filter from '@/components/tables/holidays_table/table_element/Filter';
/*
import HolidayDialog from "@/components/dialogs/holiday_dialog/HolidayDialog";
*/
import '../../../app/globals.css';

interface HolidaysTableProps {
  data: Holiday[];
}

const HolidaysTable = ({ data }: HolidaysTableProps) => {

    const [filtering, setFiltering] = useState<string>("");
    const [sorting, setSorting] = useState([{ id: 'description', desc: false }]);

    const tableInstance = useReactTable({
        columns: HolidaysTableHeaders,
        data: data || [],
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            globalFilter: filtering,
            sorting: sorting,
        },
        onGlobalFilterChange: setFiltering,
        onSortingChange: setSorting,
    });

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-end mb-4">
                <Filter filtering={filtering} setFiltering={setFiltering} />
            </div>
            <Table>
                <TableCaption>The list of holidays observed by the University of Hawai'i</TableCaption>
                <TableHeader>
                    {tableInstance.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <TableHead
                                    key={header.id}
                                    onClick={header.column.getToggleSortingHandler()}
                                    scope="col"
                                    className="px-2 py-2.5"
                                    style={{ minWidth: '400px' }}
                                >
                                    <div className="header-content">
                                        {header.isPlaceholder ? null :
                                            flexRender(header.column.columnDef.header, header.getContext())}
                                        <SortArrow sortDirection={header.column.getIsSorted()} />
                                    </div>
                                </TableHead>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {tableInstance.getRowModel().rows.map((row, index: number) => (
                        <Dialog>
                            <DialogTrigger asChild>
                                <tr
                                    className={`${
                                        index % 2 === 0
                                            ? 'bg-top'
                                            : 'bg-transparent'
                                    } border-b border-off-white`}
                                    key={row.id}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <td key={cell.id} className="p-2">
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </td>
                                    ))}
                                </tr>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle key={row.id}>Holiday: {row.id}</DialogTitle>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="observed" className="text-right">
                                  Observed:
                                        </Label>
                                        <DialogDescription id="observed">
                                            test
                                        </DialogDescription>
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="official" className="text-right">
                                Official:
                                        </Label>
                                        <DialogDescription id="official">
                                            test
                                        </DialogDescription>
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    ))}
                </TableBody>
            </Table>
            <Pagination tableInstance={tableInstance} />
        </div>
    );
}

export default HolidaysTable;
