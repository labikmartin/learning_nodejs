import express from 'express';
import bodyParser from 'body-parser';

import { routes } from './routes.js';

const router = express.Router();

const urlParser = bodyParser.urlencoded({ extended: true });

router.get(routes.root.path, (_, response) => {
  response.send(routes.root.template);
});

export { router };
