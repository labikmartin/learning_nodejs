import express from 'express';

import { STATUS } from '../constants/status-codes.js';
import { routes } from './routes.js';

const router = express.Router();

router.get(routes.notFound.path, (_, response) => {
  response.status(STATUS.NOT_FOUND).send(routes.notFound.template);
});

export { router };
