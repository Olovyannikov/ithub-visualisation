import { AppShell } from "@mantine/core";
import { createRoot } from "react-dom/client";

import { Conclusions } from "@/widgets/Conclusions";
import { ExpansionOnPresence } from "@/widgets/ExpansionOnPresence";
import { Keys } from "@/widgets/Keys";
import { Problems } from "@/widgets/Problems";
import { SalesChannels } from "@/widgets/SalesChannels";
import { StatsSegments } from "@/widgets/StatsSegments";
import { Structure } from "@/widgets/Structure";

import Wrapper from "../../renderer/+Wrapper";

export default function Page() {
	return (
		<Wrapper>
			<AppShell padding="md">
				<AppShell.Main>
					<Keys />
					<StatsSegments />
					<ExpansionOnPresence />
					<SalesChannels />
					<Structure />
					<Problems />
					<Conclusions />
				</AppShell.Main>
			</AppShell>
		</Wrapper>
	);
}

const root = createRoot(document.getElementById("app") as HTMLElement);
root.render(<Page />);
