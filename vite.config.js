import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Base is "/" because the site is served from the dancingroamer.in
// custom domain root (see public/CNAME), not a github.io subpath.
export default defineConfig({
  base: "/",
  plugins: [react()],
});
