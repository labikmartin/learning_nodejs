import express from 'express';

import { renderCart, routesConfig } from './index.js';

const router = express.Router();

router.get(routesConfig.cart.path, renderCart);

export { router as routes };
