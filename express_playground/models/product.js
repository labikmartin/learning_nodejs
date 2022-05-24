const products = [];

export class Product {
  constructor(name, description, image) {
    this.name = name;
    this.description = description;
    this.image = image;
  }

  save() {
    products.push(this);
  }

  static delete(id) {
    if (!id && id !== 0) {
      return;
    }

    products.splice(id, 1);
  }

  static fetchAll() {
    return products;
  }
}
