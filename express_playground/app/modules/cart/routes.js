import express from 'express';
import bodyParser from 'body-parser';

import { addCartItem, renderCart, routesConfig } from './index.js';

const urlParser = bodyParser.urlencoded({ extended: true });

const router = express.Router();

router.post(routesConfig.cartAddItem.path, urlParser, addCartItem);

router.get(routesConfig.cart.path, renderCart);

export { router as routes };
