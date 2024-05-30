/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d22e6o9mp4t2lx.cloudfront.net",
        port: "",
        pathname: "/cms/**",
      },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      {
        protocol: "https",
        hostname: "i.ibb.co",
        port: "",
        pathname: "/nCNGk7F/**",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        port: "",
        pathname: "/736x/2d/5d/30/**",
      },
    ],
  },
};

export default nextConfig;
