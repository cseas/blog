---
title: "[WIP] Linting npm packages"
date: "2023-03-30"
---

Publishing an npm package is a very different experience from writing locally shared code and can come with a lot of daunting challenges. Thankfully, there are multiple tools out there today that help us validate our published package.

1. [Publint][1]: This will help identify any errors in the format of your published package, including checking that your package.json metadata is correct and the published files and entrypoints are in a format that will work for various consumers.

2. [Are The Types Wrong][2]: Shipping types with an npm package has become a common requirement as the JavaScript ecosystem has reached wide adoption of TypeScript. This tool by the TypeScript team helps us identify how different moduleResolution settings in the consumer projects will resolve the types from our package and whether any of them might break.

3. [BundlePhobia][3]: Bundle size is often one of the primary concerns of a developer while choosing between two npm packages. This tool helps us analyze the bundle size of our shipped npm package.

[1]: https://publint.dev/
[2]: https://arethetypeswrong.github.io/
[3]: https://bundlephobia.com/
