import Link from "next/link";
import { HTMLProps } from "react";

export function Navbar() {
  return (
    <div className="sticky top-0 z-10 border-b border-mauve-7 bg-white/95 backdrop-blur-xl backdrop-saturate-150 dark:bg-slate-900/75">
      <div className="my-0 mx-auto flex max-w-xl justify-between px-5 py-2.5">
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

function Label(props: HTMLProps<HTMLAnchorElement>) {
  return (
    <a
      className="text-mauve-11 transition-colors duration-300 visited:text-mauve-11 hover:text-mauve-12 hover:no-underline"
      {...props}
    ></a>
  );
}
