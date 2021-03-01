import { Anchor, Typography } from "hazel-ui";
import Link from "next/link";
import styled from "styled-components";
import { Post } from "../../lib";
import { Date } from "../../ui";

interface PostsProps {
  allPostsData: Array<Post>;
}

export function Posts({ allPostsData }: PostsProps) {
  return (
    <section style={{ paddingTop: "3rem" }}>
      <RecentPosts variant="h2">Recent Posts</RecentPosts>
      <List>
        {allPostsData.map(({ id, date, title }) => (
          <ListItem key={id}>
            <PostTitle variant="h4">
              <Link href={`/posts/${id}`} passHref>
                <Anchor color="#008256">{title}</Anchor>
              </Link>
            </PostTitle>

            <Typography>
              <Date dateString={date} />
            </Typography>
          </ListItem>
        ))}
      </List>
    </section>
  );
}

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  padding: 1.7rem;
  margin: 2rem 0 0;

  border-radius: 16px;
  background: #f7f7f7;
  box-shadow: 5px 5px 6px #b9b9b9, -5px -5px 6px #ffffff;
`;

const PostTitle = styled(Typography)`
  color: #008256;
`;

const RecentPosts = styled(Typography)`
  text-align: center;
`;
