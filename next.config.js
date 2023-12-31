/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.ipfs.nftstorage.link'
      },
    ],
  },
}

module.exports = nextConfig
