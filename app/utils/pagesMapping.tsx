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
            { id: 21, name: "Learning Outcomes", link: "/content/introduction#learning-outcomes" },
            { id: 22, name: "Learning Plan", link: "/content/introduction#learning-plan" },
            { id: 23, name: "Pre-Requisites", link: "/content/introduction#prerequisites" },
        ]
    },
    {
        id: 3,
        name: "Introduction to TypeScript",
        subCategories: [
            { id: 31, name: "What is TypeScript?", link: "/content/introduction-to-typescript#ts-introduction" },
            { id: 32, name: "Key Differences", link: "/content/introduction-to-typescript#ts-key-differences" },
            { id: 33, name: "Advantages over JavaScript", link: "/content/introduction-to-typescript#ts-advantages" },
        ]
    },
];

export default pages;