import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { preprocessMeltUI, sequence } from '@melt-ui/pp';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: sequence([
    vitePreprocess(),
    preprocessMeltUI() // ¡Agrega Melt UI al final!
  ]),

  kit: {
    adapter: adapter({
      out: 'build'
    })
  }
};

export default config;
