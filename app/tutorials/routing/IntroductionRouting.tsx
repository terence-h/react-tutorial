import Header from "@/app/components/Header";
import InformationText from "@/app/components/InformationText";
import Paragraph from "@/app/components/Paragraph";

export default function IntroductionRouting() {
    return (
        <article id="introduction">
            <Header>Introduction to Routing in React</Header>
            <InformationText><Paragraph>It is highly recommended that you use VSCode and a local React project to follow through this section.
                <br />The limitations of working with the built-in code editor will not allow you to try out the routing.</Paragraph>
            </InformationText>
            <Paragraph className="mt-5">So far, the sample React project created is only done in the main page. Almost all websites have different pages for different content. For this tutorial, we will be using the standard library “react-router-dom” to handle the routing.</Paragraph>
        </article>
    );
}