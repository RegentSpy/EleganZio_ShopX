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
        "id": 1,
        "name": "Traje para hombre dos botones | Azul a cuadros | Slim Fit",
        "image":"t1.jpg",
        "price": 3200
    },
    {
        "id": 2,
        "name": "Traje liso para hombre | Café | Slim fit",
        "image":"t2.jpg",
        "price": 2200
    },
    {
        "id": 3,
        "name": "Traje para hombre dos botones | Liso | Slim Fit",
        "image":"t3.jpg",
        "price": 3200
    },
    {
        "id": 4,
        "name": "Traje para hombre dos botones | Liso | Slim Fit",
        "image":"t4.jpg",
        "price": 2500
    },
    {
        "id": 5,
        "name": "Traje Recto Dos Botones | Gris | Slim Fit",
        "image":"t5.jpg",
        "price": 2259
    },
    {
        "id": 6,
        "name": "Traje Recto Dos Botones Lino| Beige Liso | Slim Fit",
        "image":"t6.jpg",
        "price": 2759
    }
]


let listCards = [];

const initApp = () => {
    products.forEach((value, key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
            <img src = "imgTienda/${value.image}">
            <div class = "title">${value.name}</div>
            <div class="price">$${value.price.toLocaleString()} MXN</div>
            <button onclick = "addToCard(${key})">Agregar al Carrito</button>
        `;
        list.appendChild(newDiv)
    })
}

initApp()


const addToCard = key => {
    if(listCards[key] == null) {
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        // console.log(listCards);
        listCards[key].quantity = 1;
        // console.log(listCards[key].quantity);
    }

    reloadCard()
}

const reloadCard = () => {
    listCard.innerHTML = "";
    let count = 0;
    let totalPrice= 0;

    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price
        count = count + value.quantity;

        if(value != null) {
            let newDiv = document.createElement("li");
            newDiv.innerHTML = `
                <div><img src = "imgTienda/${value.image}"></div>
                <div class = "cardTitle">${value.name}</div>
                <div class = "cardPrice">${value.price.toLocaleString()}</div>

                <div>
                    <button style = "background-color:#560bad;" class = "cardButton" onclick = "changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class = "count">${value.quantity}</div>
                    <button style = "background-color:#560bad;" class = "cardButton" onclick = "changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `
            listCard.appendChild(newDiv)
        }

        total.innerText = totalPrice.toLocaleString();
        quantity.innerText = count;
    })
}


const changeQuantity = (key, quantity) => {
    if(quantity == 0) {
        delete listCards[key]
    }
    else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price
    }
    reloadCard()

}// ...

const payButton = document.querySelector(".pay-button"); // Agrega un botón de "Pagar" en tu HTML.

payButton.addEventListener("click", () => {
    if (listCards.length > 0) {
        const totalToPay = listCards.reduce((total, product) => total + product.price, 0);
        alert(`Total a Pagar: $${totalToPay.toFixed(2)} MXN\n\n¡Gracias por tu compra!`);
        
        // Aquí puedes agregar lógica adicional para procesar el pago, como enviar a una pasarela de pago, registrar la compra en una base de datos, etc.

        listCards = []; // Limpia el carrito después de la compra.
        reloadCard();
    } else {
        alert("El carrito está vacío. Agrega productos antes de pagar.");
    }
});
