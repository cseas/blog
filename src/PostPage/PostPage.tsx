import { Typography } from "hazel-ui";
import Head from "next/head";
import type { Post } from "../lib";
import { Date } from "../ui";
import { Layout } from "../wrappers";
import hydrate from "next-mdx-remote/hydrate";

export function PostPage({ frontMatter, mdxSource }: Post) {
  const content = hydrate(mdxSource);
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

          <div>{content}</div>
        </article>
      </Layout>
    </>
  );
}
