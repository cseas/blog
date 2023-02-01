import { Home, getSortedPostsData } from "../src";

export default function Page() {
  // this method uses "fs" so it needs to run on the server
  const staticData = getSortedPostsData();

  return <Home allPostsData={staticData} />;
}
