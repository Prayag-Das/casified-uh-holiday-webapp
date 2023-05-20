import HolidaysTable from "@/components/tables/holidays_table/HolidaysTable";
import { Container, Col, Row } from "react-bootstrap";
import holidaysData from '../public/data/holidaysData.json';
import {COLUMNS} from "@/components/tables/holidays_table/table_element/HolidaysTableColumns";
import useAxiosPromise from "../hooks/useAxiosPromise";

const Holidays = () => {

    //const tableData = holidaysData;
    const { data,  isLoading, error } = useAxiosPromise('holidays');
    const tableCol = COLUMNS;

    return (
        <Container fluid>
            <Row>
                <Col xs={{ span: 10, offset: 1 }}>
                    <h3>Holidays</h3>
                    <HolidaysTable data={data} columns={tableCol}/>
                </Col>
            </Row>
        </Container>
    );
}

export default Holidays;
