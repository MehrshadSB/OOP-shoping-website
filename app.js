import { fetchData } from "./Utils/httpReq.js";
import Products from "./models/Products.js";
import Cart from "./models/cart.js";

const productsNode = document.getElementById("products");
const cartListNode = document.getElementById("cart-list");
const totalPrice = document.getElementById("total-price").querySelector("span");

const URL = "./data.json";

async function render() {
  const productsData = await fetchData(URL);
  const cartInstance = new Cart(cartListNode, totalPrice);
  const productsInstance = new Products(
    productsNode,
    productsData,
    cartInstance
  );

  productsInstance.showProducts();
}

document.addEventListener("DOMContentLoaded", render);
