import type { NextPage } from 'next';
import { Container, Col, Row, Spinner } from 'react-bootstrap';
import HolidaysTable from '../components/tables/holidays_table/HolidaysTable';
import useAxiosPromise from '../hooks/useAxiosPromise';

const Home: NextPage = () => {
    const { data, isLoading } = useAxiosPromise('holidays');

    return (!isLoading ? (
        <Container fluid>
            <Row>
                <Col xs={{ span: 10, offset: 1 }}>
                    <HolidaysTable data={data.data} />
                </Col>
            </Row>
        </Container>
    ) : <Spinner animation="border" />);
}

export default Home