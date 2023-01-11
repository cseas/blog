/** @type {import('next').NextConfig} */

module.exports = {
  // basePath: "/blog", // when deploying to sub-path
  compiler: {
    // TODO: Remove this
    styledComponents: true,
  },

  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
};
