import express from 'express';

import { renderProfile, routesConfig } from './index.js';

const router = express.Router();

router.get(routesConfig.profile.path, renderProfile);

export { router as routes };
