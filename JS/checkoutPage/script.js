const taxPercent = 0.13;

window.addEventListener("load", () => {
  subTotal();
});

document.querySelector(".shoppingCartDiv").addEventListener("click", (e) => {
  // Minus
  if (e.target.classList.contains("fa-minus")) {
    if (e.target.nextElementSibling.innerText == 1) {
      if (confirm("Your product will delete")) {
        e.target.closest(".product").remove();
        subTotal();
      }
    } else {
      e.target.nextElementSibling.innerText--;
      productTotal(e);
      subTotal();
    }
  }
  // Plus
  else if (e.target.classList.contains("fa-plus")) {
    e.target.previousElementSibling.innerText++;
    productTotal(e);
    subTotal();
  }
  // Trash
  else if (e.target.classList.contains("fa-trash")) {
    if (confirm("Your product will delete")) {
      e.target.closest(".product").remove();
      subTotal();
    }
  }
});

const productTotal = (e) => {
  e.target
    .closest(".main")
    .nextElementSibling.querySelector(".productTotalPrice").innerText = (
    e.target.closest(".main").querySelector(".styleButtonDiv p").innerText *
    e.target.closest(".main").querySelector(".productPriceDiv p").innerText
  ).toFixed(2);
};

const subTotal = () => {
  document.getElementById("taxPercent").innerText = (taxPercent * 100).toFixed(
    0
  );

  let subTotal = 0;
  let total = 0;
  let shippingPrice = 9.99;
  document.querySelectorAll(".productTotalPrice").forEach((a) => {
    subTotal = subTotal + parseFloat(a.innerText);
  });

  //   ??????????????????????????????????????????????????
  if (subTotal > 200) {
    shippingPrice = 0;
  }

  if (subTotal < 0.1) {
    shippingPrice = 0;
  }
  //   ??????????????????????????????????????????????????

  document.querySelector(
    ".subTotalDiv p:nth-child(2)"
  ).innerText = `$${subTotal.toFixed(2)}`;
  let taxPrice = subTotal.toFixed(2) * taxPercent;
  document.querySelector(
    ".taxDiv p:nth-child(2)"
  ).innerText = `$${taxPrice.toFixed(2)}`;

  document.querySelector(
    ".shippingDiv p:nth-child(2)"
  ).innerText = `$${shippingPrice.toFixed(2)}`;

  total = subTotal + taxPrice + shippingPrice;

  document.querySelector(
    ".TotalDiv p:nth-child(2)"
  ).innerText = `$${total.toFixed(2)}`;
};
