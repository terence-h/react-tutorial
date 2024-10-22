import Header from "@/app/components/Header";
import Paragraph from "@/app/components/Paragraph";

export default function IntroductionCustomHooks() {
    return (
        <article id="introduction">
            <Header>Introduction to Custom Hooks</Header>
            <Paragraph>Custom Hooks are simply just JavaScript functions that names typically start with &quot;use&quot; (e.g, useCustomHook). Similarly, in React, we went through the usage of 3 built-in hooks (useState, useEffect and useContext). What a custom hook allows you to do in React is to extract out a component logic into reusable pieces to be used in any components.</Paragraph>
        </article>
    );
}