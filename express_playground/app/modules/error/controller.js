import { STATUS } from '../../../constants/index.js';
import { routesConfig } from './index.js';

export function renderNotFound(_, response) {
  response.status(STATUS.NOT_FOUND).render(routesConfig.not_found.template, {
    pageTitle: 'Not Found',
    pageName: routesConfig.not_found.name,
    layout: 'page.html'
  });
}
