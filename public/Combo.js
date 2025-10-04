// Toast (SweetAlert2) Function
function showToast(message, type = "success") {
  const map = { danger: "error", error: "error", success: "success", warning: "warning", info: "info" };
  const icon = map[type] || type;
  Swal.fire({
    icon: icon,
    title: message,
    toast: true,
    position: "top", // 🔹 Top Center pe show hoga
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true
  });
}

//  Cart Array
let cart = [];

//  Add to Cart
function addToCart(comboName) {
  // Price ko card se read karenge
  const card = Array.from(document.querySelectorAll(".combo-card"))
    .find(c => c.querySelector("h5").textContent === comboName);

  const priceText = card.querySelector(".price span").textContent.replace("₹", "").trim();
  const price = parseFloat(priceText);

  cart.push({ name: comboName, price: price });
  updateCart();

  // Toast show
  showToast(`${comboName} added to cart 🛒`, "success");
}

// Update Cart Modal
function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");

  if (!cartItems || !cartCount || !cartTotal) return;

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    cartItems.innerHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        ${item.name} - ₹${item.price}
        <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">Remove</button>
      </li>
    `;
  });

  cartCount.textContent = cart.length;
  cartTotal.textContent = total;
}

//  Remove from Cart
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

//  Checkout Button (Empty Cart)
function checkout() {
  if (cart.length === 0) {
    showToast("Your cart is empty ❌", "error");
    return;
  }
  cart = [];
  updateCart();
  showToast("Checkout successful 🤞", "success");
}
