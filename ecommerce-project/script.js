const cartItems = [];
const cartList = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');

function renderCart() {
  cartList.innerHTML = '';
  let total = 0;

  cartItems.forEach((item) => {
    total += item.price;
    const li = document.createElement('li');
    li.textContent = `${item.name} — $${item.price}`;
    cartList.appendChild(li);
  });

  cartCount.textContent = cartItems.length;
  cartTotal.textContent = total;
}

document.querySelectorAll('.add-btn').forEach((button) => {
  button.addEventListener('click', () => {
    cartItems.push({
      name: button.dataset.name,
      price: Number(button.dataset.price),
    });
    renderCart();
  });
});

renderCart();
