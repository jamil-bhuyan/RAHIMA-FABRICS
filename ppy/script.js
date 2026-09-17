let cart = [];


// ADD PRODUCT TO CART
function addToCart(productName, price) {

    cart.push({
        name: productName,
        price: price
    });

    document.getElementById("cart-count").innerText = cart.length;

    alert(productName + " added to your cart!");
}


// SHOW CART
function showCart() {

    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    let message = "YOUR CART\n\n";
    let total = 0;

    cart.forEach((item, index) => {

        message +=
            (index + 1) +
            ". " +
            item.name +
            " - ৳" +
            item.price +
            "\n";

        total += item.price;
    });

    message +=
        "\n----------------\n" +
        "Total: ৳" +
        total;

    alert(message);
}


// SEARCH
function searchProduct() {

    let product = prompt(
        "What are you looking for?"
    );

    if (product) {

        alert(
            "Searching for: " +
            product
        );
    }
}


// NEWSLETTER
function subscribe() {

    let email =
        document.getElementById("email").value;

    if (email === "") {

        alert(
            "Please enter your email address."
        );

        return;
    }

    alert(
        "Thank you for subscribing! 🎉"
    );

    document.getElementById("email").value = "";
}