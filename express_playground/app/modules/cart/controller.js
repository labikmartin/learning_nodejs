import { routesConfig } from './index.js';

export function renderCart(_, response) {
  response.render(routesConfig.cart.template, {
    pageTitle: '🛒 Cart',
    pageName: routesConfig.cart.name,
    layout: 'page.html'
  });
}
