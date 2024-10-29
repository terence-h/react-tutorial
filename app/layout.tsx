import type { Metadata } from "next";
import "./globals.css";
import LayoutWrapper from "./components/LayoutWrapper";

export const metadata: Metadata = {
  title: "React Tutorial",
  description: "Condensed curated tutorials for getting started in React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased dark`}
      >
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}