# Packages

This document explains the purpose of the dependencies used in the project. Any dependencies not required to build or run the project should be added to devDependencies.

## Dependencies

| Package name | Purpose          |
| ------------ | ---------------- |
| next         | Server rendering |
| react        | Server rendering |
| react-dom    | Server rendering |

[]()

## Dev Dependencies

| Package name                         | Purpose                                       |
| ------------------------------------ | --------------------------------------------- |
| @radix-ui/colors                     | Required by windy-radix-palette               |
| @types/node                          | Required by react                             |
| @types/react                         | Required by react                             |
| date-fns                             | Date formatting                               |
| typescript                           | Language support                              |
| hazel-ui                             | UI library                                    |
| next-mdx-remote                      | Process mdx files                             |
| rehype-slug                          | Add IDs to headings                           |
| rehype-autolink-headings             | Add anchor tags to headings                   |
| @mapbox/rehype-prism                 | Syntax highlighting mdx codeblocks            |
| remark-code-titles                   | Add filenames to codeblocks                   |
| tailwindcss                          | [Tailwind CSS][1]                             |
| postcss                              | Required by tailwindcss                       |
| prettier                             | Code formatting                               |
| prettier prettier-plugin-tailwindcss | Prettier [plugin][2] to sort Tailwind classes |
| autoprefixer                         | Required by tailwindcss                       |
| @tailwindcss/typography              | Tailwind CSS plugin for typography classes    |
| windy-radix-palette                  | Radix colors for Tailwind                     |

[1]: https://tailwindcss.com/docs/guides/nextjs
[2]: https://tailwindcss.com/blog/automatic-class-sorting-with-prettier
