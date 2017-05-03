// order_from script
var cookies = document.cookie;

var costList = ["199.95", "99.95","89.95","179.95","239.95","219.95"];
var totalCost = 0;
var list = ["fname","lname","saddress","scity","sstate","szip","baddress","bcity","bstate","bzip","ccnumber","ccdate"]


window.onload = function () {	
	
	var items = parseCookies();
	orderTotal(items);	
	for (var x = 0; x < list.length; x++ ) {
		fieldChange(list[x]);
	}
}

function parseCookies() {
	var cookieSplit = cookies.split("=");
	var cookieItems = cookieSplit[1].split(",");
	return cookieItems;
}

function orderTotal (items) {
	var costBox = document.getElementById("smallBox");
	var costElement = document.createElement("P");
	costElement.setAttribute("id", "costMessage");
	for ( var c = 0; c < items.length; c++ ) {
		var index = items[c];
		var cost = Number(costList[index]);
		totalCost = totalCost + cost;		
		var endTotal = totalCost.toFixed(2);
	}

	var costNode = document.createTextNode("You have ordered " + items.length + " items. Your total cost is: $" + endTotal);
	costElement.appendChild(costNode);
	costBox.appendChild(costElement);
	sortedItems = items.sort();
	var getInput = document.getElementById("items");
	getInput.setAttribute("value", sortedItems);
	console.log(getInput.value);

}
function fillBilling(f) {
	if ( f.checkbox.value == "on" ) {
		f.baddress.value = f.saddress.value;
		f.bcity.value = f.scity.value;
		f.bstate.value = f.sstate.value;
		f.bzip.value = f.szip.value;
	}
	checkField ();	
}

function validate () {
	var fields = [];
	var errors = [];
	for (var x = 0; x < document.forms[0].elements.length; x++) {
		var item = document.forms[0].elements[x];
		if (item.type == "text") {			 
			if (item.value == "") {
				errors.push("1");	
			}	//end current.value		
		} //end current.type			
 	}	//end for loop
 	if ( errors.length == 0 ) {
 		return true;
	} else { //end errors.length
		clearError();
		printError();
		checkField();
		return false;
	} //end else statement
} //end function
function clearError () {
	var a = document.getElementById("errorBox");
	while (a.hasChildNodes()) {
		a.removeChild(a.firstChild);
	}
}
function printError () {
	var a = document.getElementById("errorBox");
	var b = document.createElement("p");
	var c = document.createTextNode("All fields must be completed before submitting!");
	b.appendChild(c);
	a.appendChild(b);
}
function checkField () {
	for ( var x = 0; x < list.length; x++ ) {
		var field = document.getElementById(list[x]);
		if (field.value == "") {
			field.style.backgroundColor = "red";
			field.style.borderColor = "red";
		} else {
			field.style.backgroundColor ="white";
			field.style.borderColor ="black";
		}
	}
}
function fieldChange (name) {	
	var field = document.getElementById(name);
	field.onfocus = function () {
	this.style.backgroundColor ="white";
	this.style.borderColor ="black";
	} // onfocus function
	field.onblur = function () {
		if ( this.value == "") {
			this.style.backgroundColor ="red";
			this.style.borderColor = "red";
		} // if statement
	}	// onblur function	
} // fieldChange