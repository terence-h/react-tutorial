import CodeBlock from "@/app/components/CodeBlock";
import Header from "@/app/components/Header";
import Paragraph from "@/app/components/Paragraph";

export default function LazyLoading() {
    return (
        <article id="lazy-loading">
            <Header>Lazy Loading for Optimisation</Header>

            <Paragraph>Currently, we are loading all the components when we enter the root page. This includes Home, About and Error components. This is not recommended as users who had not enter the page before, will take a longer time to load. We should only load the components as and when we need it.
                <br /><br />We can implement something called Lazy Loading so components are only loaded when we need it. To do so, we simply just have to wrap the Routes into a Suspense element and lazily import the pages as shown below.
            </Paragraph>
            <CodeBlock code={lazyLoading} language="jsx" />

            <Paragraph className="mt-5">We can test this out by setting a delay in the lazy loading so the loading message is visible.</Paragraph>
            <CodeBlock code={testLazyLoad} language="jsx" />
        </article>
    );
}

const lazyLoading = `// We do not need the Home, About and Error imports already as we are importing with the lazy function.
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazily import components
const LazyHome = lazy(() => import('./pages/Home'));
const LazyAbout = lazy(() => import('./pages/About'));
const LazyError = lazy(() => import('./pages/Error'));

export default function App() {
  return (
    <BrowserRouter>
      {/* Render a fallback loading message if the lazy loading has not completed */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LazyHome />} />
          <Route path="/about/:id" element={<LazyAbout />} />
          {/* Any path that is not listed above, display a Not Found page */}
          <Route path="*" element={<LazyError>404 Not Found</LazyError>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}`;

const testLazyLoad = `// Set a delay to load
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const LazyHome = lazy(() => delay(3000).then(() => import('./pages/Home')));`;