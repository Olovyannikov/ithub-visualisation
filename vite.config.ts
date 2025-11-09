import { fileURLToPath, URL } from "node:url";

import vikeRoutegen from "@blankeos/vike-routegen";
import devServer from "@hono/vite-dev-server";
import react from "@vitejs/plugin-react";
import vike from "vike/plugin";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import vercel from "vite-plugin-vercel";

export default defineConfig(({ mode }) => {
	const isDev = mode === "development";

	return {
		plugins: [
			vike(),
			react(),
			vikeRoutegen(),
			svgr(),
			vercel(),
			devServer({
				entry: "./entry.ts",
				exclude: [
					/^\/@.+$/,
					/.*\.(ts|tsx|vue)($|\?)/,
					/.*\.(s?css|less)($|\?)/,
					/^\/favicon\.ico$/,
					/.*\.(svg|png)($|\?)/,
					/^\/(public|assets|static)\/.+/,
					/^\/node_modules\/.*/,
				],
				injectClientScript: false,
			}),
		],
		css: {
			modules: {
				generateScopedName: isDev
					? "[folder]__[local]_[hash:base64:5]"
					: "[hash:base64:5]",
			},
		},
		ssr: {},
		resolve: {
			alias: {
				"@": fileURLToPath(new URL("./src", import.meta.url)),
			},
		},
	};
});
