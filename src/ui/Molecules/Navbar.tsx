import Link from "next/link";
import { HTMLProps } from "react";
import styled from "styled-components";

export function Navbar() {
  return (
    <div className="sticky top-0 z-10 shadow backdrop-blur-md">
      <div className="flex justify-between max-w-xl my-0 mx-auto px-5 py-2.5">
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
      </div>
    </div>
  );
}

// function Label(props: HTMLProps<HTMLAnchorElement>) {
//   return <a {...props}></a>;
// }

const Label = styled.a`
  color: #4b4b4b;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: black;
  }
`;
