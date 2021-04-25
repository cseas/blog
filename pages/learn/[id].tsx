import { GetStaticPaths, GetStaticProps } from "next";
import { getAllLearnIds, getLearnData } from "../../src/lib";

export { LearnPage as default } from "../../src";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllLearnIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { frontMatter, mdxSource } = await getLearnData(params.id as string);
  return {
    props: {
      frontMatter,
      mdxSource,
    },
  };
};
