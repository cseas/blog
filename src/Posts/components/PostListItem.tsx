import { Anchor, Typography } from "hazel-ui";
import Link from "next/link";
import { Date } from "../../ui";

import type { Post } from "../../lib";

interface PostListItemProps {
  postData: Omit<Post, "mdxSource">;
}

export function PostListItem({ postData }: PostListItemProps) {
  const { id, frontMatter } = postData;
  return (
    <li
      className="mt-8 rounded-2xl bg-mauve-3 p-7 hover:bg-mauve-4"
      style={{ boxShadow: "5px 5px 6px #b9b9b9, -5px -5px 6px #ffffff" }}
    >
      <Typography variant="h4">
        <Link href={`/posts/${id}`} passHref legacyBehavior>
          <Anchor color="#008256">{frontMatter.title}</Anchor>
        </Link>
      </Typography>

      <Typography>
        <Date dateString={frontMatter.date} />
      </Typography>
    </li>
  );
}
