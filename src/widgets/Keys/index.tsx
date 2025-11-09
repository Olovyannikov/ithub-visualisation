import { Container, List, Text, ThemeIcon, Title } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

import Logo from "./image.svg?react";
import classes from "./Keys.module.css";

export function Keys() {
	return (
		<Container size="md">
			<div className={classes.inner}>
				<div className={classes.content}>
					<Title className={classes.title}>
						<span className={classes.highlight}>Wildberries</span> — <br />
						стартовая площадка для большинства!
					</Title>
					<Text c="dimmed" mt="md">
						Продавцы расширяются на другие маркетплейсы <br /> в среднем за 2
						года
					</Text>

					<List
						mt={30}
						spacing="sm"
						size="sm"
						icon={
							<ThemeIcon color="#3335CF" size={20} radius="xl">
								<IconCheck size={12} stroke={1.5} />
							</ThemeIcon>
						}
					>
						<List.Item>
							<b>97% это микробизнес</b> – компания до 5 человек или соло
						</List.Item>
						<List.Item>
							<b>Маркетплейсы</b> – основной канал для <b>9 из 10</b> продавцов
						</List.Item>
						<List.Item>
							<b>Конкуренция и продвижение</b> – главные вызовы рынка
						</List.Item>
					</List>
				</div>
				<Logo className={classes.image} />
			</div>
		</Container>
	);
}
