import { getSortedPostsData } from "../src";

export { Home as default } from "../src";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
