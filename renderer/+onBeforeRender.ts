import { redirect } from "vike/abort";
import type { PageContext } from "vike/types";

import { allSettled, fork, serialize } from "effector";

import { $redirectTo } from "@/shared/routing";
import { appService } from "@/shared/services";

// https://vike.dev/onBeforeRender
export const onBeforeRender = async (pageContext: PageContext) => {
	// https://vike.dev/pageContext
	const { pageInitiated } = pageContext.config;

	// https://effector.dev/en/api/effector/fork/
	const scope = fork();

	// https://effector.dev/en/api/effector/allsettled/#methods-allSettled-unit-scope-params
	await allSettled(appService.appStarted, { scope });

	if (pageInitiated) {
		await allSettled(pageInitiated, { scope, params: pageContext });
	}

	// https://effector.dev/en/api/effector/scope/#methods-getState
	const redirectTo = scope.getState($redirectTo);
	if (redirectTo) {
		// https://vike.dev/redirect
		throw redirect(redirectTo);
	}

	return {
		pageContext: {
			scope,
			// https://effector.dev/en/api/effector/serialize
			scopeValues: serialize(scope),
		},
	};
};
