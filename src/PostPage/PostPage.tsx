import { Typography } from "hazel-ui";
import Head from "next/head";
import type { Post } from "../lib";
import { Date } from "../ui";
import { Layout } from "../wrappers";

interface PostPageProps {
  postData: Post;
}

export function PostPage({ postData }: PostPageProps) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Layout>
        <article>
          <Typography variant="h1">{postData.title}</Typography>

          <Typography variant="p">
            <Date dateString={postData.date} />
          </Typography>

          <br />

          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Layout>
    </>
  );
}
