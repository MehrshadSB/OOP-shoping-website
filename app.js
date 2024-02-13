import { fetchData } from "./Utils/httpReq.js";
import Products from "./models/Products.js";

const productsNode = document.getElementById("products");

async function render() {
  const productsData = await fetchData();
  const productsInstance = new Products(productsNode, productsData);

  productsInstance.showProducts();
}

document.addEventListener("DOMContentLoaded", render);
