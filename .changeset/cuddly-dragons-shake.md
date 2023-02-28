---
"blog": patch
---

feat: esm with type module

- change all hazel-ui imports to deep imports to workaround [Next.js tree shaking bug](https://github.com/vercel/next.js/issues/12557#issuecomment-1427088366)
- replace head.js with metadata
- add cjs/mjs extension to config files
- initial draft for package linting post
- upgrade to typescript 5
- ESM setup: `type: module` in package.json and `moduleResolution: node16` in tsconfig
- tsconfig target ESNext
