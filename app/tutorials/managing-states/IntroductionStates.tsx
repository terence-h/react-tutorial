import CodeBlock from "@/app/components/CodeBlock";
import Header from "@/app/components/Header";
import ImageContainer from "@/app/components/ImageContainer";
import Paragraph from "@/app/components/Paragraph";
import IncrementBefore from "@/public/tutorials/managing-states/increment-before.jpg";
import IncrementAfter from "@/public/tutorials/managing-states/increment-after.jpg";

export default function IntroductionStates() {
    return (
        <article id="introduction">
            <Header>Adding onClick Handler to Buttons</Header>

            <Paragraph className="mb-5">States are React hooks that allows you <span className="underline">tell React to rerender the components in your DOM that requires to update due to the state changes</span>.
                <br /><br />To illustrate it, below is a segment of a code that increases the count by 1 when the button is clicked.
            </Paragraph>
            <CodeBlock code={illustrateStateBefore} language={"jsx"} />

            <Paragraph className="mt-5 mb-5">You can deduce that the above code would look like this in the webpage.</Paragraph>
            
            <div className="grid grid-cols-1 md:grid-cols-2 mb-5">
                <div className="col-span-1">
                    <Paragraph>Before clicking the button:</Paragraph>
                    <ImageContainer src={IncrementBefore} alt={"HTML Before"} />
                </div>
                <div className="col-span-1">
                    <Paragraph>After clicking the button:</Paragraph>
                    <ImageContainer src={IncrementAfter} alt={"HTML After"} />
                </div>
            </div>

            <Paragraph>When you call the state function to update the state, React will proceed to calculate what has changed since the previous render/snapshot of the page and will proceed to rerender the WHOLE component BUT only updates the part of the DOM that actually needs to change. In the case of this, the {"<p>"} element relies on the state value which has changed.
                <br /><br />
                This is also one of the advantages of splitting components into tiny bits. This reduces the number of components React have to rerender due to state changes by only providing state values and state functions to the components that needs it.
                <br /><br />
                Can you imagine having only 1 component for your web app that contains 10 states? React would have to rerender the entire component every time when any of the 10 states gets updated even when 90% of the component doesn&apos;t rely on that state. This could affect your React web app performance!
            </Paragraph>
        </article>
    );
}

const illustrateStateBefore = `<p>I have clicked the button {count} time(s)</p>
<button onClick={increaseCount}>Increment count by 1</button>`;