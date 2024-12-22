import { Typography } from "hazel-ui/Typography";
import { config } from "../config";
import type { Post } from "../lib/index";
import { Layout } from "../wrappers/index";
import { About } from "./components/About";
import { RecentPosts } from "./components/RecentPosts";
import { pageMeta } from "./meta";

interface HomeProps {
  allPostsData: Array<Post>;
}

export function Home({ allPostsData }: HomeProps) {
  return (
    <>
      <Layout>
        <header className="flex flex-col items-center">
          <img
            src={config.basePath + config.photo}
            height={144}
            width={144}
            alt={pageMeta.title}
            style={{ borderRadius: "72px" }}
          />

          <Typography variant="headline" sx={{ margin: "1rem 0" }}>
            {pageMeta.title}
          </Typography>
        </header>
        <main>
          <About />
          <RecentPosts allPostsData={allPostsData} />
        </main>
      </Layout>
    </>
  );
}
