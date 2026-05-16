let cart = [];
let total = 0;

function addToCart(name, price) {
  // Add item to cart array
  cart.push({ name, price });

  // Update total
  total += price;

  // Update UI
  displayCart();
}

function displayCart() {
  let d = document.getElementById("D2").style.display = "block";
  const cartItems = document.getElementById("cart-items");
  const totalElement = document.getElementById("total");

  // Clear old items
  cartItems.innerHTML = "";

  // Add each item
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;

    // Remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";

    removeBtn.onclick = () => {
      removeFromCart(index);
    };

    li.appendChild(removeBtn);
    cartItems.appendChild(li);
  });

  // Update total
  totalElement.textContent = total;
}

function removeFromCart(index) {
  total -= cart[index].price;

  // Remove item
  cart.splice(index, 1);

  // Refresh UI
  displayCart();
}