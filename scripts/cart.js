const cartContainer = document.getElementById("product");
const content = document.getElementById("product-info");
const totalEl = document.querySelectorAll("#total");
const cartIds = JSON.parse(localStorage.getItem("cart")) || [];
let total = 0;

if (cartIds.length === 0) {
	content.innerHTML = `<img src='https://cdn-icons-png.flaticon.com/512/11329/11329060.png' loading='lazy' width='100vw' alt='empty cart image'><br>
    <h1>Your cart is empty.</h1>
    <a href='index.html'>Go back to home</a>
    `;
	cartContainer.style.display = "none";
	content.style.textAlign = "center";
	content.style.width = "100%";
} else {
	cartIds.forEach((id) => {
		const product = products.find((p) => p.id === id);
		if (product) {
			const item = document.createElement("aside");
			item.innerHTML = `
              <picture class="img">
                <img src="${product.image}" alt="${product.name}">
              </picture>
              <div class="info">
                <h1 class="name">${product.name}</h1>
                <p class="price">${product.price}</p>
                <button class="remove" onclick="clearCart('${product.id}')">remove</button>
              </div>
          `;
			cartContainer.appendChild(item);

			total += parseInt(product.price.replace("₹", ""));
		}
	});
	totalEl.forEach((el) => {
		el.innerHTML = ` ₹${total}`;
	});
}
// clears cart
function clearCart(id) {
	let cart = JSON.parse(localStorage.getItem("cart")) || [];

	// Remove the first matching product ID (not all)
	const index = cart.indexOf(id);
	if (index !== -1) {
		cart.splice(index, 1); // Remove that one item
	}

	localStorage.setItem("cart", JSON.stringify(cart));
	location.reload(); // Reload page to re-render the cart
}
