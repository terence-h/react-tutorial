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
            { id: 11, name: "Learning Outcomes", link: "/content/introduction#learning-outcomes" },
            { id: 12, name: "Learning Plan", link: "/content/introduction#learning-plan" },
            { id: 13, name: "Pre-Requisites", link: "/content/introduction#prerequisites" },
        ]
    },
    {
        id: 3,
        name: "Introduction to TypeScript",
        subCategories: [
            { id: 21, name: "Key Differences", link: "/content/introduction-to-typescript#keydifferences" },
            { id: 22, name: "Advantages over JavaScript", link: "/content/introduction-to-typescript#advantages" },
        ]
    },
];

export default pages;