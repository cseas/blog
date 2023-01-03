const withTM = require("next-transpile-modules")(["hazel-ui"]);

module.exports = withTM({
  // basePath: "/blog", // when deploying to sub-path
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
});
