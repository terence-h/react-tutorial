import Header from "@/app/components/Header";
import Table, { TableRow } from "@/app/components/Table";

export default function TSKeyDifferencesPage() {
    return (
        <article id="key-differences">
            <Header>Key Differences between JavaScript and TypeScript</Header>
            <Table headers={headers} data={data} />
        </article>
    );
}

const headers = ['Feature', 'JavaScript', 'TypeScript'];

const data: TableRow[] = [
    { 'Feature': 'Type System', 'JavaScript': 'Dynamic typing', 'TypeScript': 'Static typing' },
    { 'Feature': 'Error Detection', 'JavaScript': 'Caught at runtime', 'TypeScript': 'Caught at compile time' },
    { 'Feature': 'Type Inference', 'JavaScript': 'No type inference', 'TypeScript': 'Supports type inference' },
    { 'Feature': 'Editor Support', 'JavaScript': 'Basic autocompletion and error checking', 'TypeScript': 'Advanced autocompletion, and real-time type checking' },
    { 'Feature': 'Flexibility', 'JavaScript': 'More flexible due to dynamic typing', 'TypeScript': 'Rigid due to static typing' },
    { 'Feature': 'Maintainability', 'JavaScript': 'Requires discipline to maintain', 'TypeScript': 'TypeScript static typing and compile-time error detection improves code maintainability' },
    { 'Feature': 'Learning Curve', 'JavaScript': 'Easy', 'TypeScript': 'Easy-Intermediate' },
    { 'Feature': 'Use Cases', 'JavaScript': 'Small-scale projects/Individual projects', 'TypeScript': 'Large-scale projects/team projects' },
];