import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Self-hosted in a container (see Dockerfile): emit a minimal standalone
  // server under .next/standalone that runs with `node server.js`.
  output: "standalone",
};

export default nextConfig;
