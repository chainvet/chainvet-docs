import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/**
 * Static export for GitHub Pages (custom domain docs.chainvet.dev, served at root).
 * No `basePath` is needed because the site lives at the domain root.
 * @type {import('next').NextConfig}
 */
const config = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default withMDX(config);
