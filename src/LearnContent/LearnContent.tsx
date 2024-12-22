import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";
import { Typography } from "hazel-ui/Typography";

import type { LearnPost } from "../lib/learn";
import { Layout } from "../wrappers/Layout";
import { Date } from "../ui/Atoms/Date";

import type { JSX } from "react";

export function LearnContent({ frontMatter, mdxSource }: LearnPost): JSX.Element {
  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>

      <Layout>
        <article>
          <Typography variant="display">{frontMatter.title}</Typography>

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
