// Inject Navbar
fetch("../components/navbar.html")
	.then((res) => res.text())
	.then((data) => {
		document.getElementById("navbar-placeholder").innerHTML = data;
	})
	.then(() => {
		// After navbar loads, update cart count
		if (typeof updateCartCountDisplay === "function") {
			updateCartCountDisplay();
		} else {
			const cart = JSON.parse(localStorage.getItem("cart")) || [];
			const cartCount = document.getElementById("cart-count");
			if (cartCount) cartCount.textContent = `(${cart.length})`;
		}
	});

// Inject Menu
fetch("../components/menu.html")
	.then((res) => res.text())
	.then((data) => {
		document.getElementById("menu-placeholder").innerHTML = data;
	})
	.then(() => {
		// Load script after DOM insert
		const script = document.createElement("script");
		script.src = "../components/menu.js";
		document.body.appendChild(script);
	});

// Inject Footer
fetch("../components/footer.html")
	.then((res) => res.text())
	.then((data) => {
		document.getElementById("footer-placeholder").innerHTML = data;
	});
