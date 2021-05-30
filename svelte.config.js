import path from "path";
import adapterVercel from "@sveltejs/adapter-vercel";
import adapterStatic from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";
import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.cjs";
import postcssConfig from "./postcss.config.cjs";
import { config as dotenvConfig } from "dotenv";

const isProduction = process.env.NODE_ENV === "production";

if (!isProduction) {
	dotenvConfig();
}

/** @type {import("@sveltejs/kit").Config} */
const svelteConfig = {
	// options passed to svelte.compile (https://svelte.dev/docs#svelte_compile)
	compilerOptions: null,

	// an array of file extensions that should be treated as Svelte components
	extensions: [".svelte", ...mdsvexConfig.extensions],

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
		adapter: isProduction ? adapterVercel() : adapterStatic(),
		prerender: {
			force: true,
		},

		vite: {
			resolve: {
				alias: {
					$data: path.resolve("src/data"),
					$scripts: path.resolve("src/scripts"),
					$styles: path.resolve("src/styles"),
					$types: path.resolve("src/types"),
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
