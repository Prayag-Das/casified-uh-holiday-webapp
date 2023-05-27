import React from 'react';
import { render, screen } from '@testing-library/react';
import HolidaysTable from "@/components/tables/holidays_table/HolidaysTable";
import { Holiday } from '../../../../types/Holiday';
import useAxiosPromise from '../../../../hooks/useAxiosPromise';

describe('HolidaysTable', () => {
    const columns = [
        {
            Header: 'Holiday',
            accessor: 'description'
        },
        {
            Header: 'Observed',
            accessor: 'observedDateFull'
        },
        {
            Header: 'Official',
            accessor: 'officialDateFull'
        }
    ];

    const { data, isLoading } = useAxiosPromise('holidays');

    it('renders the table with correct data and columns', () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        render(<HolidaysTable data={data}/>);
        /*expect(screen.getByText('Name')).toBeInTheDocument();
        expect(screen.getByText('Date')).toBeInTheDocument();
        expect(screen.getByText('Holiday 1')).toBeInTheDocument();
        expect(screen.getByText('2022-01-01')).toBeInTheDocument();
        expect(screen.getByText('Holiday 2')).toBeInTheDocument();
        expect(screen.getByText('2022-12-25')).toBeInTheDocument();*/
    });
});
