interface SubCategory {
    id: number;
    name: string;
    link: string; // Optional: URL or route path
}

interface Category {
    id: number;
    name: string;
    subCategories: SubCategory[]; // Optional: Some categories may not have subcategories
}

const pages: Category[] = [
    {
        id: 1,
        name: "Introduction",
        subCategories: [
            { id: 11, name: "Learning Outcomes", link: "/content/introduction#learning-outcomes" },
            { id: 12, name: "Learning Plan", link: "/content/introduction#learning-plan" },
        ]
    },
    {
        id: 2,
        name: "Introduction to TypeScript",
        subCategories: [
            { id: 21, name: "Key Differences", link: "" },
            { id: 22, name: "Advantages over JavaScript", link: "" },
        ]
    },
];

export default pages;