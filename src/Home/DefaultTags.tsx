import { config } from "../config";

export default function DefaultTags() {
  return (
    <>
      <link rel="icon" href={`${config.basePath}/favicon.ico`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@cse_as" />
    </>
  );
}
