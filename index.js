// Import stylesheets
import './style.css';

const boxOfItems = document.querySelectorAll('.box-item');
const totalPriceElement = document.querySelector('.total-price');

const sumProductsPrice = () => {
  const numberOfProducts = document.querySelectorAll('input');
  const singleProductPrice = document.querySelectorAll('.item-price');
  let totalPrice = 0;
  numberOfProducts.forEach((item, index) => {
    if (!/[0-9]+/.test(item.value)) {
      item.value = 1;
    }
    const amountOfProducts = item.value;
    totalPrice +=
      parseFloat(singleProductPrice[index].innerHTML) * amountOfProducts;
  });
  return totalPrice;
};

const showPrice = () => {
  totalPriceElement.textContent = sumProductsPrice();
  if (sumProductsPrice() === 0) {
    document.querySelector('.container').innerHTML =
      '<h1>Twój koszyk jest pusty</h1>';
  }
};
const removeProduct = (e) => {
  e.target.closest('.box-item').remove();
  showPrice();
};
showPrice();

document.querySelectorAll('input').forEach((element) => {
  element.addEventListener('change', showPrice);
});

document.querySelectorAll('.remove-item').forEach((element) => {
  element.addEventListener('click', removeProduct);
});
