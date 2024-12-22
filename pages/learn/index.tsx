import { GetStaticProps } from "next";

import { getSortedLearnData } from "../../src/lib/learn";

export { Learn as default } from "../../src/Learn/Learn";

export const getStaticProps: GetStaticProps = async () => {
  const allLearnData = getSortedLearnData();
  return {
    props: {
      allLearnData,
    },
  };
};
