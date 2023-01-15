import { Typography } from "hazel-ui";

import { Post } from "../../lib";
import { PostListItem } from "../../Posts/components";

interface PostsProps {
  allPostsData: Array<Post>;
}

export function RecentPosts({ allPostsData }: PostsProps) {
  return (
    <section style={{ paddingTop: "3rem" }}>
      <Typography variant="headline" sx={{ textAlign: "center" }}>
        Recent Posts
      </Typography>
      {allPostsData.slice(0, 3).map(({ mdxSource, ...postData }) => (
        <PostListItem key={postData.id} postData={postData} />
      ))}
    </section>
  );
}
