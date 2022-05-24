import { Product } from '../../models/product.js';
import { routes } from '../../routes/shop/routes.js';
import { logError } from '../../utils/logging.js';

export function renderProducts(_, response) {
  Product.fetchAll()
    .then((productList) => {
      console.log({ productList });

      response.render(routes.root.template, {
        pageTitle: '📦 My products',
        pageName: routes.root.name,
        layout: './common/layouts/page.html',
        productList
      });
    })
    .catch(logError);
}

export function deleteProduct(request, response, next) {
  const { id } = request.params;
  Product.delete(id)
    .then(() => response.redirect(routes.root.path))
    .catch(logError);
}
