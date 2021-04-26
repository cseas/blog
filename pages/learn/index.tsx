import { GetStaticProps } from "next";
import { getSortedLearnData } from "../../src/lib";

export { Learn as default } from "../../src";

export const getStaticProps: GetStaticProps = async () => {
  const allLearnData = getSortedLearnData();
  return {
    props: {
      allLearnData,
    },
  };
};
