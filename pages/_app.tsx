import { AppProps } from "next/app";

import "hazel-ui/styles.css";
import "hazel-ui/fonts.css";

import "../src/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
