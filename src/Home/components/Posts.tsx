import { Anchor, Typography } from "hazel-ui";
import Link from "next/link";
import { Post } from "../../lib";
import { Date } from "../../ui";

interface PostsProps {
  allPostsData: Array<Post>;
}

export function Posts({ allPostsData }: PostsProps) {
  return (
    <section style={{ paddingTop: "3rem" }}>
      <Typography variant="h2" sx={{ textAlign: "center" }}>
        Recent Posts
      </Typography>
      <ul>
        {allPostsData.map(({ id, frontMatter }) => (
          <li
            className="mt-8 rounded-2xl bg-mauve-3 p-7 hover:bg-mauve-4"
            key={id}
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
        ))}
      </ul>
    </section>
  );
}
