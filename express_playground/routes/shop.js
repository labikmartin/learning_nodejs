import express from 'express';
import bodyParser from 'body-parser';

import {
  deleteProduct,
  renderProducts
} from '../controllers/client-products.js';
import { routes } from './routes.js';

const router = express.Router();

router.get(routes.root.path, renderProducts);

router.post(routes.deleteProduct.path, deleteProduct);

export { router };
