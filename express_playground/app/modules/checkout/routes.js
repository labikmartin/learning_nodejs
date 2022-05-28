import express from 'express';

import { renderCheckout, routesConfig } from './index.js';

const router = express.Router();

router.get(routesConfig.checkout.path, renderCheckout);

export { router as routes };
