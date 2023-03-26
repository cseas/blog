import { GetStaticProps } from "next";
import { getSortedLearnData } from "../../src/lib/learn.js";

export { Learn as default } from "../../src/Learn/Learn.js";

export const getStaticProps: GetStaticProps = async () => {
  const allLearnData = getSortedLearnData();
  return {
    props: {
      allLearnData,
    },
  };
};
