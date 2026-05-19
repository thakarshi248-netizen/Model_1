let cart = [];

// =========================
// ADD TO CART
// =========================

function addToCart(name, price, image){

    document
    .getElementById("cartBox")
    .classList.add("show-cart");

    let existingProduct =
    cart.find(item => item.name === name);

    if(existingProduct){

        existingProduct.quantity++;

    }else{

        cart.push({
            name:name,
            price:price,
            image:image,
            quantity:1
        });
    }

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

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item,index)=>{

        total += item.price * item.quantity;

        let li = document.createElement("li");

        li.innerHTML = `

            <div class="cart-product">

                <img src="${item.image}">

                <div class="cart-details">

                    <h4>${item.name}</h4>

                    <p>$${item.price}</p>

                    <div class="quantity-box">

                        <button onclick="decrementQuantity(${index})">
                            -
                        </button>

                        <span>${item.quantity}</span>

                        <button onclick="incrementQuantity(${index})">
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

    cart = [];

    displayCart();

    closeCart();
}

// =========================
// SEARCH PRODUCT
// =========================

const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("keyup", function(){

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
// SORT PRODUCTS
// =========================

const sortSelect =
document.getElementById("sortSelect");

sortSelect.addEventListener("change", function () {

    let productsContainer =
    document.querySelector(".products");

    let cards =
    Array.from(document.querySelectorAll(".card"));

    cards.sort((a, b) => {

        let priceA =
        parseFloat(
            a.querySelector("p")
            .innerText.replace("$", "")
        );

        let priceB =
        parseFloat(
            b.querySelector("p")
            .innerText.replace("$", "")
        );

        if (sortSelect.value === "low") {

            return priceA - priceB;

        }

        else if (sortSelect.value === "high") {

            return priceB - priceA;

        }

        else {

            return 0;
        }
    });

    cards.forEach(card => {

        productsContainer.appendChild(card);

    });
});

// =========================
// FILTER PRODUCTS
// =========================

const filterPrice =
document.getElementById("filterPrice");

filterPrice.addEventListener("change", function(){

    let cards =
    document.querySelectorAll(".card");

    cards.forEach(card=>{

        let priceText =
        card.querySelector("p")
        .innerText;

        let price =
        parseFloat(
            priceText.replace("$","")
        );

        let filterValue =
        filterPrice.value;

        if(filterValue === "all"){

            card.style.display = "block";
        }

        else if(filterValue === "0-20"){

            if(price >= 0 && price <= 20){

                card.style.display = "block";

            }else{

                card.style.display = "none";
            }
        }

        else if(filterValue === "21-50"){

            if(price >= 21 && price <= 50){

                card.style.display = "block";

            }else{

                card.style.display = "none";
            }
        }

        else if(filterValue === "51-100"){

            if(price >= 51 && price <= 100){

                card.style.display = "block";

            }else{

                card.style.display = "none";
            }
        }

        else if(filterValue === "101"){

            if(price > 100){

                card.style.display = "block";

            }else{

                card.style.display = "none";
            }
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

