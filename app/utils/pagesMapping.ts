interface SubCategory {
    id: number;
    name: string;
    link: string;
}

interface Category {
    id: number;
    name: string;
    subCategories?: SubCategory[];
    link?: string;
}

const pages: Category[] = [
    {
        id: 1,
        name: "Home",
        link: "/"
    },
    {
        id: 2,
        name: "Introduction",
        subCategories: [
            { id: 21, name: "Learning Outcomes", link: "/tutorials/introduction#learning-outcomes" },
            { id: 22, name: "Learning Plan", link: "/tutorials/introduction#learning-plan" },
            { id: 23, name: "Pre-Requisites", link: "/tutorials/introduction#prerequisites" },
        ]
    },
    {
        id: 3,
        name: "Introduction to TypeScript",
        subCategories: [
            { id: 31, name: "What is TypeScript?", link: "/tutorials/introduction-to-typescript#introduction" },
            { id: 32, name: "Key Differences", link: "/tutorials/introduction-to-typescript#key-differences" },
            { id: 33, name: "Advantages over JavaScript", link: "/tutorials/introduction-to-typescript#advantages" },
            { id: 34, name: "When to use JavaScript or TypeScript", link: "/tutorials/introduction-to-typescript#when-to-use" },
            { id: 35, name: "Learn More", link: "/tutorials/introduction-to-typescript#learn-more" },
            { id: 36, name: "Practice: Writing TypeScript", link: "/practices/writing-typescript" },
        ]
    },
    {
        id: 4,
        name: "Setting Up Tools and React Project Environments",
        subCategories: [
            { id: 41, name: "Download Tools", link: "/tutorials/setting-up#download-tools" },
            { id: 42, name: "Setting Up NVM", link: "/tutorials/setting-up#setting-up-nvm" },
            { id: 43, name: "Create your first React App", link: "/tutorials/setting-up#create-react-app" },
        ]
    },
    {
        id: 5,
        name: "Starting with React",
        subCategories: [
            { id: 51, name: "Break Everything Down into Components", link: "/tutorials/starting-with-react#key-pointer-one" },
            { id: 52, name: `Components "Talk" to Each Other with Props`, link: "/tutorials/starting-with-react#key-pointer-two" },
            { id: 53, name: "Managing State for Dynamic Data", link: "/tutorials/starting-with-react#key-pointer-three" },
            { id: 54, name: "Think About Reusability", link: "/tutorials/starting-with-react#key-pointer-four" },
            { id: 55, name: "Let React Handle the UI Updates", link: "/tutorials/starting-with-react#key-pointer-five" },
        ]
    },
    {
        id: 6,
        name: "Building Functional Components",
        subCategories: [
            { id: 61, name: "Adding a Header and Paragraph", link: "/tutorials/building-functional-components#adding-header-paragraph" },
            { id: 62, name: "Breaking into Separate Components", link: "/tutorials/building-functional-components#breaking-separate-components" },
            { id: 63, name: "Passing Props to Components", link: "/tutorials/building-functional-components#passing-props" },
            { id: 64, name: "Creating Variants of a Component", link: "/tutorials/building-functional-components#creating-variants" },
            { id: 65, name: "Practice: Building Functional Components", link: "/practices/building-functional-components" },
        ]
    },
    {
        id: 7,
        name: "Handling User Events",
        subCategories: [
            { id: 71, name: "Adding onClick Handler to Buttons", link: "/tutorials/handling-user-events#adding-onclick" },
            { id: 72, name: "Practice: Handling User Events", link: "/practices/handling-user-events" },
        ]
    },
    {
        id: 8,
        name: "Managing States with useState",
        subCategories: [
            { id: 81, name: "Introduction to useState", link: "/tutorials/managing-states#introduction" },
            { id: 82, name: "Creating State", link: "/tutorials/managing-states#creating-a-state" },
            { id: 83, name: "Individual & Shared States", link: "/tutorials/managing-states#individual-shared-states" },
            { id: 84, name: "Working with Forms", link: "/tutorials/managing-states#working-with-forms" },
            { id: 85, name: "Practice: Managing States with useState", link: "/practices/managing-states" },
        ]
    },
    {
        id: 9,
        name: "Rendering Conditionally and Dynamic Content",
        subCategories: [
            { id: 91, name: "Conditional Rendering", link: "/tutorials/rendering-conditionally-dynamic#conditional-rendering" },
            { id: 92, name: "Rendering Dynamic Content", link: "/tutorials/rendering-conditionally-dynamic#rendering-dynamic-content" },
            { id: 93, name: "Practice: Rendering Conditionally and Dynamic Content", link: "/practices/rendering-conditionally-dynamic" },
        ]
    },
    {
        id: 10,
        name: "Side Effects with useEffect",
        subCategories: [
            { id: 101, name: "Introduction to useEffect", link: "/tutorials/side-effects#introduction" },
            { id: 102, name: "Implementations of useEffect", link: "/tutorials/side-effects#implementations" },
            { id: 103, name: "Practice: Side Effects with useEffect", link: "/practices/side-effects" },
        ]
    },
    {
        id: 11,
        name: "Managing Complex States with Context API",
        subCategories: [
            { id: 111, name: "Introduction to Context API", link: "/tutorials/managing-complex-states#introduction" },
            { id: 112, name: "Create a Dark Mode Context Provider", link: "/tutorials/managing-complex-states#create-dark-mode-context" },
            { id: 113, name: "Practice: Managing Complex States with Context API", link: "/practices/managing-complex-states" },
        ]
    },
    {
        id: 12,
        name: "Building Reusable Custom Hooks",
        subCategories: [
            { id: 121, name: "Introduction to Custom Hooks", link: "/tutorials/building-reusable-custom-hooks#introduction" },
            { id: 122, name: "Differences between Context API and Custom Hooks", link: "/tutorials/building-reusable-custom-hooks#differences" },
            { id: 123, name: "Use Cases of Custom Hooks", link: "/tutorials/building-reusable-custom-hooks#use-cases" },
            { id: 124, name: "Creating a Hook to Toggle True/False", link: "/tutorials/building-reusable-custom-hooks#creating-a-hook" },
            { id: 125, name: "Practice: Building Reusable Custom Hooks", link: "/practices/building-reusable-custom-hooks" },
        ]
    },
    {
        id: 13,
        name: "Routing for Apps with Multiple Pages",
        subCategories: [
            { id: 131, name: "Introduction to Routing in React", link: "/tutorials/routing" },
            { id: 132, name: "What is react-router-dom?", link: "/tutorials/routing#react-router-dom" },
            { id: 133, name: "Creating Simple Routes", link: "/tutorials/routing#creating-simple-routes" },
            { id: 134, name: "Creating Dynamic Routes", link: "/tutorials/routing#creating-dynamic-routes" },
            { id: 135, name: "Handling 404 Pages", link: "/tutorials/routing#handling-404-pages" },
        ]
    },
];

export default pages;