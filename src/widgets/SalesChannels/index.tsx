import { BarChart } from "@mantine/charts";
import { Group, List, ListItem } from "@mantine/core";

import { SlideWrapper } from "@/shared/ui";

export const data = [
	{ type: "Маркетплейсы", Количество: 910 },
	{
		type: "Соцсети/сайты объявлений",
		Количество: 140,
	},
	{ type: "Интернет-магазины", Количество: 80 },
	{ type: "Офлайн-точки", Количество: 40 },
];

export const SalesChannels = () => {
	return (
		<SlideWrapper title="💰 КАНАЛЫ ПРОДАЖ">
			<Group justify="space-evenly">
				<List>
					<ListItem>
						<b>91%</b> — Маркетплейсы как основной канал
					</ListItem>
					<ListItem>
						<b>14%</b> — Соцсети/сайты объявлений (доп.)
					</ListItem>
					<ListItem>
						<b>8%</b> — Интернет-магазины (доп.)
					</ListItem>
					<ListItem>
						<b>4%</b> — Офлайн-точки (доп.)
					</ListItem>
				</List>
				<BarChart
					w={700}
					h={500}
					data={data}
					dataKey="type"
					getBarColor={(value) => (value > 700 ? "teal.8" : "red.8")}
					series={[{ name: "Количество", color: "gray.6" }]}
				/>
			</Group>
		</SlideWrapper>
	);
};
