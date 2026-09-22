import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// TEMPORARY: base is the github.io subpath so the site can be previewed at
// https://parthamallik.github.io/dancing-roamer-website/ before the
// dancingroamer.in custom domain is connected. The public/CNAME file is
// still in place for later. Once DNS for dancingroamer.in points at GitHub
// Pages, change this back to "/" (root), since a custom domain serves the
// site from its root, not this subpath.
export default defineConfig({
  base: "/dancing-roamer-website/",
  plugins: [react()],
});
