// Initialize cart
let cart = [];
let totalPrice = 0;

// Add item to cart
function addToCart(productName, price) {
    cart.push({ productName, price });
    totalPrice += price;

    // Update cart display
    updateCart();
}

// Remove item from cart
function removeFromCart(index) {
    const item = cart[index];
    cart.splice(index, 1); // Remove item from cart
    totalPrice -= item.price; // Subtract item price from total price

    // Update cart display
    updateCart();
}

// Update the cart list and total price
function updateCart() {
    const cartList = document.getElementById('cart-list');
    const totalPriceElement = document.getElementById('total-price');

    // Clear the current cart list
    cartList.innerHTML = '';

    // Add each item in the cart to the list
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.productName} - ₹${item.price}`;

        // Create a "Remove" button for each item
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromCart(index);

        // Append the remove button to the list item
        li.appendChild(removeButton);

        // Append the list item to the cart list
        cartList.appendChild(li);
    });

    // Update the total price
    totalPriceElement.textContent = totalPrice;
}