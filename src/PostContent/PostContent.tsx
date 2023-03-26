import { Typography } from "hazel-ui/Typography";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";

import type { Post } from "../lib/posts.js";
import { Date } from "../ui/Atoms/Date.js";
import { Layout } from "../wrappers/Layout.js";

export function PostContent({ frontMatter, mdxSource }: Post) {
  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <Layout>
        <article>
          <Typography variant="display">{frontMatter.title}</Typography>

          {frontMatter.cover ? (
            <img
              src={frontMatter.cover}
              alt="Cover image"
              style={{ marginTop: "1rem" }}
            />
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
