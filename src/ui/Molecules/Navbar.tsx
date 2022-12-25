import { Box } from "hazel-ui";
import Link from "next/link";
import styled from "styled-components";

interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  return (
    <div className="sticky top-0 z-10 shadow backdrop-blur-md">
      <Box
        display="flex"
        justifyContent="space-between"
        maxWidth="36rem"
        margin="0 auto 0"
        padding="0.6rem 1.2rem"
      >
        <Link href="/" passHref>
          <Label>Home</Label>
        </Link>

        <Link href="/posts" passHref>
          <Label>Posts</Label>
        </Link>

        <Link href="/learn" passHref>
          <Label>Learn</Label>
        </Link>

        <Link href="/links" passHref>
          <Label>Links</Label>
        </Link>
      </Box>
    </div>
  );
}

const Label = styled.a`
  color: #4b4b4b;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: black;
  }
`;
