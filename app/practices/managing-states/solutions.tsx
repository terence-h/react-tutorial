"use client";

import Accordion from "@/app/components/Accordion";
import AccordionItem from "@/app/components/AccordionItem";
import CodeBlock from "@/app/components/CodeBlock";
import Header from "@/app/components/Header";

export default function Solutions() {
    return (
        <article id="solutions">
            <Header>Solutions</Header>
            <Accordion allowMultipleOpen={true}>
                <AccordionItem title="Challenge 1 Solution">
                    <CodeBlock code={c1solution} language={"typescript"} />
                </AccordionItem>
                <AccordionItem title="Challenge 2 Solution">
                    <CodeBlock code={c2solution} language={"typescript"} />
                </AccordionItem>
            </Accordion>
        </article>
    );
}

const c1solution = `import { useState } from 'react';
export default function App() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  
  function handleChange(event) {
    // Get the input name value and input current value
    const { name, value } = event.target;
    
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  
  return (
    <>
      <form>
        <label>Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            />
        </label>
        <br />
        <label>Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            />
        </label>
      </form>
      <h1 className='mt-5'>Preview</h1>
      <p>Username: {formData.username}</p>
      <p>Password: {formData.password}</p>
    </>
  );
}`;

const c2solution = `import { useState } from 'react';

export default function App() {
  const [formData, setFormData] = useState({ username: "", password: "", language: "JavaScript" });
  
  function handleChange(event) {
    // Get the input name value and input current value
    const { name, value } = event.target;
    
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert("Name: " + formData.username + " | Password: " + formData.password + " | Preferred Programming Language: " + formData.language);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            />
        </label>
        <br />
        <label>
          Preferred Programming Language:
          <select name="language" value={formData.language} onChange={handleChange}>
            <option value="JavaScript">JavaScript</option>
            <option value="TypeScript">TypeScript</option>
          </select>
        </label>
        <br />
        <button className="bg-blue-500 p-2" type="submit">Submit</button>
      </form>
      <h1 className='mt-5'>Preview</h1>
      <p>Username: {formData.username}</p>
      <p>Password: {formData.password}</p>
      <p>Preferred Programming Language: {formData.language}</p>
    </>
  );
}`;