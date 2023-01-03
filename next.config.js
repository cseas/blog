const withTM = require("next-transpile-modules")(["hazel-ui"]);

/** @type {import('next').NextConfig} */
module.exports = withTM({
  // basePath: "/blog", // when deploying to sub-path
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
});
