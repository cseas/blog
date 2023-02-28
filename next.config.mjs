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
    // allow .js file extension in imports for moduleResolution: node16
    // https://github.com/vercel/next.js/discussions/41189#discussioncomment-3806170
    config.resolve.extensionAlias = {
      ".js": [".js", ".ts", ".tsx"],
    };
    config.resolve.fallback = { fs: false }; // for using 'fs' import
    return config;
  },

  experimental: {
    appDir: true,
  },
};
