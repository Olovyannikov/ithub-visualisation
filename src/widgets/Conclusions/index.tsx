import { Box, List, ListItem, Stack, Title } from "@mantine/core";

import { Dots, SlideWrapper } from "@/shared/ui";

import classes from "./Conclusions.module.css";

export const Conclusions = () => {
	return (
		<SlideWrapper title=" 🎓 ИТОГОВЫЕ ВЫВОДЫ">
			<Dots className={classes.dots} style={{ right: 0, top: 60 }} />
			<Dots className={classes.dots} style={{ right: 200, top: 60 }} />
			<Dots className={classes.dots} style={{ right: 400, top: 60 }} />

			<Dots className={classes.dots} style={{ right: 0, top: 120 }} />
			<Dots className={classes.dots} style={{ right: 200, top: 120 }} />
			<Dots className={classes.dots} style={{ right: 400, top: 120 }} />

			<Dots className={classes.dots} style={{ right: 0, top: 300 }} />
			<Dots className={classes.dots} style={{ right: 200, top: 300 }} />
			<Dots className={classes.dots} style={{ right: 400, top: 300 }} />

			<Dots className={classes.dots} style={{ right: 200, top: 240 }} />
			<Dots className={classes.dots} style={{ right: 400, top: 240 }} />
			<Dots className={classes.dots} style={{ right: 600, top: 240 }} />

			<Dots className={classes.dots} style={{ right: 200, top: 480 }} />
			<Dots className={classes.dots} style={{ right: 400, top: 480 }} />
			<Dots className={classes.dots} style={{ right: 600, top: 480 }} />

			<Stack gap="sm">
				<Box>
					<Title order={3} mb="md">
						Портрет типичного продавца:
					</Title>
					<List icon="✅">
						<ListItem>Стартует на Wildberries</ListItem>
						<ListItem>Работает один или с малой командой </ListItem>
						<ListItem>Маркетплейсы — основной доход </ListItem>
						<ListItem>Через 1-2 года выходит на Ozon</ListItem>
						<ListItem>Сталкивается с высокой конкуренцией</ListItem>
					</List>
				</Box>
				<Box>
					<Title order={3}>Тренды рынка:</Title>
					<List icon="📊">
						<ListItem>Доминирование WB как стартовой площадки</ListItem>
						<ListItem>Рост мультиплатформенности со временем</ListItem>
						<ListItem>Преобладание соло-предпринимателей</ListItem>
						<ListItem>Низкий порог входа привлекает массу игроков</ListItem>
						<ListItem>Конкуренция — главный барьер для роста</ListItem>
					</List>
				</Box>
				<Box>
					<Title order={3}>Возможности:</Title>
					<List icon="💡">
						<ListItem>Простота старта без больших вложений</ListItem>
						<ListItem>Не нужна команда и офлайн-инфраструктура</ListItem>
						<ListItem>Маркетплейс берет логистику на себя </ListItem>
						<ListItem>Можно масштабироваться на другие площадки</ListItem>
					</List>
				</Box>
				<Box>
					<Title order={3}>Вызовы:</Title>
					<List icon="⚡">
						<ListItem>Растущая конкуренция требует уникальности </ListItem>
						<ListItem>Нужны навыки продвижения и аналитики </ListItem>
						<ListItem>Высокие комиссии давят на маржинальность</ListItem>
						<ListItem>Техподдержка не всегда эффективна</ListItem>
					</List>
				</Box>
			</Stack>
		</SlideWrapper>
	);
};
