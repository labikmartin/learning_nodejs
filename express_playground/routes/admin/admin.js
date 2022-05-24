import express from 'express';
import bodyParser from 'body-parser';

import {
  postAddProducts,
  renderAddProduct
} from '../../controllers/admin/products.js';
import { routes } from './routes.js';

const router = express.Router();

const urlParser = bodyParser.urlencoded({ extended: true });

router.get(routes.addProduct.path, renderAddProduct);

router.post(routes.addProduct.path, urlParser, postAddProducts);

export { router };
