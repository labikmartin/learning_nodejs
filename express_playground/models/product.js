import fs from 'fs';
import path from 'path';

import { __dirname } from '../common.js';
import { jsonParse, jsonStringify } from '../utils/object.js';

export class Product {
  static #productsPath = path.join(__dirname, 'dummydb', 'products.json');

  constructor(name, description, image) {
    this.name = name;
    this.description = description;
    this.image = image;
  }

  save() {
    return new Promise((resolve, reject) => {
      fs.readFile(Product.#productsPath, (_, data) => {
        let products = jsonParse(data);

        console.log({ products });

        if (!Array.isArray(products)) {
          products = [];
        }

        products.push(this);

        fs.writeFile(Product.#productsPath, jsonStringify(products), (err) => {
          resolve(products);
          err && reject(err);
        });
      });
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      if (!id && id !== 0) {
        reject('Product does not exist');
      }

      fs.readFile(this.#productsPath, (err, data) => {
        err && reject(err);

        const products = jsonParse(data);

        if (!Array.isArray(products)) {
          return;
        }

        const updatedProducts = products.concat([], products.splice(id, 1));

        fs.writeFile(this.#productsPath, jsonStringify(products), (err) => {
          resolve(updatedProducts);
          err && reject(err);
        });
      });
    });
  }

  static fetchAll() {
    return new Promise((resolve, reject) => {
      fs.readFile(this.#productsPath, (err, data) => {
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
