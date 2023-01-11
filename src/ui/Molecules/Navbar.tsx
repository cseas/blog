import Link from "next/link";

export function Navbar() {
  const pages = [
    { href: "/", label: "Home" },
    { href: "/posts", label: "Posts" },
    { href: "/learn", label: "Learn" },
    { href: "/links", label: "Links" },
  ];

  return (
    <div className="sticky top-0 z-10 border-b border-mauve-7 bg-slate-50/50 backdrop-blur-lg backdrop-saturate-100 dark:bg-slate-900/75">
      <nav className="my-0 mx-auto flex max-w-xl justify-between px-5 py-2.5">
        {pages.map(({ href, label }) => (
          <Link
            key={label}
            href={href}
            className="text-mauve-11 transition-colors duration-150 visited:text-mauve-11 hover:text-purple-11 hover:no-underline"
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
