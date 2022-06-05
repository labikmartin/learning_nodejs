import express from 'express';
import bodyParser from 'body-parser';

import {
  deleteProduct,
  addProduct,
  renderAddProduct,
  renderProductList,
  renderProductManagement,
  editProduct,
  renderEditProduct,
  routesConfig,
  renderProductDetail
} from './index.js';

const router = express.Router();

const urlParser = bodyParser.urlencoded({ extended: true });

router.get(routesConfig.productManagement.path, renderProductManagement);

router.post(routesConfig.addProduct.path, urlParser, addProduct);

router.post(routesConfig.editProduct.path, urlParser, editProduct);

router.post(routesConfig.deleteProduct.path, deleteProduct);

router.get(routesConfig.addProduct.path, renderAddProduct);

router.get(routesConfig.editProduct.path, renderEditProduct);

router.get(routesConfig.productDetail.path, renderProductDetail);

router.get(routesConfig.productList.path, renderProductList);

export { router as routes };
