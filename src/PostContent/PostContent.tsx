import { Typography } from "hazel-ui/Typography";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";

import type { Post } from "../lib/posts.js";
import { Date } from "../ui/Atoms/Date.js";
import { Layout } from "../wrappers/Layout.js";
import { config } from "../config.js";

export function PostContent({ frontMatter, mdxSource }: Post) {
  const page = {
    title: frontMatter.title,
    image: config.host + frontMatter.cover,
    imageAlt: `Cover image for ${frontMatter.title}`,
    twitter: config.twitter,
  };

  return (
    <>
      <Head>
        <title>{page.title}</title>

        <meta property="og:title" content={page.title} />
        <meta name="twitter:title" content={page.title} />
        <meta name="twitter:site" content={page.twitter} />

        {frontMatter.cover ? (
          <>
            <meta property="og:image" content={page.image} />
            <meta property="og:image:alt" content={page.imageAlt} />
            <meta name="twitter:image" content={page.image} />
            <meta name="twitter:image:alt" content={page.imageAlt} />
          </>
        ) : null}
      </Head>
      <Layout>
        <article>
          <Typography variant="display">{page.title}</Typography>

          {frontMatter.cover ? (
            <img src={frontMatter.cover} alt="Cover image" style={{ marginTop: "1rem" }} />
          ) : null}

          <br />

          <div className="prose w-full max-w-none dark:prose-dark">
            <MDXRemote {...mdxSource} />
          </div>
        </article>

        <Typography variant="label" sx={{ marginTop: "3rem" }}>
          Last Updated - <Date dateString={frontMatter.date} />
        </Typography>
      </Layout>
    </>
  );
}
