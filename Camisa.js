

const openShopping = document.querySelector(".shopping"),
      closeShopping = document.querySelector(".closeShopping"),
      body = document.querySelector("body"),
      list= document.querySelector(".list"),
      listCard = document.querySelector(".listCard"),
      total = document.querySelector(".total"),
      quantity = document.querySelector(".quantity")


openShopping.addEventListener("click", () => {
    body.classList.add("active");
})

closeShopping.addEventListener("click", () => {
    body.classList.remove("active")
})

let products = [
    {
        "id": 12,
        "name": "Camisa Manga Larga formal | Liso | Slim Fit",
        "image":"c1.jpg",
        "price": 450
    },
    {
        "id": 13,
        "name": "Camisa Manga Larga | Lisa | Slim-Fit",
        "image":"c2.jpg",
        "price": 500
    },
    {
        "id": 14,
        "name": "Camisa formal puño doble | Slim-Fit | Color blanco",
        "image":"c3.jpg",
        "price": 600
    }
    
]

const listCards = [];

function initApp() {
    products.forEach((product, key) => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");
        itemDiv.innerHTML = `
            <img src="imgTienda/${product.image}">
            <div class="title">${product.name}</div>
            <div class="price">$${product.price.toLocaleString()} MXN</div>
            <button class="add-to-cart-button" data-key="${key}">Agregar al Carrito</button>
        `;
        list.appendChild(itemDiv);
    });

    const addToCartButtons = document.querySelectorAll(".add-to-cart-button");
    addToCartButtons.forEach((button) => {
        button.addEventListener("click", addToCart);
    });
}


function addToCart(event) {
    const key = event.target.getAttribute("data-key");
    if (listCards[key] == null) {
        listCards[key] = { ...products[key], quantity: 1 };
    } else {
        listCards[key].quantity++;
    }

    reloadCard();
}

function reloadCard() {
    listCard.innerHTML = "";
    let count = 0;
    let totalPrice = 0;

    listCards.forEach((product, key) => {
        if (product) {
            totalPrice += product.price * product.quantity;
            count += product.quantity;

            const cardItem = document.createElement("li");
            cardItem.innerHTML = `
                <div><img src="imgTienda/${product.image}"></div>
                <div class="cardTitle">${product.name}</div>
                <div class="cardPrice">$${(product.price * product.quantity).toLocaleString()} MXN</div>
                <div>
                    <button style="background-color: #560bad;" class="cardButton" data-key="${key}" onclick="changeQuantity(${key}, ${product.quantity - 1})">-</button>
                    <div class="count">${product.quantity}</div>
                    <button style="background-color: #560bad;" class="cardButton" data-key="${key}" onclick="changeQuantity(${key}, ${product.quantity + 1})">+</button>
                </div>
            `;
            listCard.appendChild(cardItem);
        }
    });

    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity) {
    if (quantity === 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
    }

    reloadCard();
}

const payButton = document.querySelector(".pay-button");

payButton.addEventListener("click", () => {
    if (Object.keys(listCards).length > 0) {
        const totalToPay = Object.values(listCards).reduce((total, product) => total + product.price * product.quantity, 0);
        alert(`Total a Pagar: $${totalToPay.toFixed(2)} MXN\n\n¡Gracias por tu compra!`);
        // Asigna los datos del carrito al campo "productosInput" antes de enviar el formulario
        productosInput.value = JSON.stringify(Object.values(listCards));
        const formulario = document.querySelector("form");
        formulario.submit();
        listCards.length = 0;
        reloadCard();
    } else {
        alert("El carrito está vacío. Agrega productos antes de pagar.");
    }
});
initApp();
