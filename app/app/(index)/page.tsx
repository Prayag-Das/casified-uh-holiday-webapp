import type { NextPage } from 'next';
import { Container, Col, Row, /*Spinner*/ } from 'react-bootstrap';
import HolidaysTable from "@/components/tables/holidays_table/HolidaysTable";
import axios from '../../hooks/axiosConfig';
//import useAxiosPromise from '@/hooks/useAxiosPromise';

const Home: NextPage = async () => {
    const { data } = await axios.get(process.env.NEXT_PUBLIC_BASE_URL + 'holidays');

    return (
        <Container fluid>
            <Row>
                <Col xs={{ span: 10, offset: 1 }}>
                    {/*{isLoading ? (
                        <Spinner animation="border" />
                    ) : (*/}
                    <HolidaysTable data={data ? data.data : null} />
                    {/*)}*/}
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
