import express from 'express';
import bodyParser from 'body-parser';

import { renderProducts } from '../controllers/client-products.js';
import { routes } from './routes.js';

const router = express.Router();

const urlParser = bodyParser.urlencoded({ extended: true });

router.get(routes.root.path, renderProducts);

export { router };
