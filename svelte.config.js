import adapter from "@sveltejs/adapter-node";
import { mdsvex } from "mdsvex";
import path from "path";
import preprocess from "svelte-preprocess";
import mdsvexConfig from "./mdsvex.config.cjs";
import postcssConfig from "./postcss.config.cjs";
import { config as dotenvConfig } from "dotenv";

dotenvConfig();

/** @type {import("@sveltejs/kit").Config} */
const svelteConfig = {
	// options passed to svelte.compile (https://svelte.dev/docs#svelte_compile)
	compilerOptions: null,

	// an array of file extensions that should be treated as Svelte components
	extensions: [".json", ".svelte", ...mdsvexConfig.extensions],

	preprocess: [
		// https://github.com/sveltejs/svelte-preprocess
		preprocess({
			defaults: { style: "postcss" },
			postcss: postcssConfig,
		}),
		mdsvex(mdsvexConfig),
	],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: "#svelte",
		adapter: adapter(),
		prerender: {
			force: true,
		},

		vite: {
			resolve: {
				alias: {
					$data: path.resolve("src/data"),
					$styles: path.resolve("src/styles"),
				},
			},

			build: {
				target: "esnext",
				outDir: "build",
				assetsDir: "assets",
				assetsInlineLimit: 4096,
				cssCodeSplit: true,
				manifest: true,
				minify: "esbuild",
				write: true,
				emptyOutDir: true,
				brotliSize: true,
				chunkSizeWarningLimit: 150,
			},
		},
	},
};

export default svelteConfig;
