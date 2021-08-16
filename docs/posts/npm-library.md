---
title: "How to bundle a component library for NPM distribution"
date: "2021-07-31"
---

huge:

- webpack (output type module, required for tree shaking is not stable: https://webpack.js.org/configuration/output/#type-module)
- rollup (ideal for libraries that don't have individual modules inside)

0 config:

- parcel
  (missing docs: https://v2.parceljs.org/getting-started/library/)
  (has bug with re-exports: https://github.com/parcel-bundler/parcel/issues/5655)
  (doesn't support type checking: https://github.com/parcel-bundler/parcel/issues/4022)
- microbundle (doesn't allow rollup config, needed for preserveModules: https://github.com/developit/microbundle/issues/655)
- tsdx (preserveModules can be hacked, but not officially supported: https://github.com/formium/tsdx/issues/276)

bundlers toolip report
https://bundlers.tooling.report/

Comparison of bundlers
https://bundlers.tooling.report/transformations/dead-code/

https://blog.theodo.com/2021/04/library-tree-shaking/

https://developers.google.com/web/fundamentals/performance/optimizing-javascript/tree-shaking
