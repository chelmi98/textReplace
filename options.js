function add_option() {
	var oldwrd = document.getElementById("oldwrd");
	var newwrd = document.getElementById("newwrd");
	
	if(oldwrd.value != "" && newwrd.value != "") {
		localStorage[oldwrd.value] = newwrd.value;

		oldwrd.value = "";
		newwrd.value = "";
		restore_options();
	}
}

function remove_option() {
	var btn = document.getElementById("del");
	
	if (btn.value != "") {
		localStorage.removeItem(btn.value)
		
		btn.value = "";
		restore_options();
	}
}

function restore_options() {
	var existingWrds = "";
	for(i in localStorage) {
		existingWrds += "'" + i + "' - '" + localStorage[i] + "'<br>";
	}
	var wrdList = document.getElementById("storage");
	wrdList.innerHTML = existingWrds;
}

document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#add').addEventListener('click', add_option);
document.querySelector('#delGo').addEventListener('click', remove_option);