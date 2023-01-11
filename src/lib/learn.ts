import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import link from "rehype-autolink-headings";
import slug from "rehype-slug";

import type { MDXRemoteSerializeResult } from "next-mdx-remote";

const LEARN_DIRECTORY = path.join(process.cwd(), "docs/learn");

interface FrontMatter {
  date: string;
  title: string;
}

export interface LearnPost {
  id: string;
  frontMatter: FrontMatter;
  mdxSource?: MDXRemoteSerializeResult;
}

export function getSortedLearnData(): Array<LearnPost> {
  // Get file names under /posts
  const fileNames = fs.readdirSync(LEARN_DIRECTORY);

  const allLearnData = fileNames.map((fileName) => {
    // Remove .md from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullFilePath = path.join(LEARN_DIRECTORY, fileName);
    const fileContents = fs.readFileSync(fullFilePath, "utf8");

    // use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // combine the data with the id
    return {
      id,
      frontMatter: matterResult.data,
    } as LearnPost;
  });

  // sort topics alphabetically
  return allLearnData.sort((a, b) => {
    if (a.id < b.id) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllLearnIds() {
  const fileNames = fs.readdirSync(LEARN_DIRECTORY);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getLearnData(id: string) {
  const fullFilePath = path.join(LEARN_DIRECTORY, `${id}.md`);
  const fileContents = fs.readFileSync(fullFilePath, "utf8");

  // use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const mdxSource = await serialize(matterResult.content, {
    mdxOptions: {
      rehypePlugins: [slug, link],
    },
  });

  return {
    id,
    mdxSource,
    frontMatter: matterResult.data,
  } as LearnPost;
}
