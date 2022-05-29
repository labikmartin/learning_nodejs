import fs from 'fs';
import path from 'path';

import { __dirname } from '../../../config/index.js';
import { jsonParse, jsonStringify } from '../../../utils/index.js';

export class Product {
  static #productsPath = path.join(__dirname, 'dummydb', 'products.json');

  constructor(name, description, image) {
    this.name = name;
    this.description = description;
    this.image = image;
  }

  static readProductsFile(callback) {
    fs.readFile(Product.#productsPath, (err, data) => callback(err, data));
  }

  static writeProductsFile(products) {
    return (callback) =>
      fs.writeFile(Product.#productsPath, jsonStringify(products), (err) =>
        callback(err)
      );
  }

  save() {
    return new Promise((resolve, reject) => {
      Product.readProductsFile((err, data) => {
        err && reject(err);

        const products = jsonParse(data);

        console.log({ products });

        if (!Array.isArray(products)) {
          resolve([]);
        }

        products.push(this);

        Product.writeProductsFile(products)((err) => {
          resolve(products);
          err && reject(err);
        });
      });
    });
  }

  edit(id) {
    return new Promise((resolve, reject) => {
      if (!id && id !== 0) {
        reject('Product does not exist');
      }

      Product.readProductsFile((err, data) => {
        err && reject(err);

        const products = jsonParse(data);

        if (!Array.isArray(products)) {
          resolve([]);
        }

        const updatedProducts = [...products];
        updatedProducts.splice(id, 1, this);

        Product.writeProductsFile(updatedProducts)((err) => {
          resolve(updatedProducts);
          err && reject(err);
        });
      });
    });
  }

  static getProduct(id) {
    return new Promise((resolve, reject) => {
      if (!id && id !== 0) {
        reject('Product does not exist');
      }

      Product.readProductsFile((err, data) => {
        err && reject(err);

        const products = jsonParse(data);

        if (!Array.isArray(products)) {
          resolve([]);
        }

        resolve(products[id]);
      });
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      if (!id && id !== 0) {
        reject('Product does not exist');
      }

      Product.readProductsFile((err, data) => {
        err && reject(err);

        const products = jsonParse(data);

        if (!Array.isArray(products)) {
          resolve([]);
        }

        const updatedProducts = [...products];
        updatedProducts.splice(id, 1);

        Product.writeProductsFile(updatedProducts)((err) => {
          resolve(updatedProducts);
          err && reject(err);
        });
      });
    });
  }

  static fetchAll() {
    return new Promise((resolve, reject) => {
      Product.readProductsFile((err, data) => {
        err && reject(err);

        const productsData = jsonParse(data);

        if (!Array.isArray(productsData)) {
          resolve([]);
        }

        resolve(productsData);
      });
    });
  }
}
