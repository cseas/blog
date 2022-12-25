module.exports = {
  // basePath: "/blog", // when deploying to sub-path
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
};
