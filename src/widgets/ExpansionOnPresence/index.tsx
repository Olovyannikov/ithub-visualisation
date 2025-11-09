import { AreaChart } from "@mantine/charts";
import { List, ListItem, Text } from "@mantine/core";

import { SlideWrapper } from "@/shared/ui";

export const data = [
	{
		date: "0",
		Wildberries: 0,
		Ozon: 0,
	},
	{
		date: "1 год",
		Wildberries: 7218,
		Ozon: 2782,
	},
	{
		date: "2.5 года",
		Wildberries: 13742,
		Ozon: 12678,
	},
	{
		date: "3 года",
		Wildberries: 15782,
		Ozon: 14300,
	},
];

export const ExpansionOnPresence = () => {
	return (
		<SlideWrapper title="📈 РАСШИРЕНИЕ ПРИСУТСТВИЯ">
			<Text>
				<List>
					<ListItem>
						<b>Через 1 год:</b> 25% на нескольких площадках
					</ListItem>
					<ListItem>
						<b>Через 2 года:</b> 50% на нескольких площадках
					</ListItem>
				</List>
			</Text>
			<Text my="5xl">
				<b>Особенность продавцов Wildberries:</b>
				<List>
					<ListItem>
						<b>75%</b> остаются только на WB через год
					</ListItem>
					<ListItem>
						<b>87%</b> выбирают Ozon как вторую площадку
					</ListItem>
				</List>
			</Text>
			<AreaChart
				h={300}
				withLegend
				data={data}
				dataKey="date"
				series={[
					{ name: "Wildberries", color: "pink.6" },
					{ name: "Ozon", color: "blue.6" },
				]}
				curveType="natural"
			/>
		</SlideWrapper>
	);
};
