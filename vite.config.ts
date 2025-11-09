import { fileURLToPath, URL } from "node:url";

import vike from "vike/plugin";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import vercel from "vite-plugin-vercel";

export default defineConfig(({ mode }) => {
	const isDev = mode === "development";

	return {
		plugins: [vike(), react(), svgr(), vercel()],
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
