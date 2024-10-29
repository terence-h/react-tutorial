import CodeBlock from "@/app/components/CodeBlock";
import CodeEditor from "@/app/components/CodeEditor";
import Header from "@/app/components/Header";
import InformationText from "@/app/components/InformationText";
import Paragraph from "@/app/components/Paragraph";

export default function RenderingDynamicContent() {
  return (
    <article id="rendering-dynamic-content">
      <Header>Rendering Dynamic Content</Header>
      <Paragraph>So far, we have been rendering elements that doesn&apos;t change in size. This isn&apos;t the case in real application situations. Take an eCommerce site for example. Adding/Removing items to cart changes the number of things in an object or displaying the list of items purchased in an order.
        <br /><br />For this walkthrough, we will be using a customer order with 3 items inside the order.
        <br /><br />Assume this is the customer order JSON object retrieved from the database.
      </Paragraph>
      <CodeBlock code={jsonObj} language="jsx" />

      <Paragraph className="mt-5">We will now render all 3 items into the page.</Paragraph>
      <CodeEditor id={1} initialCode={badDuplicateRenderCode} languages={["jsx", "tsx"]} />

      <Paragraph className="mt-5">It works but does it make sense to write repetitive code? What if the order has only 2 items or more than 3 items? The system would not be able to handle it since the code only renders a fixed number of items.
        <br /><br />In React, we use <span className="underline">.map()</span> to map over an array of items and render each one as a component or HTML element.
        <br /><br />Here&apos;s how you properly render objects with dynamic sizes.
      </Paragraph>
      <CodeEditor id={2} initialCode={goodRenderCode} languages={["jsx", "tsx"]} />
      <InformationText className="mt-5"><Paragraph>When you map over an array of items to render, React uses a unique &quot;key&quot; attribute for each item. This key attribute allows React to track changes efficiently. When an item is changed, removed or added, React will know this through the key attribute.
        <br /><br />While React will automatically assign a key with the item index if it&apos;s not specified, it is not the ideal solution. Using the item index may cause subtle bugs if the order of the array changes. You should be giving each item it&apos;s own index (e.g., productId: 100).</Paragraph>
      </InformationText>
    </article>
  );
}

const jsonObj = `[
  {
    name: "Apple",
    quantity: 5,
    pricePerQuantity: 1.2
  },
  {
    name: "Pear",
    quantity: 3,
    pricePerQuantity: 1.4
  },
  {
    name: "Mango",
    quantity: 6,
    pricePerQuantity: 1.6
  }
]`;

const badDuplicateRenderCode = `const orderData = [
  { name: "Apple", quantity: 5, pricePerQuantity: 1.2 },
  { name: "Pear", quantity: 3, pricePerQuantity: 1.4 },
  { name: "Mango", quantity: 6, pricePerQuantity: 1.6 }
];

export default function App() {
  return (
    <>
      <span>{orderData[0].name} x {orderData[0].quantity}</span>
      <p>Total Price: {(orderData[0].pricePerQuantity * orderData[0].quantity).toFixed(2)}</p>
      
      <span>{orderData[1].name} x {orderData[1].quantity}</span>
      <p>Total Price: {(orderData[1].pricePerQuantity * orderData[1].quantity).toFixed(2)}</p>
      
      <span>{orderData[2].name} x {orderData[2].quantity}</span>
      <p>Total Price: {(orderData[2].pricePerQuantity * orderData[2].quantity).toFixed(2)}</p>
    </>
  );
}`;

const goodRenderCode = `const orderData = [
  { name: "Apple", quantity: 5, pricePerQuantity: 1.2 },
  { name: "Pear", quantity: 3, pricePerQuantity: 1.4 },
  { name: "Mango", quantity: 6, pricePerQuantity: 1.6 }
];

export default function App() {
  return (
    <>
      {/* Map over the object */}
      {orderData.map((item, index) => {
        return (
          // React uses a unique "key" attribute for each item. This key attribute allows React to track changes efficiently. When an item is changed, removed or added, React will know this through the key attribute.
          <div key={index}>
            <span>{item.name} x {item.quantity}</span>
            <p>Total Price: {(item.pricePerQuantity * item.quantity).toFixed(2)}</p>
          </div>
        );
      })}
    </>
  );
}`;