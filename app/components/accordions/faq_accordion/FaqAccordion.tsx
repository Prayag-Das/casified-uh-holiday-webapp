import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

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
            <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">General Questions</h3>
            <AccordionItem value="Who can answer some basic questions about the application?">
                <AccordionTrigger>Who can answer some basic questions about the application?</AccordionTrigger>
                <AccordionContent>
            Send an email to <a href={`mailto:${email}`}>ITS Web Developers.</a>
                </AccordionContent>
            </AccordionItem>

            <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">Resources</h3>
            <AccordionItem value="Can I get the source code for this project?">
                <AccordionTrigger>Can I get the source code for this project?</AccordionTrigger>
                <AccordionContent>
            Sure thing. It is available at this
                    <a href={githubRepo} target="_github_repo"> github repository.</a>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="Can I contribute coding modifications to this project?">
                <AccordionTrigger>Can I contribute coding modifications to this project?</AccordionTrigger>
                <AccordionContent>
            Yes! See the github repository mentioned above.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="How are the dates determined?">
                <AccordionTrigger>How are the dates determined?</AccordionTrigger>
                <AccordionContent>
            By state statute. <br/>
            You take this state document:
                    <a href={holidaysDesignated} target="_holidays_designated"> Holidays designated</a>,
            then combine it with this other state document:
                    <a href={observanceHolidays} target="_observance_holidays"> Observance of holidays</a>.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="Does the state produce a holiday list?">
                <AccordionTrigger>Does the state produce a holiday list?</AccordionTrigger>
                <AccordionContent>
            A: Yes, it does. See
                    <a href={stateObservedHolidays} target="_state_observed_holidays"> State Observed Holidays</a>.
                </AccordionContent>
            </AccordionItem>

            <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">Technologies</h3>
            <AccordionItem value="What did you use to create the site?">
                <AccordionTrigger>What did you use to create the site?</AccordionTrigger>
                <AccordionContent>
            Apache Maven <br/>
            Apache Tomcat <br/>
            Java 17 <br/>
            Spring Framework
                    <a href={springFrameworkGuide} target="_spring_framework_guide"> (Guide)</a>
                    <a href={springFrameworkAPI} target="_spring_framework_api"> (API)</a> <br/>
            Spring Boot
                    <a href={springBootGuide} target="_spring_boot_guide"> (Guide)</a> <br/>
            React.js <br/>
            Next.js <br/>
            Tailwind CSS <br/>
            shadcn/ui
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}

export default FaqAccordion;
