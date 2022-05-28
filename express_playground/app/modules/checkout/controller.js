import { routesConfig } from './index.js';

export function renderCheckout(_, response) {
  response.render(routesConfig.checkout.template, {
    pageTitle: '🧾 Checkout',
    pageName: routesConfig.checkout.name,
    layout: 'page.html'
  });
}
