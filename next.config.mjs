/** @type {import('next').NextConfig} */

//get images from the github repo
const nextConfig = {

    images: {
    domains: ['res.cloudinary.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname:'/brandcell/brandcell-blog-2024/main/images/**',
      },
    ],
  },


};

export default nextConfig;
