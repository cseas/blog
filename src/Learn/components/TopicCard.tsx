import type { JSX } from "react";
import { Card, Typography } from "hazel-ui";

import type { LearnPost } from "../../lib/learn.js";


interface TopicCardProps {
  learnData: LearnPost;
}

export function TopicCard({ learnData }: TopicCardProps): JSX.Element {
  const { frontMatter } = learnData;
  return (
    <Card>
      <Typography>{frontMatter.title}</Typography>
    </Card>
  );
}
