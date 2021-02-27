import { Box } from "hazel-ui";
import Link from "next/link";
import styled from "styled-components";

interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  return (
    <Container>
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
    </Container>
  );
}

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;

  background: rgba(230, 230, 250, 0.3);
  box-shadow: 0 4px 20px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const Label = styled.a`
  color: #4b4b4b;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: black;
  }
`;
