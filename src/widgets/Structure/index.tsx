import { DonutChart } from "@mantine/charts";
import {
	Badge,
	Box,
	Group,
	Paper,
	Progress,
	Stack,
	Text,
	Title,
} from "@mantine/core";

import { SlideWrapper } from "@/shared/ui";

export const data = [
	{ name: "Работают в одиночку", value: 810, color: "indigo.6" },
	{ name: "Команда до 5 человек", value: 160, color: "yellow.6" },
	{ name: "Команда более 5 человек", value: 30, color: "teal.6" },
];

export const Structure = () => {
	return (
		<SlideWrapper title="👥 СТРУКТУРА БИЗНЕСА">
			<Group gap="xl" align="center">
				<DonutChart
					withLabelsLine
					labelsType="percent"
					withLabels
					data={data}
					size={300}
					thickness={40}
				/>
				<Paper shadow="sm" p="md" radius="md" withBorder>
					<Stack>
						<Group gap="md" align="center">
							<Badge color="indigo.6" circle />
							<Text>
								<b>81%</b> работают в одиночку
							</Text>
						</Group>
						<Group gap="md" align="center">
							<Badge color="yellow.6" circle />
							<Text>
								<b>16%</b> команда до 5 человек
							</Text>
						</Group>
						<Group gap="md" align="center">
							<Badge color="teal.6" circle />
							<Text>
								<b>3%</b> команда более 5 человек
							</Text>
						</Group>
					</Stack>
				</Paper>
			</Group>
			<Box mt="xl">
				<Title mb="xl" order={3}>
					Роль владельца меняется с ростом:
				</Title>
				<Stack mb="xl" gap="sm">
					<Title mb="md" order={4}>
						Команда до 5 человек
					</Title>
					<Stack>
						<Text>83% – Операционка ⚙️</Text>
						<Progress value={83} color="orange" size="xl" h={20} animated />
					</Stack>
					<Stack>
						<Text>76% – Закупки 🛒</Text>
						<Progress value={76} color="blue" size="xl" h={20} animated />
					</Stack>
					<Stack>
						<Text>68% – Финансы 💰</Text>
						<Progress value={68} color="green" size="xl" h={20} animated />
					</Stack>
				</Stack>
				<Stack>
					<Title mb="md" order={4}>
						Команда 5+ человек
					</Title>
					<Stack>
						<Text>63% – Привлечение инвестиций 💼</Text>
						<Progress value={63} color="yellow" size="xl" h={20} animated />
					</Stack>
				</Stack>
			</Box>
		</SlideWrapper>
	);
};
