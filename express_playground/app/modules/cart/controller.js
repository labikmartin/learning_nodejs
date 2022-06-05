import { routesConfig } from './index.js';
import { Cart } from './model.js';

export async function addCartItem(request, response) {
  const { id } = request.params;

  const cart = await Cart.addProduct(id);

  console.log({ cart });

  response.end();
}

export function renderCart(_, response) {
  response.render(routesConfig.cart.template, {
    pageTitle: '🛒 Cart',
    pageName: routesConfig.cart.name,
    layout: 'page.html'
  });
}
