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
    template: './product/layout/edit-product.html',
    name: 'edit-product'
  },
  deleteProduct: {
    path: '/delete-product/:id',
    template: null,
    name: 'delete-product'
  },
  productDetail: {
    path: '/product-detail/:id',
    template: './product/product-detail.html',
    name: 'product-detail'
  },
  productList: {
    path: '/',
    template: './product/product-list.html',
    name: 'product-list'
  }
};
