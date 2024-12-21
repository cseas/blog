---
title: "How to bundle a component library for NPM distribution"
date: "2024-12-22"
---

> Pre-read: [What is Tree Shaking?][5]

With the [state of the JavaScript ecosystem][1], it can be a daunting task to publish a library. Let's look at the various options available today.

The bundlers available for packaging your library largely fall under one of 2 categories:

1. **Full fledged bundler:**

   These consist of bundlers like Webpack and Rollup. These give you maximum flexibiltiy and control over your build process and output, with a huge community for support and a large number of plugins available.

   The caveat with these is that it can take a lot of time to get the right setup with these, specially for beginners, and the elaborate config needed to set up a build can be overwhelming to understand.

2. **Zero-config bundler:**

   These bundlers are often an abstraction layer on top of existing tools in the ecosystem and promise to hide away the complexity of full fledged bundlers.

   Some popular options are:

   - Parcel
   - Microbundle
   - Tsdx
   - Tsup

   While these provide a great default config that would work for most libraries, the limited amount of config options can become a hurdle as you move on to advanced requirements for your bundling pipeline.

## Webpack

While webpack is arguably the most popular build tool for web applications, it falls short in features required for building libraries. Specifically, output type `"module"`, that is required to enable tree shaking for your library consumers, is [not stable yet][2].

## Rollup

Rollup is ideal for publishing libraries and provides maximum configurability. The `preserveModules` option is often used by library authors to package their library in a format best suited for consumption by the bundler of the consumer application. However, keep in mind that this option applies tree shaking to the library build output so it's recommended to [designate all files explicitly as entry points][3] instead.

## Parcel

Parcel is a zero-config bundler that has documented support to [improve tree-shaking][4] for your library's consumers.
However, there are some open bugs that could be a deal breaker for you:

- Bug with re-exports: [https://github.com/parcel-bundler/parcel/issues/5655](https://github.com/parcel-bundler/parcel/issues/5655)
- Doesn't support type checking: [https://github.com/parcel-bundler/parcel/issues/4022](https://github.com/parcel-bundler/parcel/issues/4022)

## Microbundle

Microbundle is yet another zero-config bundler that promises to simplify the library publishing process. It is built on top of Rollup.

However, it doesn't support customising any Rollup options which you might need for improving tree shaking for your library consumers, specially when you're building something with multiple isolated exports e.g. a component library.

## Tsdx

Tsdx is a popular zero-config CLI for TypeScript package development. However, it's not maintained anymore and is not recommended for use. Rollup's preserveModules is also not officially supported: [https://github.com/formium/tsdx/issues/276](https://github.com/formium/tsdx/issues/276).

> Have questions? [Discuss on Twitter](https://x.com/cse_as)

### References

- Bundlers tooling report: [https://bundlers.tooling.report/](https://bundlers.tooling.report/)
- Comparison of bundlers: [https://bundlers.tooling.report/transformations/dead-code/](https://bundlers.tooling.report/transformations/dead-code/)
- [How To Make Tree Shakeable Libraries](https://blog.theodo.com/2021/04/library-tree-shaking/)

[1]: https://x.com/acemarke/status/1443650054187847681
[2]: https://webpack.js.org/configuration/output/#type-module
[3]: https://rollupjs.org/configuration-options/#output-preservemodules
[4]: https://parceljs.org/getting-started/library/#improving-tree-shaking
[5]: https://developers.google.com/web/fundamentals/performance/optimizing-javascript/tree-shaking
