# Packages

This document explains the purpose of the dependencies used in the project. Any dependencies not required to build or run the project should be added to devDependencies.

## Dependencies

| Package name      | Purpose                      |
| ----------------- | ---------------------------- |
| next              | Server rendering             |
| react             | Server rendering             |
| react-dom         | Server rendering             |
| styled-components | [Server render css in js][1] |

[]()

## Dev Dependencies

| Package name             | Purpose                            |
| ------------------------ | ---------------------------------- |
| @types/node              | Required by react                  |
| @types/react             | Required by react                  |
| date-fns                 | Date formatting                    |
| typescript               | Language support                   |
| hazel-ui                 | UI library                         |
| next-mdx-remote          | Process mdx files                  |
| rehype-slug              | Add IDs to headings                |
| rehype-autolink-headings | Add anchor tags to headings        |
| @mapbox/rehype-prism     | Syntax highlighting mdx codeblocks |
| remark-code-titles       | Add filenames to codeblocks        |

[1]: https://styled-components.com/docs/advanced#nextjs
