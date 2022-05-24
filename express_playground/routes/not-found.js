import express from 'express';

import { renderNotFound } from '../controllers/not-found.js';
import { routes } from './routes.js';

const router = express.Router();

router.get(routes.notFound.path, renderNotFound);

export { router };
