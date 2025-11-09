import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import { createHandler } from '@universal-middleware/hono';
import { Hono } from 'hono';
import { compress } from 'hono/compress';
import { vikeHandler } from './server/vike-handler';

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const isProduction = process.env.NODE_ENV === 'production';

const app = new Hono();
app.use(compress());

if (isProduction) {
	app.use(
		'/*',
		serveStatic({
			root: `${__dirname}/dist/client/`,
		}),
	);
}

app.get('*', createHandler(vikeHandler)());

if (isProduction) {
	console.log(`Server running on port ${port}...`);
	serve({
		fetch: app.fetch,
		port,
	});
}

export default app;
