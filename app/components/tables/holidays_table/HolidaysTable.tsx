import React from 'react';
//import './table_element/table.css'

interface Column {
  header: string;
  accessor: string;
}

interface TableProps {
  data: any[];
  columns: Column[];
}

const HolidaysTable: React.FC<TableProps> = ({ data, columns }) => {
    return (
        <table>
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
                            <td key={columnIndex}>{row[column.accessor]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default HolidaysTable;