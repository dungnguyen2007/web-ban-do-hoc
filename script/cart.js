let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

function renderCart() {
  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    const price = Number(item.price.replace(/\./g, ""));
    const itemTotal = price * item.quantity;

    total += itemTotal;

    cartItems.innerHTML += `
      <tr>
        <td>
          <button onclick="removeItem(${index})">X</button>
        </td>

        <td>
          <img src="${item.image}" width="70">
        </td>

        <td>${item.name}</td>

        <td>${item.price}</td>

        <td>
          <input
            type="number"
            min="1"
            value="${item.quantity}"
            onchange="updateQuantity(${index}, this.value)"
          >
        </td>

        <td>${itemTotal.toLocaleString("vi-VN")}</td>
      </tr>
    `;
  });

  cartTotal.textContent = total.toLocaleString("vi-VN") + " VNĐ";

  localStorage.setItem("cart", JSON.stringify(cart));
}

function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}

function updateQuantity(index, quantity) {
  cart[index].quantity = Number(quantity);
  renderCart();
}

renderCart();
document.getElementById("checkout-btn").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Giỏ hàng đang trống!");
    return;
  }

  alert("Thanh toán thành công!");

  localStorage.removeItem("cart");

  location.reload();
});
