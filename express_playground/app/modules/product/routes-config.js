export const routesConfig = {
  productManagement: {
    path: '/admin/product-management',
    template: './product/layout/product-management.html',
    name: 'product-management'
  },
  addProduct: {
    path: '/admin/add-product',
    template: './product/layout/add-product.html',
    name: 'add-product'
  },
  editProduct: {
    path: '/admin/edit-product/:id',
    template: './product/layout/add-product.html',
    name: 'edit-product'
  },
  deleteProduct: {
    path: '/delete-product/:id',
    template: null,
    name: 'delete-product'
  },
  productList: {
    path: '/',
    template: './product/layout/product-list.html',
    name: 'product-list'
  },
  cart: {
    path: '/cart',
    template: './cart/layout/cart.html',
    name: 'cart'
  },
  checkout: {
    path: '/checkout',
    template: './checkout/layout/checkout.html',
    name: 'checkout'
  }
};
