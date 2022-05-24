import { STATUS } from '../../constants/status-codes.js';
import { Product } from '../../models/product.js';
import { routes } from '../../routes/admin/routes.js';
import { logError } from '../../utils/logging.js';

const pageSubdirectory = 'admin';

export function postAddProducts(request, response) {
  const { body } = request;
  console.log(body);
  const { name, description, image } = body;
  new Product(name, description, image)
    .save()
    .then(() => response.status(STATUS.NO_CONTENT).end())
    .catch(logError);
}

export function renderAddProduct(_, response) {
  response.render(routes.addProduct.template, {
    pageTitle: 'Admin - Add product',
    pageSubdirectory,
    pageName: routes.addProduct.name,
    layout: './common/layouts/page.html'
  });
}
