/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required if you are using the next/image component
  },
};

module.exports = nextConfig; 
// Note: Use 'export default nextConfig;' if your file ends in .mjs

// const nextConfig = {}

// module.exports = nextConfig