import { GetStaticProps } from "next";

import { getSortedPostsData } from "../../src/lib/posts";

export { Posts as default } from "../../src/Posts/Posts";

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
