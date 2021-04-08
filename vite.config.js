import { readFileSync } from "fs";
import { cwd } from "process";

/** @type { import('vite').UserConfig } */
export default {
	// https://vitejs.dev/config/

	root: cwd(),
	base: "/",
	mode: "development",
	publicDir: "static",

	plugins: [
		require("@sveltejs/vite-plugin-svelte")(require("./svelte.config.js")),
	],

	css: {
		postcss: require("./postcss.config.js"),
	},

	resolve: {
		alias: require("vite-aliases").getAliases({
			// https://github.com/subwaytime/vite-aliases

			// Prefix Symbol for the aliases
			prefix: "$",
		}),
		dedupe: ["@roxi/routify"],
		extensions: [".mjs", ".js", ".json", ".svelte"],
	},

	server: {
		port: 8080,
		https: {
			cert: readFileSync("server.cert"),
			key: readFileSync("server.key"),
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

	optimizeDeps: {
		exclude: ["@roxi/routify"],
	},

	ssr: {
		noExternal: Object.keys(require("./package.json").dependencies || {}),
	},
};
