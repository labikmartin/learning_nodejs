import { routes } from '../routes/index.js';

export function renderProducts(_, response) {
  response.render(routes.root.template, {
    pageTitle: '📦 My products',
    pageName: routes.root.name,
    layout: './layouts/page.html'
  });
}
