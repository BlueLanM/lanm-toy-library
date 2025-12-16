import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/lanm-toy-library/",
	build: {
		outDir: "docs"
	},
	plugins: [react()]
});