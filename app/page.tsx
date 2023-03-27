import { Home } from "../src/Home/Home.js";
import { pageMeta } from "../src/Home/meta.js";
import { config } from "../src/config.js";
import { getSortedPostsData } from "../src/lib/posts.js";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: pageMeta.title,
  description: pageMeta.description,

  openGraph: {
    title: pageMeta.title,
    description: pageMeta.description,
    images: [{ url: pageMeta.image, alt: pageMeta.imageAlt }],
  },

  twitter: {
    card: "summary_large_image",
    creator: "@cse_as",
    title: pageMeta.title,
    description: pageMeta.description,
    images: [{ url: pageMeta.image, alt: pageMeta.imageAlt }],
    site: pageMeta.twitter,
  },

  icons: {
    icon: `${config.basePath}/favicon.ico`,
  },
};

export default function Page() {
  // this method uses "fs" so it needs to run on the server
  const staticData = getSortedPostsData();

  return <Home allPostsData={staticData} />;
}
