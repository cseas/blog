/** @type {import('next').NextConfig} */
module.exports = {
  // basePath: "/blog", // when deploying to sub-path

  compiler: {
    // Enables the styled-components SWC transform
    // Removing this will break Typography in PostPages
    // This can be safely removed once styled-components is removed from hazel-ui
    styledComponents: true,
  },

  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },

  experimental: {
    appDir: true,
  },
};
