"use client";
import { Typography } from "hazel-ui";
import { config } from "../config.js";
import type { Post } from "../lib/index.js";
import { Layout } from "../wrappers/index.js";
import { About } from "./components/About.js";
import { RecentPosts } from "./components/RecentPosts.js";
import { pageMeta } from "./meta.js";

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

          <Typography variant="headline" sx={{ margin: "1rem 0" }}>
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
