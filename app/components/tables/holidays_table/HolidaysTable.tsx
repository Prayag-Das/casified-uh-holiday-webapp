import {HolidaysTableHeaders} from "@/components/tables/holidays_table/table_element/HolidaysTableHeaders";
import HolidaysTable from "@/components/tables/holidays_table/HolidaysTable";
import HolidaysTableData from "@/components/tables/holidays_table/table_element/HolidaysTableData";

type ColumnDefinitionType<T, K extends keyof T> = {

  /*
  T is a placeholder for the data object, which will be implemented when the other components are complete

  Trying to Implement the column headers in the HolidaysTable.tsx instead of calling it from a table_element component
  */
  key: K;
  header: string;
  width?: number;
}

type TableProps<T, K extends keyof T> = {
  data: Array<T>;
  columns: Array<ColumnDefinitionType<T, K>>;
}

const style = {
    borderCollapse: 'collapse'
} as const

const Table = <T, K extends keyof T>({ data, columns }: TableProps<T, K>): JSX.Element => {
    return (
        <table style={style}>
            <HolidaysTableHeaders columns={columns} />
            <HolidaysTableRows
                data={data}
                columns={columns}
            />
        </table>
    );
};

export default Table;