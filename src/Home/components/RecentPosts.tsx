import { Typography } from "hazel-ui/Typography";

import { PostListItem } from "../../Posts/components";
import { Post } from "../../lib";

interface PostsProps {
  allPostsData: Array<Post>;
}

export function RecentPosts({ allPostsData }: PostsProps) {
  return (
    <section style={{ paddingTop: "3rem" }}>
      <Typography variant="headline" sx={{ textAlign: "center" }}>
        Recent Posts
      </Typography>
      {allPostsData.slice(0, 3).map(({ id, frontMatter }) => (
        <PostListItem key={id} postData={{ id, frontMatter }} />
      ))}
    </section>
  );
}
