import { GetStaticPaths, GetStaticProps } from "next";

import { getAllPostIds, getPostData } from "../../src/lib/posts";

export { PostContent as default } from "../../src/PostContent/PostContent";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params = {} }) => {
  const { frontMatter, mdxSource } = await getPostData(params.id as string);
  return {
    props: {
      frontMatter,
      mdxSource,
    },
  };
};
