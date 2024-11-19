/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Add a custom rule for handling SVG files with @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
