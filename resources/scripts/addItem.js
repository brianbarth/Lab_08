function saveCart(cart) {
	// cart is an array
	document.cookie = "cart="+cart.join(",");
}

function getCart() {

	var cookie = document.cookie;

	if(cookie.length === 0){
		return [];
	}

	var cookieAsArray = cookie.split('=');

	if(cookieAsArray.length < 2){
		return [];
	}

	if(cookieAsArray[0] != "cart"){
		return [];
	}

	var cartAsString = cookieAsArray[1];

	if(!cartAsString && cartAsString.length > 0){
		return [];
	}

	var cartAsArray = cartAsString.split(',');

	if ( cartAsArray[0] == "" ) {
		cartAsArray.splice(0, 1);
	}

	return cartAsArray;
}

function addItemToCart(productId) {

	var cart = getCart(); // this returns an array

	cart.push(productId);
	saveCart(cart);
	alert('Your item was added.');
	location.href="cart.html";
}

function removeItemFromCart(index) {

	var cart = getCart(); // return as array

	cart.splice(index, 1);

	saveCart(cart);
	alert('Item removed');
	location.reload();
	return;
}


