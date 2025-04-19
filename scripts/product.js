const container = document.getElementById("container");
const productImg = document.getElementById("product-img");
const productInfo = document.getElementById("product-info");
const selectedId = localStorage.getItem("selectedProduct");
const product = products.find((p) => p.id === selectedId);

if (product) {
	const mainImgSrc = product.images?.[0] || product.image; // fallback if images is empty

	productImg.innerHTML = `
  <picture class="main-img-container">
    <img id="main-product-img" src="${mainImgSrc}" alt="${product.name}">
  </picture>
  <div class="thumbnail-container">
    ${product.images
		.map(
			(img, index) => `
        <img class="thumbnail ${
			index === 0 ? "active" : ""
		}" src="${img}" alt="thumb-${index}" onclick="updateMainImage('${img}', this)">
      `
		)
		.join("")}
  </div>
`;

	productInfo.innerHTML = `
    <h1 class="name">${product.name}</h1>
    <h1 class="price">${product.price}</h1>
    <button class="add-to-cart" onclick="addToCart(event, '${product.id}')">add to cart</button>
    <details class="details drop-down">
      <summary class="detail">details <i class="ri-add-line"></i></summary>
      <p class="detailed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
    </details>
    <details class="desc drop-down">
      <summary class="detail">description <i class="ri-add-line"></i></summary>
      <p class="detailed">${product.description}</p>
    </details>
    <details class="shipping drop-down">
      <summary class="detail">shipping & returns <i class="ri-add-line"></i></summary>
      <p class="detailed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
    </details>
    <details class="care drop-down">
      <summary class="detail">customer care <i class="ri-add-line"></i></summary>
      <p class="detailed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
    </details>
  `;
} else {
	container.innerHTML = "<p>Product not found.</p>";
}
// suggestions logic (filter other products from same category)
const suggestionsList = document.getElementById("suggestions-list");
if (product && suggestionsList) {
	let suggestions = products.filter(
		(p) => p.id !== product.id && p.category === product.category
	);

	// fallback if less than 4
	if (suggestions.length < 4) {
		const remaining = 6 - suggestions.length;
		const fallback = products
			.filter((p) => p.id !== product.id && !suggestions.includes(p))
			.sort(() => 0.5 - Math.random()) // shuffle
			.slice(0, remaining);
		suggestions = suggestions.concat(fallback);
	}

	suggestions.forEach((item) => {
		const div = document.createElement("aside");
		div.classList.add("product-card");
		div.innerHTML = `
  <picture>
    <img src="${item.image}" alt="${item.name}" loading="lazy" />
  </picture>
  <div class="product">
    <p class="name">${item.name}</p>
    <p class="price">${item.price}</p>
  </div>
  `;
		div.onclick = () => {
			localStorage.setItem("selectedProduct", item.id);
			window.location.href = "./product.html";
		};
		suggestionsList.appendChild(div);
	});
}

// updates the cart count display
function updateCartCountDisplay() {
	const cart = JSON.parse(localStorage.getItem("cart")) || [];
	const cartCount = document.getElementById("cart-count");
	if (cartCount) {
		cartCount.textContent = `(${cart.length})`;
	}
}
// adds items to cart
function addToCart(event, id) {
	const cart = JSON.parse(localStorage.getItem("cart")) || [];
	cart.push(id);
	localStorage.setItem("cart", JSON.stringify(cart));
	updateCartCountDisplay();
}
