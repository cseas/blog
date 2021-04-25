import Head from "next/head";
import { Anchor, Typography } from "hazel-ui";
import { config } from "../config";
import { Layout } from "../wrappers";
import styled from "styled-components";
import Link from "next/link";
import { Date } from "../ui";
import type { Post } from "../lib/posts";

const page = {
  title: config.name + " | All Posts",
  description: config.description,
  image: config.basePath + config.photo,
  imageAlt: `Headshot of ${config.name}`,
  twitter: config.twitter,
};

interface PostsProps {
  allPostsData: Array<Post>;
}

export function Posts({ allPostsData }: PostsProps): JSX.Element {
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
          <Typography variant="h1">All Posts</Typography>

          <List>
            {allPostsData.map(({ id, frontMatter }) => (
              <ListItem key={id}>
                <PostTitle variant="h4">
                  <Link href={`/posts/${id}`} passHref>
                    <Anchor color="#008256">{frontMatter.title}</Anchor>
                  </Link>
                </PostTitle>

                <Typography>
                  <Date dateString={frontMatter.date} />
                </Typography>
              </ListItem>
            ))}
          </List>
        </section>
      </Layout>
    </>
  );
}

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  padding: 1.7rem;
  margin: 2rem 0 0;

  border-radius: 16px;
  background: #f7f7f7;
  box-shadow: 5px 5px 6px #b9b9b9, -5px -5px 6px #ffffff;
`;

const PostTitle = styled(Typography)`
  color: #008256;
`;
