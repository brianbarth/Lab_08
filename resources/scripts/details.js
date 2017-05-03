var productId = location.search.split("=")[1];

var currentProduct = products[productId];

window.onload = function(){
	
	checkContent();
	setDetails();
	
}

function setDetails() {
	var picture_dom = document.getElementById("product_image");
	var price_dom = document.getElementById("product_price");
	var add_to_cart_button = document.getElementById("add_to_cart_button");
	var description_dom = document.getElementById("product_description");
	
	var price = currentProduct.price;
	price_dom.innerHTML = price;

	var description = currentProduct.description;
	description_dom.innerHTML = description;
	picture_dom.src = currentProduct.picture;
	
	add_to_cart_button.onclick = function() {
		addItemToCart(productId);
	}
}
function checkContent () {
	var product_dom = document.getElementById("product_details");
	var product_not_found_dom = document.getElementById("product_not_found");

	if ( currentProduct === undefined) {		
		product_dom.style.display = 'none';
		product_not_found.style.display = 'block';		
	} else {
		product_dom.style.display = 'block';
		product_not_found.style.display = 'none';
	}
}

function add_product_to_cart() {
	console.log(currentProduct);
}


