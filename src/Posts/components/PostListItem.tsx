import { Typography } from "hazel-ui";
import Link from "next/link";
import { Date } from "../../ui";

import type { Post } from "../../lib";

interface PostListItemProps {
  postData: Omit<Post, "mdxSource">;
}

export function PostListItem({ postData }: PostListItemProps) {
  const { id, frontMatter } = postData;
  return (
    <article
      className="mt-8 rounded-2xl bg-mauve-3 transition-transform hover:scale-[1.01] hover:bg-mauve-4"
      style={{ boxShadow: "5px 5px 6px #b9b9b9, -5px -5px 6px #ffffff" }}
    >
      <Link
        href={`/posts/${id}`}
        className="inline-block w-full p-7 hover:no-underline"
      >
        <Typography variant="h4">{frontMatter.title}</Typography>

        <Typography>
          <Date dateString={frontMatter.date} />
        </Typography>
      </Link>
    </article>
  );
}
