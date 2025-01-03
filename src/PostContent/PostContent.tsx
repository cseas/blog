import { Typography } from "hazel-ui/Typography";
import Head from "next/head";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";

import { config } from "../config";
import { DateDisplay } from "../ui/Atoms/DateDisplay";
import { Layout } from "../wrappers/Layout";

import type { Post } from "../lib/posts";

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
