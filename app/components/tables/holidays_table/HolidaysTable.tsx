import holidaysData from "../../../public/data/holidaysData.json";
import * as React from "react";
import {useTable} from "react-table";
import {COLUMNS} from "@/components/tables/holidays_table/table_element/HolidaysTableColumns";
import {useMemo} from "react";
const HolidaysTable = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => holidaysData, [])
    useTable({
        columns: COLUMNS,
        data: holidaysData,
    })
    const tableInstance = useTable({
        columns,
        data,
    })
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance;

  return (
        <table {...getTableProps()}>
            <thead>
                {
                  {headerGroups.map(headerGroups => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) =>
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            )}
                        </tr>
                    ))}
                }
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map( cell => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
            <tfoot>
                <tr>
                    <th></th>
                </tr>
            </tfoot>
        </table>
    )

    /* These contents will be added to the HolidaysTableData in the future
    const [data, setData] = React.useState([])

    React.useEffect(() => {

        HolidaysTableData().then(res => {
            setData(res.data)
        })
    },[])

    return (
        <div>
            <pre>
                <code> {JSON.stringify(data, null, 2)} </code>
            </pre>
        </div>
    )
    
   */
}

export default HolidaysTable;