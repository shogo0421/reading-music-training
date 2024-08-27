import path from "node:path";
import react from "@vitejs/plugin-react-swc";
import devcert from "devcert";
import type { UserConfigExport } from "vite";

export default async (): Promise<UserConfigExport> => {
	const { key, cert } = await devcert.certificateFor("localhost");

	return {
		root: "./",
		plugins: [react()],
		resolve: {
			alias: {
				"@/": path.join(__dirname, "./src/"),
			},
		},
		server: {
			open: true,
			https: {
				key,
				cert,
			},
		},
	};
};
