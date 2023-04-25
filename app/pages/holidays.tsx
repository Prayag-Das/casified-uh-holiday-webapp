import HolidaysTable from "@/components/tables/holidays_table/HolidaysTable";
import { Container, Col, Row } from "react-bootstrap";

const Contact = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs={{ span: 10, offset: 1 }}>
                    <HolidaysTable/>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;
