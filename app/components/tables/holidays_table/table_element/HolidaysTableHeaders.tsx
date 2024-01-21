import {Holiday} from "@/components/tables/holidays_table/Holiday";
import { type MRT_ColumnDef } from 'mantine-react-table';

const HolidaysTableHeaders : MRT_ColumnDef<Holiday>[] = [
    {
        header: 'HOLIDAY',
        accessorKey: 'description',
    },
    {
        header: 'OBSERVED',
        accessorKey: 'observedDateFull',
    },
    {
        header: 'OFFICIAL',
        accessorKey: 'officialDateFull',
    }
];

export default HolidaysTableHeaders;
