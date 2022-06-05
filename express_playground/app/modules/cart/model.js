import fs from 'fs';
import path from 'path';

import { __dirname } from '../../../config/index.js';
import { jsonParse, jsonStringify } from '../../../utils/index.js';
import { Product } from '../product/model.js';

export class Cart {
  static createCartItem(product, count) {
    return { product, count: count || 1 };
  }

  static #cartPath = path.join(__dirname, 'dummydb', 'cart.json');

  static readCartFile(callback) {
    fs.readFile(Cart.#cartPath, (err, data) => callback(err, data));
  }

  static writeCartFile(cart) {
    return (callback) =>
      fs.writeFile(Cart.#cartPath, jsonStringify(cart), callback);
  }

  static async addProduct(productUuid) {
    const product = await Product.getProduct(productUuid);

    return await new Promise((resolve, reject) => {
      if (!product) {
        reject('Invalid product!');

        return;
      }

      Cart.readCartFile((err, data) => {
        err && reject(err);

        const cart = jsonParse(data);

        if (!Array.isArray(cart)) {
          const newCart = [Cart.createCartItem(product)];

          Cart.writeCartFile(newCart)((err) => {
            err && reject(err);
            resolve(newCart);
          });

          return;
        }

        const cartItemToUpdateIndex = cart.findIndex(
          (itemInCart) => itemInCart.product.uuid === product.uuid
        );
        const shouldUpdateExistingItemInCart = cartItemToUpdateIndex !== -1;

        if (shouldUpdateExistingItemInCart) {
          const updatedCart = [...cart];
          const cartItem = updatedCart[cartItemToUpdateIndex];

          updatedCart[cartItemToUpdateIndex] = Cart.createCartItem(
            cartItem.product,
            cartItem.count++
          );

          Cart.writeCartFile(updatedCart)((err) => {
            err && reject(err);
            resolve(updatedCart);
          });

          return;
        }

        const updatedCart = [...cart, Cart.createCartItem(product)];

        Cart.writeCartFile(updatedCart)((err) => {
          err && reject(err);
          resolve(updatedCart);
        });
      });
    });
  }

  static async getTotalPrice() {
    return await new Promise((resolve) => {
      Cart.readCartFile((_, data) => {
        const cart = jsonParse(data);
        const cartItems = !Array.isArray(cart) ? [] : cart;

        const price = cartItems.reduce((total, cartItem) => {
          return total + cartItem.product.price * cartItem.count;
        }, 0);

        resolve(price);
      });
    });
  }
}
