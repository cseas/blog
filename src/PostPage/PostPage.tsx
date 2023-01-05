import { Typography } from "hazel-ui";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import type { Post } from "../lib";
import { Date } from "../ui";
import { Layout } from "../wrappers";

export function PostPage({ frontMatter, mdxSource }: Post) {
  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <Layout>
        <article>
          <Typography variant="h1">{frontMatter.title}</Typography>

          <Typography variant="p">
            <Date dateString={frontMatter.date} />
          </Typography>

          <br />

          <div className="prose w-full max-w-none dark:prose-dark">
            <MDXRemote {...mdxSource} />
          </div>
        </article>
      </Layout>
    </>
  );
}
