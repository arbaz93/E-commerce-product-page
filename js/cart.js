const productName = document.querySelector('[data-type="product-name"]').textContent;
const productPrice = document.querySelector('[data-type="price"]').textContent;
const productQuantity = document.querySelector('[data-type="quantity"]');
const productImageSrc = document.querySelector('[data-type="product-image"]').src;
const cart = document.querySelector('.cart')
let deleteBtn = document.querySelectorAll('.delete');

const decreaseQuantity = document.querySelector('.minus-btn');
const increaseQuantity = document.querySelector('.plus-btn');
const cartBtn = document.querySelector('.cart-icon');
const addToCartBtn = document.querySelector('.add-to-cart-button');

decreaseQuantity.addEventListener('click', () => changeQuantity('minus')); 
increaseQuantity.addEventListener('click', () => changeQuantity('plus'));
addToCartBtn.addEventListener('click', addToCart);
cartBtn.addEventListener('click', openCart);

function changeQuantity(addOrMinus) {
    (addOrMinus === 'minus') ? productQuantity.value-- : productQuantity.value++  
}

function openCart() {
  if (cartBtn.ariaExpanded === 'false') {
    cart.classList.add('openCart');
    cartBtn.ariaExpanded = 'true'
  } else {
    cart.classList.remove('openCart');
    cartBtn.ariaExpanded = 'false'
  }
}

function addToCart() {
  if(productQuantity.value > 0) {
    const calculatedValue = Number(productPrice) * Number(productQuantity.value);
    
    const CART_TEMPLATE = document.querySelector('.cart-stuff-template').content;
    
    let image = CART_TEMPLATE.querySelector('img').src = productImageSrc;
    let heading = CART_TEMPLATE.querySelector('.product-name').innerHTML = productName;
    let price = CART_TEMPLATE.querySelector('.total-price').innerHTML = 
      `${productPrice} x ${productQuantity.value} 
      <span class="text-neutral-100 fw-200 fs-150">${calculatedValue}</span>`
    
    let clone = document.importNode(CART_TEMPLATE, true);
    document.querySelector('.stuff-in-cart').appendChild(clone)
    cart.querySelector('.text-empty').innerHTML = '';
    deleteBtn = document.querySelectorAll('.delete');

    if(document.querySelector('.stuff-in-cart').children.length > 0 && 
    document.querySelector('.stuff-in-cart').children.length < 3) {
      const button = document.querySelector('.cart > button');
      button.style.display = 'block'
    } 
  }
  // eventlistener to del items
  deleteBtn.forEach(btn =>{
    btn.addEventListener('click', deleteItem)
  })
}

function deleteItem() {
  this.parentNode.remove()
  if (document.querySelector('.stuff-in-cart').children.length == 1) {
    const button = document.querySelector('.cart > button');
    button.style.display = 'none'

    cart.querySelector('.text-empty').innerHTML = 'Your cart is empty';
  }
}