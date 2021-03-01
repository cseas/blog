import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPostIds, getPostData } from "../../src";

export { PostPage as default } from "../../src";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};