import dotenv from 'dotenv';
import express from 'express';
import path from 'path';

import { __dirname, AppViewEngine } from './config/index.js';
import {
  cartRoutes,
  checkoutRoutes,
  productRoutes,
  userRoutes,
  errorRoutes
} from './app/modules/index.js';

dotenv.config();

const app = express();

const appViewEngine = new AppViewEngine(app);
appViewEngine.init();

app.use(express.static(path.join(__dirname + '/public')));

app.use(cartRoutes, checkoutRoutes, productRoutes, userRoutes, errorRoutes);

app.listen(process.env.PORT, () => {
  console.log(
    '\x1b[35m%s\x1b[0m',
    `Starting server on port: ${process.env.PORT}`
  );
});
