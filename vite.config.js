import { resolve } from "path";
// import { readFileSync } from "fs";
// import { cwd } from "process";

// const pkg = JSON.parse(readFileSync(join(cwd(), "package.json")));

/** @type { import('vite').UserConfig } */
export default {
	// https://vitejs.dev/config/

	root: process.cwd(),
	base: "/",
	mode: "development",
	// define: "",
	publicDir: "static",

	plugins: [require("@svitejs/vite-plugin-svelte")({})],

	resolve: {
		alias: {
			$static: resolve("./static"),
			$icons: resolve("./static/images/icons"),
			$src: resolve("./src"),
			$components: resolve("./src/components"),
			$pages: resolve("./src/pages"),
			$styles: resolve("./src/styles"),
		},
		dedupe: ["@roxi/routify"],
		// conditions: [""],
		// mainFields: ["module", "jsnext:main", "jsnext"],
		extensions: [".mjs", ".js", ".json", ".svelte"],
	},

	// css: {
	// 	modules: {},

	// 	postcss: {},

	// 	preprocessorOptions: {},
	// },

	// json: {
	// 	namedExports: true,
	// 	stringify: false,
	// },

	// esbuild: {},

	//  assetsInclude: "",

	// logLevel: "info",

	// clearScreen: true,

	server: {
		// host: "",
		port: 8080,
		// https: {
		// 	cert: readFileSync("cert.pem"),
		// 	key: readFileSync("key.pem"),
		// },
		// open: false,
		// proxy: {},
		// cors: {},
		// force: true,
		// hmr: true,
		// watch: {},
	},

	build: {
		// target: "esnext",
		polyfillDynamicImport: true,
		outDir: "build",
		// assetsDir: "assets",
		assetsInlineLimit: 4096,
		// cssCodeSplit: true,
		// rollupOptions: {},
		// commonjsOptions: {},
		// lib: ["es", "umd"],
		// manifest: false,
		// minify: "esbuild",
		// terserOptions: {},
		// cleanCssOptions: {},
		write: true,
		emptyOutDir: true,
		brotliSize: true,
		// chunkSizeWarningLimit: 500,
	},

	optimizeDeps: {
		// entries: [],
		exclude: ["@roxi/routify"],
		// include: [],
	},

	ssr: {
		// external: [""],
		// noExternal: Object.keys(pkg.dependencies || {}),
	},
};
