---
title: "Why NPM library authors should care about tree shaking"
date: "2026-05-01"
cover: "/covers/npm.webp"
---

If you publish an npm library, your job isn't just to ship code that works. It's to ship code that lets your consumers ship as little of it as possible. That's what tree shaking is.

The bundler in the consumer app statically analyzes your ES modules and drops anything they don't import. The [webpack tree shaking guide][1] is a good refresher on how it works.

The trap a lot of library authors fall into is reaching for a bundler by default. "I'm publishing a library, surely I need to bundle it." Often you don't, and bundling can actively make things worse for the people using your library.

## Bundling can defeat tree shaking

When you bundle, you collapse your library's many small modules into one (or a few) flat files. Webpack [doesn't tree shake flat files well][2] so when everything lives in a single module, the bundler loses the per-file boundaries it relied on to decide what's safe to drop. The webpack maintainers' [advice is clear][3]: don't bundle your library. Transpile your source files and ship them with the module structure intact, and let the consumer's bundler do its job.

This matters most for libraries with many independent exports: utility kits, icon sets, and especially **component libraries**. If a consumer imports one `Button`, they shouldn't pay the cost of every other component you wrote. A bundled build makes that difficult to guarantee. A preserved-modules build makes it the default.

## What "don't bundle" looks like in practice

- Author your library in ES modules (`import` / `export`), not CommonJS.
- Mark side-effect-free files with `"sideEffects": false` (or list the few files that do have side effects) in `package.json`, so consumer bundlers know it's safe to drop unused imports.
- Transpile each source file to its own output file instead of bundling them together. In Rollup, this is what `output.preserveModules` is for, though it's worth [declaring entry points explicitly][4] instead, since `preserveModules` applies tree shaking to your own output and can quietly drop code you wanted to keep.
- Ship `.mjs` / `"type": "module"` so consumers' bundlers actually see the ESM version, not a CJS fallback.

There are real cases for bundling a library: a tiny single-purpose utility, or something meant to be loaded directly in a browser via a script tag. But for the broad case, and especially for component libraries, transpiling and shipping the source structure is friendlier to your consumers than any clever bundle you could produce.

If you're picking a tool for this, I went deeper into the trade-offs between webpack, Rollup, Parcel, Microbundle, and Tsdx in [How to bundle a component library for NPM distribution][5].

Have questions? [Discuss on Twitter][6]

[1]: https://webpack.js.org/guides/tree-shaking/
[2]: https://github.com/webpack/webpack/issues/9337#issuecomment-507179765
[3]: https://github.com/webpack/webpack/issues/9337#issuecomment-524966201
[4]: https://rollupjs.org/configuration-options/#output-preservemodules
[5]: /posts/npm-library
[6]: https://twitter.com/cse_as
