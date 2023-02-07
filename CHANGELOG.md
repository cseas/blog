# blog

## 0.0.7

### Patch Changes

- [#23](https://github.com/cseas/blog/pull/23) [`facaa58`](https://github.com/cseas/blog/commit/facaa58c5783324be63f849ba0b7b396471f76cf) Thanks [@cseas](https://github.com/cseas)! - feat: add cover image support for posts

  - add cover image to vscode-extensions
  - upgrade next to 13.1.6
  - upgrade hazel-ui to 0.4.0
  - typography improvements
  - move post date to bottom of the content
  - add app directory to tailwind config

## 0.0.6

### Patch Changes

- [#21](https://github.com/cseas/blog/pull/21) [`dabc356`](https://github.com/cseas/blog/commit/dabc356933b9c4b60e8181ba90513a50bdd75e61) Thanks [@cseas](https://github.com/cseas)! - feat: enable app directory

  - bump node version to 18 in bundle analysis CI
  - add .vscode to .gitignore
  - set npm as registry
  - migrate home page to app directory
  - enable styledComponents transform temporarily
  - remove `next export` from build temporarily
  - update hazel-ui to v0.3.0
  - switch to dark mode
  - change background gradient from mauve to slate
  - Update bio
  - add global css for links under prose
  - remove dead global css
  - add footer
  - make navbar responsive
  - changes in tsconfig done by nextjs CLI
  - remove eslint-config-next

## 0.0.5

### Patch Changes

- [#19](https://github.com/cseas/blog/pull/19) [`6b6556f`](https://github.com/cseas/blog/commit/6b6556f5185f855047c5daae54f69ea2b9b18a17) Thanks [@cseas](https://github.com/cseas)! - fix: convert whole article list-item to link

  - Now users can click anywhere on an article card to open the article
  - update hazel-ui with tree shaking, bundle size has improved
  - remove usage of Box
  - remove styledComponents from nextjs compiler
  - remove transpilation of hazel-ui
  - upgrade packages
  - add imports for styles and fonts from hazel-ui
  - update Typography variants
  - fix specificity of prose link styles
  - remove unused global styles
  - add radix color blue to tailwind

## 0.0.4

### Patch Changes

- [#17](https://github.com/cseas/blog/pull/17) [`529725c`](https://github.com/cseas/blog/commit/529725c97a81b806e13cdd9cf3eccebd4af21e96) Thanks [@cseas](https://github.com/cseas)! - chore: remove styled-components

  - Refactored RecentPosts, Learn and Posts components to use the same code for list items.
  - Update RecentPosts to show only 3 latest posts.

## 0.0.3

### Patch Changes

- [#15](https://github.com/cseas/blog/pull/15) [`a457b8b`](https://github.com/cseas/blog/commit/a457b8bbeed3de8dbf0706fb95ef0a0f23d80986) Thanks [@cseas](https://github.com/cseas)! - chore: update link of MDX extension in blog post

  - updated next 12 to 13
  - updated next-mdx-remote 2 to 4
  - removed styled-components from About
  - updated Link components to include legacyBehavior
  - updated next-mdx-remote usage to new syntax

## 0.0.2

### Patch Changes

- [#12](https://github.com/cseas/blog/pull/12) [`5877530`](https://github.com/cseas/blog/commit/5877530ef9c9bd1110a6bce2146e7a386113b2b3) Thanks [@cseas](https://github.com/cseas)! - ci: add commitlint hook to check commit formatting

## 0.0.1

### Patch Changes

- [#10](https://github.com/cseas/blog/pull/10) [`fc94970`](https://github.com/cseas/blog/commit/fc94970df693e10d90084d028f813d478159a70e) Thanks [@cseas](https://github.com/cseas)! - ci: add changesets for versioning, changelog and tags
