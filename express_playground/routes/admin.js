import express from 'express';
import bodyParser from 'body-parser';

import { routes } from './routes.js';

const router = express.Router();

const urlParser = bodyParser.urlencoded({ extended: true });

router.get(routes.addProduct.path, (_, response) => {
  response.send(routes.addProduct.template);
});

router.post(routes.addProduct.path, urlParser, (request, response) => {
  const { body } = request;
  console.log(body);
  response.redirect(routes.success.path);
});

router.get(routes.success.path, (_, response) => {
  response.send(routes.success.template);
});

export { router };
