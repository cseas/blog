import { Color, Typography } from "hazel-ui";
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
        className="inline-block w-full p-7 text-purple-11 hover:no-underline"
      >
        <Typography color={Color.green11} variant="title">
          {frontMatter.title}
        </Typography>

        {/* TODO: This is a use-case where we need the Typography styles 
        but we can't use the Typography component because it needs to render
        as a <time> element which has different props. Ideally the classNames
        for Typography should be provided separately. */}
        <Typography>
          <Date dateString={frontMatter.date} />
        </Typography>
      </Link>
    </article>
  );
}
