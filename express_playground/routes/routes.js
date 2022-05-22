import { readFileSync } from 'fs';

export const routes = {
  root: {
    path: '/',
    template: readFileSync('./views/index.html').toString()
  },
  addProduct: {
    path: '/admin/add-product',
    template: readFileSync('./views/add-product.html').toString()
  },
  success: {
    path: '/admin/success',
    template: '<div>Successfully added!</div>'
  },
  notFound: {
    path: '*',
    template: readFileSync('./views/404.html').toString()
  }
};
