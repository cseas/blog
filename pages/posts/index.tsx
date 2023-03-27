import { GetStaticProps } from "next";
import { getSortedPostsData } from "../../src/lib/posts.js";

export { Posts as default } from "../../src/Posts/Posts.js";

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
