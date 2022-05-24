export const routes = {
  root: {
    path: '/',
    template: './shop/index.html',
    name: 'shop'
  },
  productList: {
    path: '/product-list',
    template: './shop/product-list.html',
    name: 'product-list'
  },
  cart: {
    path: '/cart',
    template: './shop/cart.html',
    name: 'cart'
  },
  checkout: {
    path: '/checkout',
    template: './shop/checkout.html',
    name: 'checkout'
  },
  deleteProduct: {
    path: '/delete-product/:id',
    template: null,
    name: 'delete-product'
  }
};
