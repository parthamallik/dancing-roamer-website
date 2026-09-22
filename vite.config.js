import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Base is "/" because the site is deployed on a custom domain
// (dancingroamer.in) via the CNAME in /public, not a github.io subpath.
// If you deploy to https://<user>.github.io/dancing-roamer-website/
// instead (no custom domain yet), change this to "/dancing-roamer-website/".
export default defineConfig({
  base: "/",
  plugins: [react()],
});
