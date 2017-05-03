var cart = getCart();

var cartItems = [];
var totalLong = 0;

for(var x = 0; x < cart.length; x++){
	/*console.log(products[cart[x]]);*/

	cartItems.push(products[cart[x]]);

}
	/*console.log(cartItems);*/
	

	window.onload = function () {

	/*var cart = getCart();

	for(var x = 0; x < cart.length; x++){
		console.log(products[cart[x]])
	}*/

	emptyCartCheck();

}

function emptyCartCheck() {
	if ( cart.length === 0 || cart == "" ) {				
		var message = document.getElementById("message");
		var node = document.createTextNode("Your cart is empty!");
		message.appendChild(node);
		return;
	}	else {
		printItem();
	}
}
function printItem() {
	for ( var x = 0; x < cartItems.length; x++ ) {

		console.log(cartItems[x].picture);
		console.log(cartItems[x].alt)
		
		var imageLocation = document.getElementById("itemImage");
		var image = document.createElement("img");
		image.src = cartItems[x].picture;
		image.alt = cartItems[x].alt;
		/*image.alt = products[cart].alt;*/
		imageLocation.appendChild(image);
		
		var buttonLocation = document.getElementById("itemImage");
		var button = document.createElement("INPUT");
		button.setAttribute("type", "button");
		button.setAttribute("class", "removeButton");
		button.setAttribute("value", "Remove");
		button.setAttribute("x-data-id", x);
	
		buttonLocation.appendChild(button);
		button.onclick = function() {
			removeItemFromCart(this.getAttribute("x-data-id"));		
		}

		var priceBox = document.createElement("P");
		console.log(cartItems[x]);
		var cost = cartItems[x].price;
		/*var cost = document.createTextNode(cartItems[x].price);*/
		/*console.log(cost);*/
		var costNode = document.createTextNode("$" + cost);
		priceBox.setAttribute("id", "cartPrice");
		priceBox.appendChild(costNode);
		itemImage.appendChild(priceBox);

		totalLong += cost;
		totalCost = totalLong.toFixed(2);

	}
	var totalLocation = document.getElementById("bigBox");
	var totalElement = document.createElement("P");
	var totalNode = document.createTextNode("$" + totalCost);
	totalElement.appendChild(totalNode);
	totalElement.setAttribute("id", "totalCost");
	totalLocation.appendChild(totalElement);
	
	var submitElement = document.createElement("INPUT");
	submitElement.setAttribute("type", "button");
	submitElement.setAttribute("id", "gotoSubmit");
	submitElement.setAttribute("value", "Complete Order");
	submitElement.setAttribute("class", "gotoSubmit");
	submitElement.onclick = function() {
		location.href="OrderForm.html";
	}
	totalLocation.appendChild(submitElement);
}