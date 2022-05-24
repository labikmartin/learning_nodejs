export const routes = {
  root: {
    path: '/',
    template: './shop.html',
    name: 'shop'
  },
  addProduct: {
    path: '/admin/add-product',
    template: './add-product.html',
    name: 'add-product'
  },
  notFound: {
    path: '*',
    template: './404.html',
    name: '404'
  }
};
