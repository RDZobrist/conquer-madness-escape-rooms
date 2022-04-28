import { Container, Section } from '../../globalStyles';
import {faqs} from '../../data/FAQsData';
import ExpandedDiv from '../../components/ExpandedDiv/ExpandedDiv.component';
import { Heading } from '../../globalStyles';
const FAQScreen = () => {
    return (
        <Container>
            <Section inverse reverse>
            <Heading inverse>Frequently Asked Questions</Heading>
            <div>
                {faqs.map((faq)=>{
                    return(
                        <ExpandedDiv {...faq} />
                    )
                })}
            </div>
            </Section>
        


        </Container>
    )
};
export default FAQScreen;