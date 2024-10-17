import Header from "@/app/components/Header";
import Paragraph from "@/app/components/Paragraph";
import ImageContainer from '@/app/components/ImageContainer';
import jsAdvStaticType1 from '../../../public/content/introduction-to-typescript/js-advantage-static-typing-1.jpg';
import tsAdvStaticType1 from '../../../public/content/introduction-to-typescript/ts-advantage-static-typing-1.jpg';
import tsAdvStaticType2 from '../../../public/content/introduction-to-typescript/ts-advantage-static-typing-2.jpg';
import jsAdvStaticTypeFunc1 from '../../../public/content/introduction-to-typescript/js-advantage-static-typing-func-1.jpg';
import tsAdvStaticTypeFunc1 from '../../../public/content/introduction-to-typescript/ts-advantage-static-typing-func-1.jpg';
import tsAdvStaticTypeFunc2 from '../../../public/content/introduction-to-typescript/ts-advantage-static-typing-func-2.jpg';

export default function TSAdvantagesPage() {
    return (
        <article id="ts-advantages">
            <Header>Advantages of TypeScript</Header>
            <Header level={2}>1. Static Typing, Type Inference, and Compile Time Error Detection</Header>
            <Paragraph>In TypeScript, you can define the type of a variable, function parameter, or function return value at compile time. This helps catch errors early before the code runs.</Paragraph>
            <Paragraph>Notice that in the TypeScript code, it highlights an error in red underline. TypeScript supports type inference. This means TypeScript recognises &quot;iAmANumber&quot; is of type number and throws an error when assigning a non-number to it during compile time.</Paragraph>
            <div className="mx-auto max-w-[90%] flex flex-col md:flex-row">
                <div className="md:hidden">JavaScript</div>
                <ImageContainer src={jsAdvStaticType1} className={`md:w-1/2`} alt='JS Code' />
                <div className="md:hidden">TypeScript</div>
                <ImageContainer src={tsAdvStaticType1} className={`md:w-1/2`} alt='JS Code' />
            </div>
            <div className="mx-auto max-w-[90%] flex flex-col md:flex-row md:justify-end mb-10">
                <ImageContainer src={tsAdvStaticType2} className={`md:w-1/2`} alt='JS Code' />
            </div>
            <Paragraph>Here&apos;s another example but with function parameters this time. Notice the &quot;: number&quot; and &quot;: string&quot; beside the parameters/variables? TypeScript supports static typing which allows you to assign a type.</Paragraph>
            <Paragraph>Similarly, the TypeScript version highlights an error in red underline. The Add function is expecting 2 number parameters but received 1 number and 1 string.</Paragraph>
            <div className="mx-auto max-w-[90%] flex flex-col md:flex-row">
                <div className="md:hidden">JavaScript</div>
                <ImageContainer src={jsAdvStaticTypeFunc1} className={`md:w-1/2`} alt='JS Code' />
                <div className="md:hidden">TypeScript</div>
                <ImageContainer src={tsAdvStaticTypeFunc1} className={`md:w-1/2`} alt='JS Code' />
            </div>
            <div className="mx-auto max-w-[90%] flex flex-col md:flex-row md:justify-end">
                <ImageContainer src={tsAdvStaticTypeFunc2} className={`md:w-1/2`} alt='JS Code' />
            </div>
        </article>
    );
}