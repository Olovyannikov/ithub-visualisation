import type { PageContext } from "vike/types";

import { allSettled, fork } from "effector";

export function onBeforeRenderClient(pageContext: PageContext) {
	const { scopeValues } = pageContext;
	const scope = fork({ values: scopeValues });

	const firePageStarted = async () => {
		const { pageStarted } = pageContext.config;
		if (pageStarted) {
			await allSettled(pageStarted, { scope, params: pageContext });
		}
	};
	firePageStarted().catch(() => {
		throw new Error("Page start failed");
	});

	// https://vike.dev/pageContext
	if (!("scope" in pageContext)) {
		return {
			pageContext: {
				// https://effector.dev/en/api/effector/fork/
				scope,
			},
		};
	}
}
