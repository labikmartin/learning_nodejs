import express from 'express';
import bodyParser from 'body-parser';

import { routes } from './routes.js';
import { STATUS } from '../constants/status-codes.js';

const router = express.Router();

const urlParser = bodyParser.urlencoded({ extended: true });

const pageSubdirectory = 'admin';

router.get(routes.addProduct.path, (_, response) => {
  response.render(routes.addProduct.template, {
    pageTitle: 'Admin - Add product',
    pageSubdirectory,
    pageName: routes.addProduct.name,
    layout: './layouts/page.html'
  });
});

router.post(routes.addProduct.path, urlParser, (request, response) => {
  const { body } = request;
  console.log(body);
  response.status(STATUS.NO_CONTENT).end();
});

export { router };
