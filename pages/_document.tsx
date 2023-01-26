import Document, { Head, Html, Main, NextScript } from "next/document";

import { config } from "../src";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href={`${config.basePath}/favicon.ico`} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@cse_as" />
        </Head>
        <body className="dark bg-gradient-to-tr from-slate-1 to-blue-2">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
