/*
import ContactAccordion from '@/components/accordions/contact_accordion/ContactAccordion';
import { Container, Stack } from '@mantine/core';

const ContactPage = () => {
    return ( 
        <Container>
            <Stack>
                <h1>Contact Us</h1>
                <ContactAccordion />
            </Stack>
        </Container>
    );
}

export default ContactPage;


*/

import ContactAccordion from '@/components/accordions/contact_accordion/ContactAccordion';
import { Container, Col, Row } from 'react-bootstrap';

const ContactPage = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs={{ span: 10, offset: 1 }}>
                    <h1>Contact Us</h1>
                    <ContactAccordion />
                </Col>
            </Row>
        </Container>
    );
}

export default ContactPage;