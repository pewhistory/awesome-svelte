import sveltePreprocess from "svelte-preprocess";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapter from "@sveltejs/adapter-static";

export default {
    // added these lines:
    preprocess: [
        vitePreprocess(),
        sveltePreprocess({
            postcss: true,
        }),
    ],
    kit: {
        // hydrate the <div id="svelte"> element in src/app.html
        target: "#svelte",
        adapter: adapter({
            // default options are shown
            pages: "build",
            assets: "build",
            fallback: null,
        }),
    },
};
