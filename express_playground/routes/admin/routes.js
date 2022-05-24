export const routes = {
  productList: {
    path: '/admin/product-list',
    template: './admin/add-product.html',
    name: 'product-list'
  },
  addProduct: {
    path: '/admin/add-product',
    template: './admin/add-product.html',
    name: 'add-product'
  },
  editProduct: {
    path: '/admin/edit-product/:id',
    template: './admin/add-product.html',
    name: 'edit-product'
  }
};
