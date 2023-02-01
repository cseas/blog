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
    <article className="mt-8 rounded-2xl border border-slate-6 bg-slate-1 transition-transform hover:scale-[1.01] hover:bg-blue-1">
      <Link
        href={`/posts/${id}`}
        className="inline-block w-full p-7 hover:no-underline"
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
