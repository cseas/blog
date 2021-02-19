import { Box } from "hazel-ui";
import { ReactNode } from "react";
import { Navbar } from "../ui";

interface LayoutProps {
  children?: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <Box maxWidth="36rem" padding="3rem 1rem 6rem" margin="0 auto">
        {children}
      </Box>
    </>
  );
}
