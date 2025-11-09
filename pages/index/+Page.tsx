import { AppShell } from "@mantine/core";

import { Conclusions } from "@/widgets/Conclusions";
import { ExpansionOnPresence } from "@/widgets/ExpansionOnPresence";
import { Keys } from "@/widgets/Keys";
import { Problems } from "@/widgets/Problems";
import { SalesChannels } from "@/widgets/SalesChannels";
import { StatsSegments } from "@/widgets/StatsSegments";
import { Structure } from "@/widgets/Structure";

export default function Page() {
	return (
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
	);
}
