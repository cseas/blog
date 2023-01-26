"use client";

import { Typography } from "hazel-ui";
import { config } from "../config";
import type { Post } from "../lib";
import { Layout } from "../wrappers";
import { About, RecentPosts } from "./components";

export const pageMeta = {
  title: config.name,
  description: config.description,
  image: config.basePath + config.photo,
  imageAlt: `Headshot of ${config.name}`,
  twitter: config.twitter,
};

interface HomeProps {
  allPostsData: Array<Post>;
}

export function Home({ allPostsData }: HomeProps) {
  return (
    <>
      <Layout>
        <header className="flex flex-col items-center">
          <img
            src={config.basePath + config.photo}
            height={144}
            width={144}
            alt={pageMeta.title}
            style={{ borderRadius: "72px" }}
          />

          <Typography variant="display" sx={{ margin: "1rem 0" }}>
            {pageMeta.title}
          </Typography>
        </header>
        <main>
          <About />
          <RecentPosts allPostsData={allPostsData} />
        </main>
      </Layout>
    </>
  );
}
