import { fileURLToPath, URL } from "node:url";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig(({ mode }) => {
	const isDev = mode === "development";

	return {
		plugins: [react(), svgr()],
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
