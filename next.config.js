/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    externalDir: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /component-data.*\.vue/,
      use: "raw-loader",
    });

    config.module.rules.push({
      test: /component-data.*\.html/,
      use: "raw-loader",
    });

    config.module.rules.push({
      test: /component-data.*\.js/,
      use: "raw-loader",
    });

    return config;
  },
};

module.exports = nextConfig;
