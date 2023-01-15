import { Typography } from "hazel-ui";
import Head from "next/head";

import { config } from "../config";
import type { LearnPost } from "../lib/learn";
import { PostListItem } from "../Posts/components";
import { Layout } from "../wrappers";

const page = {
  title: "Learn",
  description: config.description,
  image: config.basePath + config.photo,
  imageAlt: `Headshot of ${config.name}`,
  twitter: config.twitter,
};

interface LearnProps {
  allLearnData: Array<LearnPost>;
}

export function Learn({ allLearnData }: LearnProps): JSX.Element {
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
          <Typography variant="display">Learn</Typography>

          <ul>
            {allLearnData.map(({ mdxSource, ...postData }) => (
              <PostListItem key={postData.id} postData={postData} />
            ))}
          </ul>
        </section>
      </Layout>
    </>
  );
}
