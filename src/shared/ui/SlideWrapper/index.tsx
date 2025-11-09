import type { PropsWithChildren } from "react";

import { Box, Container, Paper, Title } from "@mantine/core";

interface SlideWrapperProps {
	title?: string;
	withBorder?: boolean;
}

export const SlideWrapper = ({
	title,
	withBorder = true,
	children,
}: PropsWithChildren<SlideWrapperProps>) => {
	return (
		<Box mb={80} component="section">
			<Container pos="relative">
				{title && (
					<Title order={2} mb="md">
						{title}
					</Title>
				)}
				<Paper p="md" radius="md" withBorder={withBorder}>
					{children}
				</Paper>
			</Container>
		</Box>
	);
};
