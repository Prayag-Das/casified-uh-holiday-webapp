import HolidaysTableData from "@/components/tables/holidays_table/table_element/HolidaysTableData";
import * as React from "react";

//These contents will be added to the HolidaysTableData in the

const HolidaysTable = () => {
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
}

export default HolidaysTable;