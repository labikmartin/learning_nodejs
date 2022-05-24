import { STATUS } from '../constants/status-codes.js';
import { routes } from '../routes/index.js';

export function renderNotFound(_, response) {
  response.status(STATUS.NOT_FOUND).render(routes.notFound.template, {
    pageTitle: 'Not Found',
    pageName: routes.notFound.name,
    layout: './layouts/page.html'
  });
}
