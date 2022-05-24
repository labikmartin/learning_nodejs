import path from 'path';
import { renderFile } from 'ejs';

import { __dirname } from '../common.js';

export class AppViewEngine {
  constructor(app) {
    this.app = app;
  }

  init() {
    const { app } = this;

    app.set('views', path.join(__dirname, 'views'));
    app.engine('html', renderFile);
    app.set('view engine', 'html');
  }
}
