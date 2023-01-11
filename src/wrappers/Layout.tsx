import { ReactNode } from "react";
import { Navbar } from "../ui";

interface LayoutProps {
  children?: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <div
        style={{
          maxWidth: "50rem",
          padding: "48px 16px 96px",
          margin: "0 auto",
        }}
      >
        {children}
      </div>
    </>
  );
}
