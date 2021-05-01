import fs from "fs";
import path from "path";
import matter from "gray-matter";
import renderToString from "next-mdx-remote/render-to-string";
import slug from "rehype-slug";
import link from "rehype-autolink-headings";
import type { MdxRemote } from "next-mdx-remote/types";

const LEARN_DIRECTORY = path.join(process.cwd(), "docs/learn");

interface FrontMatter {
  date: string;
  title: string;
}

export interface LearnPost {
  id: string;
  frontMatter: FrontMatter;
  mdxSource?: MdxRemote.Source;
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

  const mdxSource = await renderToString(matterResult.content, {
    mdxOptions: { rehypePlugins: [slug, link] },
  });

  return {
    id,
    mdxSource,
    frontMatter: matterResult.data,
  } as LearnPost;
}
