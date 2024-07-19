import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  server: {
    hmr: true // Hot Module Replacement (ホットモジュールリプレースメント) を有効にします
  }
});
