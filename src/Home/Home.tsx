import { Box, Typography } from "hazel-ui";
import Head from "next/head";
import { config } from "../config";
import type { Post } from "../lib";
import { Layout } from "../wrappers";
import { About, RecentPosts } from "./components";

const page = {
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
      <Head>
        <title>{page.title}</title>
        <meta name="description" content={page.description} />
        <meta property="og:image" content={page.image} />
        <meta property="og:image:alt" content={page.imageAlt} />
        <meta property="og:title" content={page.title} />
        <meta property="og:description" content={page.description} />
        <meta name="twitter:site" content={page.twitter} />
        <meta name="twitter:image" content={page.image} />
        <meta name="twitter:image:alt" content={page.imageAlt} />
        <meta name="twitter:title" content={page.title} />
        <meta name="twitter:description" content={page.description} />
      </Head>

      <Layout>
        <header className="flex flex-col items-center">
          <img
            src={config.basePath + config.photo}
            height={144}
            width={144}
            alt={page.title}
            style={{ borderRadius: "72px" }}
          />

          <Typography variant="display" sx={{ margin: "1rem 0" }}>
            {page.title}
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
