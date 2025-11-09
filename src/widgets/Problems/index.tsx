import { FunnelChart } from "@mantine/charts";
import { Group, List, ListItem, Stack, Text, Title } from "@mantine/core";

import { SlideWrapper } from "@/shared/ui";

export const Problems = () => {
	return (
		<SlideWrapper title="⚠️ ГЛАВНЫЕ ПРОБЛЕМЫ">
			<Group justify="space-around">
				<Stack>
					<Title order={3}>Топ-3 сложности</Title>
					<List type="ordered">
						<ListItem>
							<b>КОНКУРЕНЦИЯ</b> — 51% 🔴🔴🔴🔴🔴
							<br /> Каждый второй борется за место под солнцем
						</ListItem>
						<ListItem>
							<b>ПРОДВИЖЕНИЕ</b> — 49% 🟠🟠🟠🟠🟠
							<br /> Сложно выделиться среди конкурентов{" "}
						</ListItem>
						<ListItem>
							<b>КОМИССИИ</b> — 44% 🟡🟡🟡🟡
							<br /> Высокие расходы съедают маржу
						</ListItem>
					</List>
					<Text fw="bold">ТАКЖЕ:</Text>
					<List>
						<ListItem>Проблемы с техподдержкой </ListItem>
						<ListItem>Нехватка аналитики</ListItem>
						<ListItem>Сложности с анализом ниш</ListItem>
					</List>
				</Stack>
				<FunnelChart
					size={500}
					labelsPosition="inside"
					withLabels
					data={[
						{ name: "Конкуренция", value: 510, color: "red" },
						{ name: "Продвижение", value: 490, color: "orange.6" },
						{ name: "Комисии", value: 440, color: "yellow.6" },
					]}
				/>
			</Group>
		</SlideWrapper>
	);
};
