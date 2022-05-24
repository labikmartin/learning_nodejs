import { STATUS } from '../constants/status-codes.js';
import { routes } from '../routes/routes.js';

const pageSubdirectory = 'admin';

export function postAddProducts(request, response) {
  const { body } = request;
  console.log(body);
  response.status(STATUS.NO_CONTENT).end();
}

export function renderAddProduct(_, response) {
  response.render(routes.addProduct.template, {
    pageTitle: 'Admin - Add product',
    pageSubdirectory,
    pageName: routes.addProduct.name,
    layout: './layouts/page.html'
  });
}
