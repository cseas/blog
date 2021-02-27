import fs from "fs";
import matter from "gray-matter";
import path from "path";
import remark from "remark";
import html from "remark-html";

export interface Post {
  id: string;
  date: string;
  title: string;
  contentHtml?: string;
}

const postsDirectory = path.join(process.cwd(), "docs/posts");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    // Remove .md from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullFilePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullFilePath, "utf8");

    // use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // combine the data with the id
    return {
      id,
      ...matterResult.data,
    } as Post;
  });

  // sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id: string) {
  const fullFilePath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullFilePath, "utf8");

  // use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // use remark to convert markdown to html string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  } as Post;
}
