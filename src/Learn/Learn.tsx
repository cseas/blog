import { Typography } from "hazel-ui/Typography";
import Head from "next/head";
import Link from "next/link";

import { config } from "../config";
import { Layout } from "../wrappers/Layout";
import { TopicCard } from "./components/TopicCard";

import type { LearnPost } from "../lib/learn";

import type { JSX } from "react";

const page = {
  title: "Learn",
  description: config.description,
  image: config.host + config.basePath + config.photo,
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
            {allLearnData.map(({ id, frontMatter }) => (
              <Link key={id} href={`/learn/${id}`}>
                <TopicCard key={id} learnData={{ id, frontMatter }} />
              </Link>
            ))}
          </ul>
        </section>
      </Layout>
    </>
  );
}
