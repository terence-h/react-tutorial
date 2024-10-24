import Header from "@/app/components/Header";
import Hyperlink from "@/app/components/Hyperlink";
import Paragraph from "@/app/components/Paragraph";

export default function ExternalPackagesErrorBoundaries() {
    return (
        <article id="external-package">
            <Header>External Package (react-error-boundary)</Header>
            <Paragraph>External package like <Hyperlink href="https://www.npmjs.com/package/react-error-boundary">react-error-boundary</Hyperlink> makes it easy to implement error boundaries with more functionalities and customisations. However, it creates more dependencies to your project. Weigh in the pros and cons before using external packages.
                <br /><br />We won&apos;t be going through it but feel free to try it out.
            </Paragraph>

        </article>
    );
}