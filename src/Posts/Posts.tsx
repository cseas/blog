import { Typography } from "hazel-ui/Typography";
import Head from "next/head";

import { config } from "../config";
import type { Post } from "../lib/posts";
import { Layout } from "../wrappers";
import { PostListItem } from "./components";

import type { JSX } from "react";

const page = {
  title: config.name + " | All Posts",
  description: config.description,
  image: config.host + config.basePath + config.photo,
  imageAlt: `Headshot of ${config.name}`,
  twitter: config.twitter,
};

interface PostsProps {
  allPostsData: Array<Post>;
}

export function Posts({ allPostsData }: PostsProps): JSX.Element {
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
        <section>
          <Typography variant="display">All Posts</Typography>

          <ul>
            {allPostsData.map((postData) => (
              <PostListItem key={postData.id} postData={postData} />
            ))}
          </ul>
        </section>
      </Layout>
    </>
  );
}
