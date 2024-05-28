/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
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
