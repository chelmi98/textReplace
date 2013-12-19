function add_option() {
	var oldwrd = document.getElementById("oldwrd");
	var newwrd = document.getElementById("newwrd");
	
	// If there is text in both fields
	if(oldwrd.value != "" && newwrd.value != "") {
		localStorage[oldwrd.value] = newwrd.value;
	
		// Resets fields
		oldwrd.value = "";
		newwrd.value = "";
		restore_options();
	}
}

function remove_option() {
	var delwrd = document.getElementById("del");
	
	// If there is text in the field
	if (delwrd.value != "") {
		localStorage.removeItem(delwrd.value)
		
		// Resets field
		delwrd.value = "";
		restore_options();
	}
}

function restore_options() {
	// Creates list of words on options page
	var wrdlst = "";
	for(i in localStorage) {
		wrdlst += "'" + i + "' - '" + localStorage[i] + "'<br>";
	}
	document.getElementById("storage").innerHTML = wrdlst;
}

document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#add').addEventListener('click', add_option);
document.querySelector('#delGo').addEventListener('click', remove_option);