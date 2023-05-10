import React from 'react';
import { render, screen } from '@testing-library/react';
import HolidaysTable from "@/components/tables/holidays_table/HolidaysTable";
import Holidays from "../../../../pages/holidays";
describe('HolidaysTable', () => {
    const columns = [
        { header: 'Name', accessor: 'name' },
        { header: 'Date', accessor: 'date' },
    ];

    const data = [
        { name: 'Holiday 1', date: '2022-01-01' },
        { name: 'Holiday 2', date: '2022-12-25' },
    ];

    it('renders the table with correct data and columns', () => {
        //render(Holidays);
        expect(screen.getByText('Name')).toBeInTheDocument();
        expect(screen.getByText('Date')).toBeInTheDocument();
        expect(screen.getByText('Holiday 1')).toBeInTheDocument();
        expect(screen.getByText('2022-01-01')).toBeInTheDocument();
        expect(screen.getByText('Holiday 2')).toBeInTheDocument();
        expect(screen.getByText('2022-12-25')).toBeInTheDocument();
    });
});









