import HolidaysTable from "@/components/tables/holidays_table/HolidaysTable";
import { Container, Col, Row } from "react-bootstrap";
import holidaysData from '../public/data/holidaysData.json';
import {HolidaysTableData} from "@/components/tables/holidays_table/table_element/HolidaysTableData";
import {COLUMNS} from "@/components/tables/holidays_table/table_element/HolidaysTableColumns";

const Holidays = () => {

    const tableData = holidaysData;
    //const tableData = HolidaysTableData();
    const tableCol = COLUMNS;

    return (
        <Container fluid>
            <Row>
                <Col xs={{ span: 10, offset: 1 }}>
                    <h3>Holidays</h3>
                    <HolidaysTable data={tableData} columns={tableCol}/>
                </Col>
            </Row>
        </Container>
    );
}

export default Holidays;
