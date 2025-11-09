import type { PropsWithChildren } from "react";
import { usePageContext } from "vike-react/usePageContext";

import { fork } from "effector";
import { Provider } from "effector-react";

export function WrapperEffector({ children }: PropsWithChildren) {
	const { scopeValues } = usePageContext();
	const scope = fork({ values: scopeValues });

	return <Provider value={scope}>{children}</Provider>;
}
