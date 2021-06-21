import adapterStatic from "@sveltejs/adapter-static";
import adapterVercel from "@sveltejs/adapter-vercel";
import { config as dotenvConfig } from "dotenv";
import { mdsvex } from "mdsvex";
import { resolve } from "path";
import preprocess from "svelte-preprocess";
import tsconfigPaths from "vite-tsconfig-paths";
import mdsvexConfig from "./mdsvex.config.cjs";
import postcssConfig from "./postcss.config.cjs";

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
		hydrate: true,
		prerender: {
			crawl: true,
			force: true,
			enabled: true,
		},
		ssr: true,

		vite: {
			plugins: [
				tsconfigPaths({
					extensions: [
						".ts",
						".js",
						".svelte",
						".json",
						".css",
						mdsvexConfig.svelte,
					],
				}),
			],
			resolve: {
				alias: {
					$styles: resolve("src/styles"),
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
