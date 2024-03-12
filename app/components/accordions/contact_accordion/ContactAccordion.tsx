'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const ContactAccordion = () => {
    const email = 'duckart@hawaii.edu';
    const itsOffice = 'www.hawaii.edu/its';

    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="For General Help/How-To Questions">
                <AccordionTrigger>For General Help/How-To Questions</AccordionTrigger>
                <AccordionContent>
                    Send email: <a href={`mailto:${email}`}>{email}</a>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="Reporting Technical Issues/Problems">
                <AccordionTrigger>Reporting Technical Issues/Problems</AccordionTrigger>
                <AccordionContent>
                    Send email: <a href={`mailto:${email}`}>{email}</a>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="Information Technology Services">
                <AccordionTrigger>Information Technology Services</AccordionTrigger>
                <AccordionContent>
                    See: <a href={`http://${itsOffice}`} target="_its_office">{itsOffice}</a>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}
 
export default ContactAccordion;
