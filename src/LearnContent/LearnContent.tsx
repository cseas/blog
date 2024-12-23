import type { JSX } from "react";
import { Typography } from "hazel-ui/Typography";
import Head from "next/head";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";

import { DateDisplay } from "../ui/Atoms/DateDisplay";
import { Layout } from "../wrappers/Layout";

import type { LearnPost } from "../lib/learn";

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
            <MDXRemote {...(mdxSource as MDXRemoteSerializeResult)} />
          </div>
        </article>

        <Typography variant="label" sx={{ marginTop: "3rem" }}>
          Last Updated - <DateDisplay dateString={frontMatter.date} />
        </Typography>
      </Layout>
    </>
  );
}
