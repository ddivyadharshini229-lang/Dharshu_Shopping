let cart = JSON.parse(localStorage.getItem("cart")) || [];

const addButtons = document.querySelectorAll(".add-cart");

addButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const productName = button.getAttribute("data-name");
        const productPrice = Number(button.getAttribute("data-price"));

        // Original price and discount
        const productOriginalPrice =
            Number(button.getAttribute("data-original")) || productPrice;

        const existingProduct = cart.find(
            product => product.name === productName
        );

        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push({
                name: productName,
                price: productPrice,
                originalPrice: productOriginalPrice,
                quantity: 1
            });
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        alert(productName + " added to cart 🛒");
    });
});