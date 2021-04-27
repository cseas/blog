import fs from "fs";
import matter from "gray-matter";
import path from "path";
import renderToString from "next-mdx-remote/render-to-string";
import codeTitle from "remark-code-titles";
import slug from "rehype-slug";
import link from "rehype-autolink-headings";
import rehypePrism from "@mapbox/rehype-prism";
import type { MdxRemote } from "next-mdx-remote/types";

const POSTS_DIRECTORY = path.join(process.cwd(), "docs/posts");

interface FrontMatter {
  date: string;
  title: string;
}

export interface Post {
  id: string;
  frontMatter: FrontMatter;
  mdxSource?: MdxRemote.Source;
}

export function getSortedPostsData(): Array<Post> {
  // Get file names under /posts
  const fileNames = fs.readdirSync(POSTS_DIRECTORY);

  const allPostsData = fileNames.map((fileName) => {
    // Remove .md from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullFilePath = path.join(POSTS_DIRECTORY, fileName);
    const fileContents = fs.readFileSync(fullFilePath, "utf8");

    // use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // combine the data with the id
    return {
      id,
      frontMatter: matterResult.data,
    } as Post;
  });

  // sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.frontMatter.date < b.frontMatter.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(POSTS_DIRECTORY);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id: string) {
  const fullFilePath = path.join(POSTS_DIRECTORY, `${id}.md`);
  const fileContents = fs.readFileSync(fullFilePath, "utf8");

  // use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const mdxSource = await renderToString(matterResult.content, {
    mdxOptions: {
      remarkPlugins: [codeTitle],
      rehypePlugins: [slug, link, rehypePrism],
    },
  });

  return {
    id,
    mdxSource,
    frontMatter: matterResult.data,
  } as Post;
}
