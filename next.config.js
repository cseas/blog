/** @type {import('next').NextConfig} */
module.exports = {
  // basePath: "/blog", // when deploying to sub-path

  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },

  experimental: {
    appDir: true,
  },
};
