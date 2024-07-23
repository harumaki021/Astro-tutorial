import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  server: {
    hmr: true // Hot Module Replacement (ホットモジュールリプレースメント) を有効にします
  },
  site: "https://example.com",
  integrations: [preact()]
});