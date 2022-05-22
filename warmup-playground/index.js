import { createServer } from 'http';

import { routing } from './routing/routing';

const server = createServer(routing);

server.listen(6001);
