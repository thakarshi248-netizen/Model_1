// let cart = [];
// let total = 0;

// function addToCart(name, price) {
//   // Add item to cart array
//   cart.push({ name, price });

//   // Update total
//   total += price;

//   // Update UI
//   displayCart();
// }

// function displayCart() {
//   let d = document.getElementById("D2").style.display = "block";
//   const cartItems = document.getElementById("cart-items");
//   const totalElement = document.getElementById("total");

//   // Clear old items
//   cartItems.innerHTML = "";

//   // Add each item
//   cart.forEach((item, index) => {
//     const li = document.createElement("li");
//     li.textContent = `${item.name} - $${item.price}`;

//     // Remove button
//     const removeBtn = document.createElement("button");
//     removeBtn.textContent = "Remove";

//     removeBtn.onclick = () => {
//       removeFromCart(index);
//     };

//     li.appendChild(removeBtn);
//     cartItems.appendChild(li);
//   });

//   // Update total
//   totalElement.textContent = total;
// }

// function removeFromCart(index) {
//   total -= cart[index].price;

//   // Remove item
//   cart.splice(index, 1);

//   // Refresh UI
//   displayCart();
// }// =========================
// CART ARRAY
// =========================

let cart = [];

// =========================
// ADD TO CART
// =========================

function addToCart(name, price, image){

    // SHOW CART

    document
    .getElementById("cartBox")
    .classList.add("show-cart");

    // CHECK PRODUCT EXISTS

    let existingProduct =
    cart.find(item => item.name === name);

    // IF EXISTS

    if(existingProduct){

        existingProduct.quantity++;

    }else{

        // ADD NEW PRODUCT

        cart.push({
            name:name,
            price:price,
            image:image,
            quantity:1
        });
    }

    // UPDATE CART

    displayCart();
}

// =========================
// DISPLAY CART
// =========================

function displayCart(){

    let cartItems =
    document.getElementById("cart-items");

    let totalElement =
    document.getElementById("total");

    // CLEAR OLD ITEMS

    cartItems.innerHTML = "";

    let total = 0;

    // LOOP PRODUCTS

    cart.forEach((item,index)=>{

        total += item.price * item.quantity;

        // CREATE LIST ITEM

        let li = document.createElement("li");

        li.innerHTML = `

            <div class="cart-product">

                <img src="${item.image}">

                <div class="cart-details">

                    <h4>${item.name}</h4>

                    <p>$${item.price}</p>

                    <div class="quantity-box">

                        <button
                        onclick="decrementQuantity(${index})">

                            -

                        </button>

                        <span>${item.quantity}</span>

                        <button
                        onclick="incrementQuantity(${index})">

                            +

                        </button>

                    </div>

                    <button
                    class="remove-btn"
                    onclick="removeItem(${index})">

                        Remove

                    </button>

                </div>

            </div>
        `;

        cartItems.appendChild(li);
    });

    // UPDATE TOTAL

    totalElement.innerText =
    total.toFixed(2);
}

// =========================
// INCREMENT
// =========================

function incrementQuantity(index){

    cart[index].quantity++;

    displayCart();
}

// =========================
// DECREMENT
// =========================

function decrementQuantity(index){

    if(cart[index].quantity > 1){

        cart[index].quantity--;

    }else{

        cart.splice(index,1);
    }

    displayCart();
}

// =========================
// REMOVE ITEM
// =========================

function removeItem(index){

    cart.splice(index,1);

    displayCart();
}

// =========================
// CLOSE CART
// =========================

function closeCart(){

    document
    .getElementById("cartBox")
    .classList.remove("show-cart");
}

// =========================
// CHECKOUT
// =========================

function checkout(){

    if(cart.length === 0){

        alert("Your cart is empty!");

        return;
    }

    alert("Order Placed Successfully!");

    // CLEAR CART

    cart = [];

    displayCart();

    closeCart();
}

// =========================
// SEARCH PRODUCT
// =========================

const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("keyup",function(){

    let searchValue =
    searchInput.value.toLowerCase();

    let cards =
    document.querySelectorAll(".card");

    cards.forEach(card=>{

        let productName =
        card.querySelector("h3")
        .innerText.toLowerCase();

        if(productName.includes(searchValue)){

            card.style.display = "block";

        }else{

            card.style.display = "none";
        }
    });
});

// =========================
// SHOW BUTTON ON SCROLL
// =========================

window.onscroll = function(){

    let topBtn =
    document.getElementById("topBtn");

    if(document.body.scrollTop > 200 ||
       document.documentElement.scrollTop > 200){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";
    }
};

// =========================
// SCROLL TO TOP
// =========================

function scrollToTop(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}