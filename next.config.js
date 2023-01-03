/** @type {import('next').NextConfig} */

module.exports = {
  // basePath: "/blog", // when deploying to sub-path
  compiler: {
    styledComponents: true,
  },

  transpilePackages: ["hazel-ui"],

  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
};
