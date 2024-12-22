/** @type {import('next').NextConfig} */
export default {
  // basePath: "/blog", // when deploying to sub-path

  compiler: {
    // Enables the styled-components SWC transform
    // Removing this will break Typography in PostPages
    // This can be safely removed once styled-components is removed from hazel-ui
    styledComponents: true,
  },

  webpack: (config) => {
    config.resolve.fallback = { fs: false }; // for using 'fs' import
    return config;
  },

  // Todo: This is temporary until the below issue is resolved
  // https://github.com/vercel/next.js/issues/46267
  typescript: { ignoreBuildErrors: true },

  // Todo: check why css is not loading from hazel-ui
  transpilePackages: ["hazel-ui"],
};
