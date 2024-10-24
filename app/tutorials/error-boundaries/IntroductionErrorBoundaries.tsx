import Header from "@/app/components/Header";
import Paragraph from "@/app/components/Paragraph";

export default function IntroductionErrorBoundaries() {
    return (
        <article id="introduction">
            <Header>Introduction to Error Boundaries</Header>
            <Paragraph>Have you noticed so far that every time a critical error occurs, the entire web app crashes (if you are using VSCode)? It seems dangerous as certain components may not be critical but still crashes the entire web app.
                <br /><br />In React, Error Boundaries are classes that help catch and handle JavaScript errors in the component tree. These boundaries are particularly useful for preventing crashes in your application, providing fallback UI in case of unexpected errors.
            </Paragraph>
        </article>
    );
}