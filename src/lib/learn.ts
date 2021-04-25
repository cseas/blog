import fs from "fs";
import path from "path";
import matter from "gray-matter";
import renderToString from "next-mdx-remote/render-to-string";
import slug from "rehype-slug";
import link from "rehype-autolink-headings";
import type { MdxRemote } from "next-mdx-remote/types";

const LEARN_DIRECTORY = path.join(process.cwd(), "docs/posts");

interface FrontMatter {
  date: string;
  title: string;
}

export interface LearnPost {
  id: string;
  frontMatter: FrontMatter;
  mdxSource?: MdxRemote.Source;
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
