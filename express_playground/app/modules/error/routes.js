import express from 'express';

import { renderNotFound, routesConfig } from './index.js';

const router = express.Router();

router.get(routesConfig.not_found.path, renderNotFound);

export { router };
