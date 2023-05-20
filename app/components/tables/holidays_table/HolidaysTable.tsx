import React from 'react';

interface Column {
  header: string;
  accessor: string;
}

interface Holiday {
  description: string;
  types: any[];
  closest: boolean;
  year: number;
  holidayTypes: string[];
  officialYear: string;
  observedDateFull: string;
  officialDateFull: string;
  observedDate: string;
  officialDate: string;
}
interface TableProps {
  data: Holiday[];
  columns: Column[];
}

const HolidaysTable: React.FC<TableProps> = ({ data, columns }) => {
    
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th key={index}>{column.header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map((column, columnIndex) => (
                            <td key={columnIndex}>{row[column.accessor as keyof Holiday]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default HolidaysTable;