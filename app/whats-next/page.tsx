import Section from "@/app/components/Section";
import Pagination from "@/app/components/Pagination";
import Paragraph from "../components/Paragraph";
import Header from "../components/Header";

export default function Page() {
    return (
        <Section>
            <Header>What&apos;s Next?</Header>
            <Paragraph>This is guide is to help get you started to create a workable frontend web app. There are a lot more to React! Things like useReducer and useMemo hooks were not went through in this guide but may help you in further writing better codes and optimising your web app performance.
                <br /><br />Also, React is only just a front-end JavaScript library. There are React frameworks like Next.js and Redux that are more often than not used to develop apps instead of base React library.
            </Paragraph>
            <Pagination
                previousLabel="Case Study"
                previousPath="/case-study"
            />
        </Section>
    );
}