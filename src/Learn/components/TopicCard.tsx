import type { LearnPost } from "../../lib/learn.js";
import { Card, Typography } from "hazel-ui";

import type { JSX } from "react";

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
