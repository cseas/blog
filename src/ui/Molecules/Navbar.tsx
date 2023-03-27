import Link from "next/link";

export function Navbar() {
  const pages = [
    { href: "/", label: "Home" },
    { href: "/posts", label: "Posts" },
    { href: "/learn", label: "Learn" },
  ];

  return (
    <div
      className="sticky top-0 z-10 mx-0 max-w-full rounded-b-xl border-b 
        border-slate-7 bg-slate-50/60 backdrop-blur-lg backdrop-saturate-150 
        dark:bg-slate-900/70 md:mx-auto md:max-w-2xl"
    >
      <nav className="my-0 mx-2 flex max-w-full justify-around py-2.5 md:mx-auto md:max-w-xl">
        {pages.map(({ href, label }) => (
          <Link
            key={label}
            href={href}
            className="text-slate-11 transition-colors duration-150 
              hover:text-purple-11 hover:no-underline"
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
