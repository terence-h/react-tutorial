import Header from "@/app/components/Header";
import Table, { TableRow } from "@/app/components/Table";

export default function LearningPlan() {
    return (
        <article id="learning-plan">
            <Header>Learning Plan</Header>
            <Table className={`min-w-[90%] mx-auto`} headers={headers} data={data} />
        </article>
    );
}

const headers = ['No.', 'Tutorial', 'Estimated Duration'];

const data: TableRow[] = [
    { 'No.': 1, 'Tutorial': 'Introduction to TypeScript', 'Estimated Duration': '1.5 hours' },
    { 'No.': 2, 'Tutorial': 'Setting Up Tools and React Project Environment', 'Estimated Duration': '1.5 hours' },
    { 'No.': 3, 'Tutorial': 'Starting with React', 'Estimated Duration': '2 hours' },
    { 'No.': 4, 'Tutorial': 'Building Functional Component', 'Estimated Duration': '4 hours' },
    { 'No.': 5, 'Tutorial': 'Handling User Events', 'Estimated Duration': '2 hours' },
    { 'No.': 6, 'Tutorial': 'Managing States with useState', 'Estimated Duration': '6 hours' },
    { 'No.': 7, 'Tutorial': 'Rendering Conditionally and Dynamic Content', 'Estimated Duration': '1.5 hours' },
    { 'No.': 8, 'Tutorial': 'Side Effects with useEffect', 'Estimated Duration': '2 hours' },
    { 'No.': 9, 'Tutorial': 'Managing Complex States with Context API', 'Estimated Duration': '2 hours' },
    { 'No.': 10, 'Tutorial': 'Building Reusable Custom Hooks', 'Estimated Duration': '-' },
    { 'No.': 11, 'Tutorial': 'Routing for Apps with Multiple Pages', 'Estimated Duration': '-' },
    { 'No.': 12, 'Tutorial': 'Dynamic Routes', 'Estimated Duration': '-' },
    { 'No.': 13, 'Tutorial': 'Error Boundaries', 'Estimated Duration': '-' },
    { 'No.': 14, 'Tutorial': 'Case Study', 'Estimated Duration': '5 days' },
];