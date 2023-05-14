"use strict";
const search = document.querySelector(".search");
const productList = document.querySelectorAll("li");
search.addEventListener("keyup", showProduct);

function showProduct() {
  productList.forEach((element) => {
    const regexp = new RegExp(search.value, "i");
    const product = element.textContent;
    if (regexp.test(product)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}
