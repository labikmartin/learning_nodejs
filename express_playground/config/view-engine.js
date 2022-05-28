import path from 'path';
import { renderFile } from 'ejs';
import expressLayouts from 'express-ejs-layouts';

import { __dirname } from './common.js';

export class AppViewEngine {
  constructor(app) {
    this.app = app;
  }

  init() {
    const { app } = this;

    app.set('views', [
      path.join(__dirname, 'app', 'templates'),
      path.join(__dirname, 'app', 'templates/layouts'),
      path.join(__dirname, 'app', 'templates/partials')
    ]);
    app.engine('html', renderFile);
    app.set('view engine', 'html');
    app.use(expressLayouts);
  }
}
