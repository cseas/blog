import { GetStaticProps } from "next";
import { getSortedPostsData } from "../../src";

export { Posts as default } from "../../src";

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
