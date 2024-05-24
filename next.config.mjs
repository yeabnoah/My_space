/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        port: "",
        pathname: "/736x/2d/5d/30/**",
      },
    ],
    // domains: ["https://i.pinimg.com"],
  },
};

export default nextConfig;

// https://i.pinimg.com/736x/2d/5d/30/2d5d30e77694c012fa18a194640f44e1.jpg
