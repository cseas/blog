# blog

## 0.0.9

### Patch Changes

- [#34](https://github.com/cseas/blog/pull/34) [`9c0e14f`](https://github.com/cseas/blog/commit/9c0e14f84c47fc11bbfda89e2f2d2f2bf843d294) Thanks [@cseas](https://github.com/cseas)! - fix: og image previews

  ## Summary by CodeRabbit

  - **New Features**

    - Introduced a changeset-based labeling mechanism for pull requests.
    - Enhanced pull request template for clearer issue tracking and requirements.
    - Added a new GitHub Actions workflow to enforce a checklist process for pull requests.
    - Implemented a new workflow for automatic labeling of pull requests.

  - **Improvements**

    - Updated configuration for Next.js application to improve package handling.
    - Enhanced metadata for social media sharing in post components.

  - **Documentation**

    - Updated titles and publication dates in documentation files for clarity.

  - **Chores**
    - Added a new configuration file for code formatting guidelines.

## 0.0.8

### Patch Changes

- [#25](https://github.com/cseas/blog/pull/25) [`14350c5`](https://github.com/cseas/blog/commit/14350c53f806713367286c1423fe87f107efec3e) Thanks [@cseas](https://github.com/cseas)! - feat: esm with type module

  - change all hazel-ui imports to deep imports to workaround [Next.js tree shaking bug](https://github.com/vercel/next.js/issues/12557#issuecomment-1427088366)
  - replace head.js with metadata
  - add cjs/mjs extension to config files
  - initial draft for package linting post
  - upgrade to typescript 5
  - ESM setup: `type: module` in package.json and `moduleResolution: node16` in tsconfig
  - tsconfig target ESNext

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
