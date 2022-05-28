import { routesConfig } from './index.js';

export function renderProfile(_, response) {
  response.render(routesConfig.profile.template, {
    pageTitle: '🙎‍♂️ Profile',
    pageName: routesConfig.profile.name,
    layout: 'page.html'
  });
}
