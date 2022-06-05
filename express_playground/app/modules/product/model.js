import fs from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';

import { __dirname } from '../../../config/index.js';
import {
  jsonParse,
  jsonStringify,
  findByUuid,
  reverseFormatNumber
} from '../../../utils/index.js';

export class Product {
  static #productsPath = path.join(__dirname, 'dummydb', 'products.json');

  constructor(name, description, image, price) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.price = reverseFormatNumber(price);
  }

  static readProductsFile(callback) {
    fs.readFile(Product.#productsPath, (err, data) => callback(err, data));
  }

  static writeProductsFile(products) {
    return (callback) =>
      fs.writeFile(Product.#productsPath, jsonStringify(products), callback);
  }

  get uuid() {
    return randomUUID();
  }

  save() {
    return new Promise((resolve, reject) => {
      Product.readProductsFile((err, data) => {
        err && reject(err);

        const products = jsonParse(data);

        if (!Array.isArray(products)) {
          const newProducts = [{ ...this, uuid: this.uuid }];

          Product.writeProductsFile(newProducts)((err) => {
            err && reject(err);
            resolve(newProducts);
          });

          return;
        }

        products.push({ ...this, uuid: this.uuid });

        Product.writeProductsFile(products)((err) => {
          err && reject(err);
          resolve(products);
        });
      });
    });
  }

  edit(uuid) {
    return new Promise((resolve, reject) => {
      if (!uuid) {
        reject('No ID provided');
      }

      Product.readProductsFile((err, data) => {
        err && reject(err);

        const products = jsonParse(data);
        const oldProduct = products?.find((product) => product.uuid === uuid);
        const productToEditIndex = products.findIndex(
          (product) => product.uuid === uuid
        );

        if (!oldProduct) {
          resolve(`[EDIT]: Product with uuid: <${uuid}> does not exist.`);

          return;
        }

        const updatedProducts = [...products];
        updatedProducts.splice(productToEditIndex, 1, { ...this, uuid });

        Product.writeProductsFile(updatedProducts)((err) => {
          resolve(updatedProducts);
          err && reject(err);
        });
      });
    });
  }

  static getProduct(uuid) {
    return new Promise((resolve, reject) => {
      if (!uuid) {
        reject('No ID provided');
      }

      Product.readProductsFile((err, data) => {
        err && reject(err);

        const products = jsonParse(data);
        const product = findByUuid(products, uuid);

        if (!product) {
          reject(`[GET]: Product with uuid: <${uuid}> does not exist.`);
        }

        resolve(product);
      });
    });
  }

  static delete(uuid) {
    return new Promise((resolve, reject) => {
      if (!uuid) {
        reject('No ID provided');
      }

      Product.readProductsFile((err, data) => {
        err && reject(err);

        const products = jsonParse(data);
        const product = findByUuid(products, uuid);

        if (!product) {
          reject(`[DELETE]: Product with uuid: <${uuid}> does not exist.`);
        }

        const productToDeleteIndex = products.findIndex(
          (product) => product.uuid === uuid
        );

        const updatedProducts = [...products];
        updatedProducts.splice(productToDeleteIndex, 1);

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
