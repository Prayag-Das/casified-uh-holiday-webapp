/*
import { Accordion, AccordionControl, AccordionItem, AccordionPanel } from '@mantine/core';

const ContactAccordion = () => {
    const email = 'duckart@hawaii.edu';
    const itsOffice = 'www.hawaii.edu/its';

    return (
        <Accordion data-testid="contact-accordion">
            <AccordionItem value="For General Help/How-To Questions">
                <AccordionControl>For General Help/How-To Questions</AccordionControl>
                <AccordionPanel>
                    Send email: <a href={`mailto:${email}`}>{email}</a>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="Reporting Technical Issues/Problems">
                <AccordionControl>Reporting Technical Issues/Problems</AccordionControl>
                <AccordionPanel>
                    Send email: <a href={`mailto:${email}`}>{email}</a>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="Information Technology Services">
                <AccordionControl>Information Technology Services</AccordionControl>
                <AccordionPanel>
                    See: <a href={`http://${itsOffice}`} target="_its_office">{itsOffice}</a>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
}
 
export default ContactAccordion;
*/

const ContactAccordion = () => {
    const email = 'duckart@hawaii.edu';
    const itsOffice = 'www.hawaii.edu/its';

    return (
        <div className="accordion" data-testid="contact-accordion">
            <div className="accordion-item">
                <input type="checkbox" id="accordion-item-1" className="accordion-control" />
                <label htmlFor="accordion-item-1" 
                    className="accordion-control-label bg-gray-200 hover:bg-gray-300 p-4 rounded-md cursor-pointer">
          For General Help/How-To Questions
                </label>
                <div className="accordion-panel p-4">
          Send email: <a href={`mailto:${email}`} className="text-blue-500">{email}</a>
                </div>
            </div>
            <div className="accordion-item">
                <input type="checkbox" id="accordion-item-2" className="accordion-control" />
                <label htmlFor="accordion-item-2" 
                    className="accordion-control-label bg-gray-200 hover:bg-gray-300 p-4 rounded-md cursor-pointer">
          Reporting Technical Issues/Problems
                </label>
                <div className="accordion-panel p-4">
          Send email: <a href={`mailto:${email}`} className="text-blue-500">{email}</a>
                </div>
            </div>
            <div className="accordion-item">
                <input type="checkbox" id="accordion-item-3" className="accordion-control" />
                <label htmlFor="accordion-item-3" 
                    className="accordion-control-label bg-gray-200 hover:bg-gray-300 p-4 rounded-md cursor-pointer">
          Information Technology Services
                </label>
                <div className="accordion-panel p-4">
          See: <a href={`http://${itsOffice}`} target="_its_office" className="text-blue-500">{itsOffice}</a>
                </div>
            </div>
        </div>
    );
}

export default ContactAccordion;
