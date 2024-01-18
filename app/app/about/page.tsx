<<<<<<< HEAD
import FaqTable from '@/components/tables/faq_table/FaqTable';
import { Container, Col, Row } from 'react-bootstrap';

const AboutPage = () => {
    return ( 
        <Container fluid>
            <Row>
                <Col xs={{ span: 10, offset: 1 }}>
                    <h3>Frequently Asked Questions</h3>
                    <FaqTable />
                </Col>
            </Row>
=======
import FaqAccordion from '@/components/accordions/faq_accordion/FaqAccordion';
import { Container, Stack } from '@mantine/core';

const AboutPage = () => {
    return ( 
        <Container>
            <Stack>
                <h1>Frequently Asked Questions</h1>
                <FaqAccordion />
            </Stack> 
>>>>>>> main
        </Container>
    );
}

export default AboutPage;
