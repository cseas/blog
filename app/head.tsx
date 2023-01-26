import DefaultTags from "../src/Home/DefaultTags";
import { pageMeta } from "../src/Home/Home";

export default function Head() {
  return (
    <>
      <DefaultTags />
      <title>{pageMeta.title}</title>
      <meta name="description" content={pageMeta.description} />
      <meta property="og:image" content={pageMeta.image} />
      <meta property="og:image:alt" content={pageMeta.imageAlt} />
      <meta property="og:title" content={pageMeta.title} />
      <meta property="og:description" content={pageMeta.description} />
      <meta name="twitter:site" content={pageMeta.twitter} />
      <meta name="twitter:image" content={pageMeta.image} />
      <meta name="twitter:image:alt" content={pageMeta.imageAlt} />
      <meta name="twitter:title" content={pageMeta.title} />
      <meta name="twitter:description" content={pageMeta.description} />
    </>
  );
}
