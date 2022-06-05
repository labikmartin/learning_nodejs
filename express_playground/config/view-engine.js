import path from 'path';
import { renderFile } from 'ejs';
import expressLayouts from 'express-ejs-layouts';

import { __dirname } from './common.js';

export class AppViewEngine {
  static pathToViewTemplates = path.join(__dirname, 'app/templates');

  constructor(app) {
    this.app = app;
  }

  init() {
    const { app } = this;

    app.set('views', [
      AppViewEngine.pathToViewTemplates,
      path.join(AppViewEngine.pathToViewTemplates, 'layouts'),
      path.join(AppViewEngine.pathToViewTemplates, 'partials')
    ]);
    app.engine('html', renderFile);
    app.set('view engine', 'html');
    app.use(expressLayouts);
  }
}
