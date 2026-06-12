// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually:
// - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro, etc.

import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: true,

  tanstackStart: {
    server: { entry: "server" },
  },
});
