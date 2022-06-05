import { STATUS } from '../../../constants/index.js';
import { logError } from '../../../utils/index.js';
import { Product } from './index.js';
import { routesConfig } from './index.js';

const adminSubdirectory = 'admin';
const layout = 'page.html';

export function addProduct(request, response) {
  const { body } = request;
  const { name, description, image, price } = body;

  new Product(name, description, image, price)
    .save()
    .then(() => response.status(STATUS.NO_CONTENT).end())
    .catch((error) => {
      response.send(error);
      logError(error);
    });
}

export function editProduct(request, response) {
  const { id } = request.params;
  const { body } = request;
  const { name, description, image, price } = body;
  console.log({ price });
  new Product(name, description, image, price)
    .edit(id)
    .then(() =>
      response.redirect(
        STATUS.REDIRECT_FOUND,
        routesConfig.productManagement.path
      )
    )
    .catch((error) => {
      response.send(error);
      logError(error);
    });
}

export function deleteProduct(request, response) {
  const { id } = request.params;
  Product.delete(id)
    .then(() =>
      response.redirect(
        STATUS.REDIRECT_FOUND,
        routesConfig.productManagement.path
      )
    )
    .catch((error) => {
      response.send(error);
      logError(error);
    });
}

export function renderAddProduct(_, response) {
  response.render(routesConfig.addProduct.template, {
    pageTitle: '📦 Admin - Add product',
    pageSubdirectory: adminSubdirectory,
    pageName: routesConfig.addProduct.name,
    layout
  });
}

export function renderEditProduct(request, response) {
  const { id } = request.params;

  Product.getProduct(id)
    .then((product) => {
      response.render(routesConfig.editProduct.template, {
        pageTitle: '📦 Admin - Edit product',
        pageSubdirectory: adminSubdirectory,
        pageName: routesConfig.editProduct.name,
        layout,
        product
      });
    })
    .catch((error) => {
      response.send(error);
      logError(error);
    });
}

export function renderProductManagement(_, response) {
  Product.fetchAll()
    .then((productList) => {
      console.log({ productList });

      response.render(routesConfig.productManagement.template, {
        pageTitle: '📦 Admin - Product management',
        pageSubdirectory: adminSubdirectory,
        pageName: routesConfig.productManagement.name,
        layout,
        productList
      });
    })
    .catch(logError);
}

export function renderProductList(_, response) {
  Product.fetchAll()
    .then((productList) => {
      console.log({ productList });

      response.render(routesConfig.productList.template, {
        pageTitle: '📦 Product list',
        pageName: routesConfig.productList.name,
        layout,
        productList
      });
    })
    .catch(logError);
}

export function renderProductDetail(request, response) {
  const { id } = request.params;

  Product.getProduct(id)
    .then((product) => {
      response.render(routesConfig.productDetail.template, {
        pageTitle: product.title,
        pageName: routesConfig.productDetail.name,
        layout,
        product
      });
    })
    .catch((error) => {
      response.send(error);
      logError(error);
    });
}
