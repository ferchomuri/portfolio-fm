import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "*.trycloudflare.com",
    "*.ngrok-free.dev",
    "*.ngrok.io",
    "*.localtunnel.me",
    ...(process.env.ALLOWED_DEV_ORIGINS ? process.env.ALLOWED_DEV_ORIGINS.split(",") : [])
  ],
};

export default nextConfig;
