import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import { adminRouter, shopRouter, notFound } from './routes/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();

app.use(express.static(path.join(__dirname + '/public')));

app.use(adminRouter, shopRouter, notFound);

app.listen(process.env.PORT, () => {
  console.log(
    '\x1b[35m%s\x1b[0m',
    `Starting server on port: ${process.env.PORT}`
  );
});
