import Section from "@/app/components/Section";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import InformationText from "../components/InformationText";
import Pagination from "../components/Pagination";

export default function Page() {
    return (
        <Section>
            <Header>Case Study</Header>
            <InformationText><Paragraph>Before you proceed with the case study, it is advised to revise what you have learn so far in the tutorials. The case study will require you to implement most of the topics covered in the tutorials.</Paragraph></InformationText>
            <Paragraph className="mt-5">In the root of this project, you should find a folder &quot;Case Study&quot;. Inside it, a PDF file named &quot;case-study.pdf&quot; will include the specifcations of the case study. Read through the specifcations and develop a project in your local environment.
                <br /><br />A sample project of the case study has been provided for your reference in the &quot;Case Study&quot; folder. You are not required to follow the styling 1-to-1 but it is still recommendeded to adhere to good UIUX practices.
                </Paragraph>
            <Pagination
                previousLabel="Error Boundaries"
                previousPath="/tutorials/error-boundaries"
                nextPath="/whats-next"
                nextLabel="What's Next?" />
        </Section>
    );
}