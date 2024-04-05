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
                                    {}
                                </td>
                            ))}
                        </tr>
                    ))}
                </TableBody>
            </Table>
            {/*<table>
                <thead>
                    {tableInstance.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th
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
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tr className={`border-b border-off-white`}></tr>
                <tbody>
                    {tableInstance.getRowModel().rows.map((row, index: number) => (
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
                                    {}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>*/}
            <Pagination tableInstance={tableInstance} />
        </div>
    );
}

export default HolidaysTable;

/*import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
]

export function TableDemo() {
    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {invoices.map((invoice) => (
                    <TableRow key={invoice.invoice}>
                        <TableCell className="font-medium">{invoice.invoice}</TableCell>
                        <TableCell>{invoice.paymentStatus}</TableCell>
                        <TableCell>{invoice.paymentMethod}</TableCell>
                        <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}*/
