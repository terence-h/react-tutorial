import Header from "@/app/components/Header";
import Paragraph from "@/app/components/Paragraph";

export default function LimitationsErrorBoundaries() {
    return (
        <article id="limitations">
            <Header>Limitations of Error Boundaries</Header>
            <Paragraph>Error boundaries catch errors during rendering, lifecycle methods, and constructors of the whole tree below them. They do not catch errors inside event handlers, asynchronous code (e.g., setTimeout), or errors thrown in the error boundary itself.</Paragraph>
        </article>
    );
}