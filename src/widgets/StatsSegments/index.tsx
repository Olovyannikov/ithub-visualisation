import { Box, Group, Progress, SimpleGrid, Text } from "@mantine/core";

import { SlideWrapper } from "@/shared/ui";

import classes from "./StatsSegments.module.css";

const data = [
	{ label: "Wildberries", part: 73, color: "#3335CF" },
	{ label: "Ozon", part: 18, color: "#03141a" },
	{ label: "Другие", part: 9, color: "#4fcdf7" },
];

const segments = data.map((segment) => (
	<Progress.Section
		value={segment.part}
		color={segment.color}
		key={segment.color}
	>
		{segment.part > 10 && <Progress.Label>{segment.part}%</Progress.Label>}
	</Progress.Section>
));

const descriptions = data.map((stat) => (
	<Box
		key={stat.label}
		style={{ borderBottomColor: stat.color }}
		className={classes.stat}
	>
		<Group justify="space-between" align="flex-end" gap={0}>
			<Text tt="uppercase" fz="xs" c="dimmed" fw={700}>
				{stat.label}
			</Text>
			<Text c={stat.color} fw={700} size="sm" className={classes.statCount}>
				{stat.part}%
			</Text>
		</Group>
	</Box>
));

export const StatsSegments = () => {
	return (
		<SlideWrapper title="🚀 СТАРТ НА МАРКЕТПЛЕЙСАХ">
			<Text fw="bold" mb="sm">
				Эффект "снежного кома"
			</Text>
			<Text>
				Окружение пользуется → Кажется популярным → Выбирают для старта
			</Text>
			<Progress.Root
				size={34}
				classNames={{ label: classes.progressLabel }}
				mt={40}
			>
				{segments}
			</Progress.Root>
			<SimpleGrid cols={{ base: 1, xs: 3 }} mt="xl">
				{descriptions}
			</SimpleGrid>
		</SlideWrapper>
	);
};
