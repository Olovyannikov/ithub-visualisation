import type { PropsWithChildren } from "react";

import { NavigationProgress } from "@mantine/nprogress";

import { ThemeProvider, WrapperEffector } from "@/app/providers";

import "@/app/assets/styles/index.css";

export default function Wrapper({ children }: PropsWithChildren) {
	return (
		<ThemeProvider>
			<NavigationProgress aria-label="Прогресс навигации" color="violet" />
			<WrapperEffector>{children}</WrapperEffector>
		</ThemeProvider>
	);
}
