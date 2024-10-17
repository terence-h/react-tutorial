import Header from "@/app/components/Header";
import Paragraph from "@/app/components/Paragraph";
import Table, { TableRow } from "@/app/components/Table";

export default function TSWhenToUse() {
    return (
        <>
            <Header level={2}>When to use JavaScript or TypeScript</Header>
            <Paragraph>This is only a general guideline/recommendation and not to be followed strictly.</Paragraph>
            <Table headers={headers} data={data} />
        </>
    );
}

const headers = ['Consideration', 'Use JavaScript', 'Use TypeScript'];

const data: TableRow[] = [
    { 'Consideration': 'Project Size', 'Use JavaScript': 'Small or simple projects', 'Use TypeScript': 'Large or complex projects' },
    { 'Consideration': 'Team Size', 'Use JavaScript': 'Small team or solo development', 'Use TypeScript': 'Large team with multiple developers' },
    { 'Consideration': 'Maintainability', 'Use JavaScript': 'Short-term/one-off project', 'Use TypeScript': 'Long-term maintainability' },
    { 'Consideration': 'Development Speed', 'Use JavaScript': 'Fast prototyping/MVPs', 'Use TypeScript': 'Long-term maintainability is more important' },
    { 'Consideration': 'Codebase Scale', 'Use JavaScript': 'Minimal or less structured', 'Use TypeScript': 'Highly structured and scalable' },
];