import Display from "./Display.js";

class Products extends Display {
  constructor(parent, products, cart) {
    super(parent, products);
    this.cart = cart;
  }

  showProducts() {
    this.products.forEach((product) => this.createCart(product));
  }

  productImg(data) {
    const { image, alt } = data;

    const imgJSX = `<img src="${image}" alt="${alt}">`;

    return imgJSX;
  }

  productInfo(data) {
    const { id, name, price } = data;

    const infoJSX = `
        <div id="product-info">
            <h3>${name}</h3>
            <div>
                <span>$ ${price}</span>
                <button data-id="${id}">+</button>
            </div>
        </div>
    `;

    return infoJSX;
  }

  handleEvent() {
    const element = event.target;

    if (element.tagName === "BUTTON") {
      this.addToCart(element.dataset.id);
    }
  }

  addToCart(id) {
    const product = this.products.find((i) => i.id === +id);
    this.cart.products.push(product);
    this.cart.showProducts();
  }
}

export default Products;
