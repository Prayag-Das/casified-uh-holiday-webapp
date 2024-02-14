/*
import { Accordion, AccordionControl, AccordionItem, AccordionPanel, Text } from '@mantine/core';

const FaqAccordion = () => {
    // General Questions
    const email = 'duckart@hawaii.edu';

    // Resources
    const githubRepo = 'https://github.com/uhawaii-system-its-ti-iam/casified-uh-holiday-webapp';
    const holidaysDesignated = 'https://www.capitol.hawaii.gov/hrscurrent/Vol01_Ch0001-0042F/HRS0008/HRS_0008-0001.htm';
    const observanceHolidays = 'https://www.capitol.hawaii.gov/hrscurrent/Vol01_Ch0001-0042F/HRS0008/HRS_0008-0002.htm';
    const stateObservedHolidays = 'http://dhrd.hawaii.gov/state-observed-holidays/';
    
    // Technologies
    const springFrameworkGuide = 'https://docs.spring.io/spring-framework/docs/5.3.14/reference/html/';
    const springFrameworkAPI = 'https://docs.spring.io/spring-framework/docs/5.3.14/javadoc-api/';
    const springBootGuide = 'https://docs.spring.io/spring-boot/docs/2.6.2/reference/htmlsingle/';

    return ( 
        <Accordion variant="separated" data-testid="faq-accordion">
            <Text fw={700} pb={10}>General Questions</Text>
            <AccordionItem value="Who can answer some basic questions about the application?">
                <AccordionControl>Who can answer some basic questions about the application?</AccordionControl>
                <AccordionPanel>
                    Send an email to <a href={`mailto:${email}`}>ITS Web Developers.</a>
                </AccordionPanel>
            </AccordionItem>

            <Text fw={700} pt={25} pb={10}>Resources</Text>
            <AccordionItem value="Can I get the source code for this project?">
                <AccordionControl>Can I get the source code for this project?</AccordionControl>
                <AccordionPanel>
                    Sure thing. It is available at this 
                    <a href={githubRepo} target="_github_repo"> github repository.</a>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="Can I contribute coding modifications to this project?">
                <AccordionControl>Can I contribute coding modifications to this project?</AccordionControl>
                <AccordionPanel>
                    Yes! See the github repository mentioned above.
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="How are the dates determined?">
                <AccordionControl>How are the dates determined?</AccordionControl>
                <AccordionPanel>
                    By state statute. <br/>
                    You take this state document: 
                    <a href={holidaysDesignated} target="_holidays_designated"> Holidays designated</a>,
                    then combine it with this other state document: 
                    <a href={observanceHolidays} target="_observance_holidays"> Observance of holidays</a>.
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="Does the state produce a holiday list?">
                <AccordionControl>Does the state produce a holiday list?</AccordionControl>
                <AccordionPanel>
                    A: Yes, it does. See 
                    <a href={stateObservedHolidays} target="_state_observed_holidays"> State Observed Holidays</a>.
                </AccordionPanel>
            </AccordionItem>

            <Text fw={700} pt={25} pb={10}>Technologies</Text>
            <AccordionItem value="What did you use to create the site?">
                <AccordionControl>What did you use to create the site?</AccordionControl>
                <AccordionPanel>
                    Apache Maven <br/>
                    Apache Tomcat <br/>
                    Java 17 <br/>
                    Spring Framework
                    <a href={springFrameworkGuide} target="_spring_framework_guide"> (Guide)</a>
                    <a href={springFrameworkAPI} target="_spring_framework_api"> (API)</a> <br/>
                    Spring Boot 
                    <a href={springBootGuide} target="_spring_boot_guide"> (Guide)</a> <br/>
                    React.js <br/>
                    Next.js <br />
                    Tailwind CSS <br />
                    Mantine
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
}

export default FaqAccordion;
*/

const FaqAccordion = () => {
    // General Questions
    const email = 'duckart@hawaii.edu';

    // Resources
    const githubRepo = 'https://github.com/uhawaii-system-its-ti-iam/casified-uh-holiday-webapp';
    const holidaysDesignated = 'https://www.capitol.hawaii.gov/hrscurrent/Vol01_Ch0001-0042F/HRS0008/HRS_0008-0001.htm';
    const observanceHolidays = 'https://www.capitol.hawaii.gov/hrscurrent/Vol01_Ch0001-0042F/HRS0008/HRS_0008-0002.htm';
    const stateObservedHolidays = 'http://dhrd.hawaii.gov/state-observed-holidays/';

    // Technologies
    const springFrameworkGuide = 'https://docs.spring.io/spring-framework/docs/5.3.14/reference/html/';
    const springFrameworkAPI = 'https://docs.spring.io/spring-framework/docs/5.3.14/javadoc-api/';
    const springBootGuide = 'https://docs.spring.io/spring-boot/docs/2.6.2/reference/htmlsingle/';

    return (
        <div className="accordion" data-testid="faq-accordion">
            <div className="pb-10 font-bold">General Questions</div>
            <div className="accordion-item">
                <input type="checkbox" id="faq-item-1" className="accordion-control" />
                <label htmlFor="faq-item-1" 
                    className="accordion-control-label bg-gray-200 hover:bg-gray-300 p-4 rounded-md cursor-pointer">
          Who can answer some basic questions about the application?
                </label>
                <div className="accordion-panel p-4">
          Send an email to <a href={`mailto:${email}`} className="text-blue-500">ITS Web Developers.</a>
                </div>
            </div>

            <div className="pt-25 pb-10 font-bold">Resources</div>
            <div className="accordion-item">
                <input type="checkbox" id="faq-item-2" className="accordion-control" />
                <label htmlFor="faq-item-2" 
                    className="accordion-control-label bg-gray-200 hover:bg-gray-300 p-4 rounded-md cursor-pointer">
          Can I get the source code for this project?
                </label>
                <div className="accordion-panel p-4">
          Sure thing. It is available at this <a href={githubRepo} 
                        target="_github_repo" className="text-blue-500">github repository.</a>
                </div>
            </div>
            <div className="accordion-item">
                <input type="checkbox" id="faq-item-3" className="accordion-control" />
                <label htmlFor="faq-item-3" 
                    className="accordion-control-label bg-gray-200 hover:bg-gray-300 p-4 rounded-md cursor-pointer">
          Can I contribute coding modifications to this project?
                </label>
                <div className="accordion-panel p-4">
          Yes! See the github repository mentioned above.
                </div>
            </div>
            <div className="accordion-item">
                <input type="checkbox" id="faq-item-4" className="accordion-control" />
                <label htmlFor="faq-item-4" 
                    className="accordion-control-label bg-gray-200 hover:bg-gray-300 p-4 rounded-md cursor-pointer">
          How are the dates determined?
                </label>
                <div className="accordion-panel p-4">
          By state statute. <br />
          You take this state document: <a href={holidaysDesignated} 
                        target="_holidays_designated" className="text-blue-500">Holidays designated</a>,
          then combine it with this other state document: <a href={observanceHolidays} 
                        target="_observance_holidays" className="text-blue-500">Observance of holidays</a>.
                </div>
            </div>
            <div className="accordion-item">
                <input type="checkbox" id="faq-item-5" className="accordion-control" />
                <label htmlFor="faq-item-5" 
                    className="accordion-control-label bg-gray-200 hover:bg-gray-300 p-4 rounded-md cursor-pointer">
          Does the state produce a holiday list?
                </label>
                <div className="accordion-panel p-4">
          A: Yes, it does. See <a href={stateObservedHolidays} 
                        target="_state_observed_holidays" className="text-blue-500">State Observed Holidays</a>.
                </div>
            </div>

            <div className="pt-25 pb-10 font-bold">Technologies</div>
            <div className="accordion-item">
                <input type="checkbox" id="faq-item-6" className="accordion-control" />
                <label htmlFor="faq-item-6" 
                    className="accordion-control-label bg-gray-200 hover:bg-gray-300 p-4 rounded-md cursor-pointer">
          What did you use to create the site?
                </label>
                <div className="accordion-panel p-4">
          Apache Maven <br />
          Apache Tomcat <br />
          Java 17 <br />
          Spring Framework <a href={springFrameworkGuide} 
                        target="_spring_framework_guide" 
                        className="text-blue-500">(Guide)</a> 
                    <a href={springFrameworkAPI} target="_spring_framework_api" 
                        className="text-blue-500">(API)</a> <br />
          Spring Boot <a href={springBootGuide} target="_spring_boot_guide" className="text-blue-500">(Guide)</a> <br />
          React.js <br />
          Next.js <br />
          Tailwind CSS <br />
          shadcn/ui
                </div>
            </div>
        </div>
    );
}

export default FaqAccordion;
