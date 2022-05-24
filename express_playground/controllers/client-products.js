import { STATUS } from '../constants/status-codes.js';
import { Product } from '../models/product.js';
import { routes } from '../routes/index.js';

export function renderProducts(_, response) {
  const productList = Product.fetchAll();
  console.log({ productList });
  response.render(routes.root.template, {
    pageTitle: '📦 My products',
    pageName: routes.root.name,
    layout: './layouts/page.html',
    productList
  });
}

export function deleteProduct(request, response, next) {
  const { id } = request.params;
  Product.delete(id);
  response.redirect(routes.root.path);
}
